import notifee, { AndroidImportance, EventType } from "@notifee/react-native"
import messaging from "@react-native-firebase/messaging"
import { MEMORY_INCOMING_CALL } from "app/constants/Memory"
import { Audio } from "expo-av"
import { Alert, Linking } from "react-native"
import MMKVInstance from "../Memory"
import { StreamChatInstance } from "../Stream/streamClients"

const handleVideoCallNotification = (data: StreamVideoNotification) => {
  console.log("PushNotifManager >>> Handling VIDEO call notification")

  if (isVideoCallNotification(data)) {
    console.log("PushNotifManager >>> will incoming call")
    showIncomingCall(data)
  }
}

const handleChatNotification = (data: StreamChatNotification) => {
  console.log("PushNotifManager >>> Handling CHAT call notification", { data })
}

function handleNotification(data: StreamNotification) {
  if (data.sender === "stream.video") {
    handleVideoCallNotification(data as StreamVideoNotification)
  } else {
    handleChatNotification(data as StreamChatNotification)
  }
}

// Show CallKit UI
const showIncomingCall = async (data: any) => {
  try {
    const { call_cid: callerId, created_by_display_name: callerName } = data

    console.log("Displaying incoming call for:", { callerId, callerName })
    const incomingCall = JSON.stringify(data)
    MMKVInstance.set(MEMORY_INCOMING_CALL, incomingCall)
    console.log("PushNotifManager >>> Incoming call set in memory", incomingCall)
  } catch (error) {
    console.error("Error displaying incoming call:", error)
  }
}

const isVideoCallNotification = (data: StreamNotification) => {
  return data.type === "call.notification" || data.type === "call.ring"
}

async function displayLocalNotification(data: StreamNotification) {
  await notifee.requestPermission()

  await notifee.createChannel({
    id: "default",
    name: "Default Channel",
    importance: 4, // HIGH priority
  })

  const title = isVideoCallNotification(data) ? "Video Call" : "Chat Message"
  const body = isVideoCallNotification(data)
    ? "You have a new video call"
    : "You have a new message"

  if (isVideoCallNotification(data)) {
    const incomingCall = JSON.stringify(data)
    MMKVInstance.set(MEMORY_INCOMING_CALL, incomingCall)
  }

  await notifee.displayNotification({
    title,
    body,
    android: {
      channelId: "default",
      importance: AndroidImportance.HIGH,
      vibrationPattern: [300, 500, 300],
      pressAction: {
        id: "default",
      },
    },
  })
}

async function playNotificationSound() {
  const { sound } = await Audio.Sound.createAsync(
    require("../../../assets/sound/newMessage.mp3"), // Place a notification sound file in your assets folder
  )
  await sound.playAsync()
}

export const PushNotificationManager = {
  init: async () => {
    try {
      // Request permissions
      const authStatus = await messaging().requestPermission()
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL

      if (!enabled) {
        Alert.alert("Push Notifications", "You won't receive push notifications.")
        return
      }

      // Handle notifications when app is in background
      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        console.log(
          "PushNotifManager >>> Message handled in the background!",
          JSON.stringify(remoteMessage, null, 2),
        )

        if (remoteMessage.data) {
          const data = remoteMessage.data as unknown as StreamNotification
          displayLocalNotification(data)
        }
      })

      // Handle notifications when app is in foreground
      messaging().onMessage(async (remoteMessage) => {
        console.log(
          "PushNotifManager >>> Received foreground message:",
          JSON.stringify(remoteMessage, null, 2),
        )
        if (remoteMessage.data) {
          handleNotification(remoteMessage.data as unknown as StreamNotification)
          // Play sound only for chat messages
          if (!isVideoCallNotification(remoteMessage.data)) {
            await playNotificationSound()
          }
        }
      })

      // Open App from Notification When Quit
      messaging().onNotificationOpenedApp((remoteMessage) => {
        console.log("🚀 App Opened from Notification:", remoteMessage)

        // Handle Deep Link Navigation
        const { data } = remoteMessage || {}
        if (data?.screen) {
          Linking.openURL(data.screen as string)
        }
      })

      // Check if app was opened from a notification
      messaging()
        .getInitialNotification()
        .then((remoteMessage) => {
          if (remoteMessage) {
            console.log(
              "PushNotifManager >>> App opened from quit state:",
              JSON.stringify(remoteMessage, null, 2),
            )
            if (remoteMessage.data) {
              handleNotification(remoteMessage.data as unknown as StreamNotification)
            }
          }
        })

      // Foreground: Handle Notification Clicks
      notifee.onForegroundEvent(({ type, detail }) => {
        if (type === EventType.PRESS) {
          console.log("🔔 Notification Pressed:", JSON.stringify(detail.notification, null, 2))

          // Open App or Navigate
          const { data } = detail.notification || {}
          handleNotification(data as unknown as StreamNotification)
        }
      })

      // Background: Handle Notification Clicks
      notifee.onBackgroundEvent(async ({ type, detail }) => {
        if (type === EventType.PRESS) {
          console.log(
            "🔔 Background Notification Pressed:",
            JSON.stringify(detail.notification, null, 2),
          )

          const { data } = detail.notification || {}
          handleNotification(data as unknown as StreamNotification)
        }
      })
    } catch (error) {
      console.error("Failed to initialize push notifications:", error)
    }
  },

  getToken: async (): Promise<string | null> => {
    try {
      const token = await messaging().getToken()
      console.log("PushNotifManager >>> Getting FCM token", token)
      return token
    } catch (error) {
      console.error("PushNotifManager >>> Error getting FCM token:", error)
      return null
    }
  },

  onTokenRefresh: (callback: (token: string) => void) => {
    return messaging().onTokenRefresh(callback)
  },

  unregister: async () => {
    try {
      const token = await messaging().getToken()
      if (token && StreamChatInstance.userID) {
        await StreamChatInstance.removeDevice(token)
      }
    } catch (error) {
      console.error("Error unregistering device:", error)
    }
  },
}
