import { StreamVideoClient } from "@stream-io/video-react-native-sdk"
import { STORE_STREAM_TOKEN } from "app/constants/Store"
import { STREAM_USER_ID } from "app/constants/Stream"
import { StreamChat } from "stream-chat"
import EphemeralStore from "../EphemeralStore"

export const StreamChatInstance = StreamChat.getInstance(process.env.STREAM_API_KEY)

export const StreamVideoInstance = new StreamVideoClient(process.env.STREAM_API_KEY, {
  tokenProvider: async () => {
    const token = await EphemeralStore.getData(STORE_STREAM_TOKEN)
    if (!token) {
      throw new Error("No authentication token available")
    }
    return token
  },
  user: {
    id: EphemeralStore.getData(STREAM_USER_ID),
  },
})
