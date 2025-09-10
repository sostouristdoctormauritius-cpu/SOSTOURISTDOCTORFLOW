// https://getstream.io/video/docs/react-native/advanced/push-notifications/ringing-setup/react-native/#setup-the-push-notifications-configuration-for-the-sdk

import notifee, { AndroidImportance } from "@notifee/react-native"
import messaging from "@react-native-firebase/messaging"

import {
  firebaseDataHandler,
  isFirebaseStreamVideoMessage,
  isNotifeeStreamVideoEvent,
  onAndroidNotifeeEvent,
} from "@stream-io/video-react-native-sdk"
import { SCREENS_VIDEO_CALL_RINGING } from "app/constants/Screens"
import { navigationRef } from "app/navigators"
import { CALL_CHANNEL_ID, CHAT_CHANNEL_ID } from "./constants"
export const setFirebaseListeners = () => {
  // Create channels (required for Android)
  notifee.createChannel({
    id: CALL_CHANNEL_ID,
    name: "Incoming call notifications",
    importance: AndroidImportance.HIGH,
    vibrationPattern: [300, 500],
    lights: true,
    sound: "default",
  })

  // Add new channel for chat messages
  notifee.createChannel({
    id: CHAT_CHANNEL_ID,
    name: "Chat messages",
    importance: AndroidImportance.DEFAULT,
    vibrationPattern: [300, 500],
    lights: true,
    sound: "default",
  })

  // Set up the background message handler
  messaging().setBackgroundMessageHandler(async (msg) => {
    console.log("setFirebaseListeners", JSON.stringify(msg, null, 2))
    if (isFirebaseStreamVideoMessage(msg)) {
      await firebaseDataHandler(msg.data)
    } else {
      // your other background notifications (if any)
    }
  })

  // on press handlers of background notifications
  notifee.onBackgroundEvent(async (event) => {
    console.log("onBackgroundEvent", JSON.stringify(event, null, 2))
    if (isNotifeeStreamVideoEvent(event)) {
      await onAndroidNotifeeEvent({ event, isBackground: true })
    } else {
      // your other background notifications (if any)
    }
  })

  // Optionally: set up the foreground message handler
  messaging().onMessage((msg) => {
    console.log("onMessage", JSON.stringify(msg, null, 2))
    if (isFirebaseStreamVideoMessage(msg)) {
      firebaseDataHandler(msg.data)
    } else {
      // your other foreground notifications (if any)
    }
  })
  //  Optionally: on press handlers of foreground notifications
  notifee.onForegroundEvent((event) => {
    console.log("onForegroundEvent", JSON.stringify(event, null, 2))
    if (isNotifeeStreamVideoEvent(event)) {
      onAndroidNotifeeEvent({ event, isBackground: false })
      navigationRef.current?.navigate(SCREENS_VIDEO_CALL_RINGING, {
        // callType: event.detail.callType,
        // callId: event.detail.callId,
        callCid: event?.detail?.notification?.data?.call_cid,
      })
    } else {
      // your other foreground notifications (if any)
    }
  })
}
