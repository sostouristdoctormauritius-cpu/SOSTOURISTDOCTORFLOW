import { StreamVideoClient, StreamVideoRN } from "@stream-io/video-react-native-sdk"
import { STORE_STREAM_TOKEN } from "app/constants/Store"
import { STREAM_USER_ID } from "app/constants/Stream"
import { AndroidImportance } from "expo-notifications"
import EphemeralStore from "../EphemeralStore"
import { CALL_CHANNEL_ID, PUSH_PROVIDER_NAME } from "./constants"

export function setPushConfig() {
  StreamVideoRN.setPushConfig({
    ios: {
      // add your push_provider_name for iOS that you have setup in Stream dashboard
      pushProviderName: PUSH_PROVIDER_NAME,
    },
    android: {
      // add your push_provider_name for Android that you have setup in Stream dashboard
      pushProviderName: PUSH_PROVIDER_NAME,
      // configure the notification channel to be used for incoming calls for Android.
      callChannel: {
        id: CALL_CHANNEL_ID,
        name: "Incoming call notifications",
        // This is the advised importance of receiving incoming call notifications.
        // This will ensure that the notification will appear on-top-of applications.
        importance: AndroidImportance.HIGH,
        // optional: if you dont pass a sound, default ringtone will be used
        // sound: <your sound url>
      },
      // configure the functions to create the texts shown in the notification
      // for incoming calls in Android.
      callNotificationTextGetters: {
        getTitle: (createdUserName: string) => `Dr ${createdUserName}`,
        getBody: (_createdUserName: string) => "Video Appointment",
      },
    },
    // add the async callback to create a video client
    // for incoming calls in the background on a push notification
    createStreamVideoClient: async () => {
      const userId = await EphemeralStore.getData(STREAM_USER_ID)
      const token = await EphemeralStore.getData(STORE_STREAM_TOKEN)

      if (!userId || !token) {
        console.error("Missing user ID or token for Stream client")
        return undefined
      }

      const tokenProvider = () => EphemeralStore.getData(STORE_STREAM_TOKEN)

      const user = { id: userId, name: userId }

      return StreamVideoClient.getOrCreateInstance({
        apiKey: process.env.STREAM_API_KEY,
        user,
        tokenProvider,
      })
    },
  })
}
