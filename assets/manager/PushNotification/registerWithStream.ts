import messaging from "@react-native-firebase/messaging"
import { StreamChatInstance } from "../Stream/streamClients"

const PUSH_PROVIDER_TYPE = "firebase"
const PUSH_PROVIDER_NAME = "Firebase"

const getFCMToken = async (): Promise<string | null> => {
  try {
    const token = await messaging().getToken()
    return token
  } catch (error) {
    console.error("Error getting FCM token:", error)
    return null
  }
}

export const registerWithStream = async (): Promise<void> => {
  try {
    // Get the current FCM token
    const token = await getFCMToken()
    if (!token) {
      return
    }

    console.log("fcm token", token)

    const chatUserID = StreamChatInstance.userID
    console.log("chatUserID", chatUserID)

    if (chatUserID) {
      await StreamChatInstance.addDevice(token, PUSH_PROVIDER_TYPE, chatUserID, PUSH_PROVIDER_NAME)
    }
    // Listen for token refresh
    messaging().onTokenRefresh(async (newToken) => {
      await StreamChatInstance.addDevice(
        newToken,
        PUSH_PROVIDER_TYPE,
        chatUserID,
        PUSH_PROVIDER_NAME,
      )
    })
  } catch (error) {
    console.error("Error details:", JSON.stringify(error, null, 2))
  }
}
