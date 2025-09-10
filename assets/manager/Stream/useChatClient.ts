import { STREAM_USER_ID } from "app/constants/Stream"
import { StreamChatInstance } from "app/manager/Stream/streamClients"
import { useStores } from "app/models"
import { useEffect } from "react"
import EphemeralStore from "../EphemeralStore"
import { captureApiException } from "../Sentry"

export const setupStreamClient = async (userId: string, userEmail: string, streamToken: string) => {
  try {
    if (!userId || !userEmail || !streamToken) {
      return
    }

    const streamUser = {
      id: userId,
      name: userEmail,
    }

    await StreamChatInstance.connectUser(streamUser, streamToken)

    await EphemeralStore.storeData(STREAM_USER_ID, userId)
    // await EphemeralStore.storeData(STORE_STREAM_TOKEN, streamToken)
  } catch (error) {
    console.error("unable to setup stream Chat", error)
    captureApiException(error)
  }
}

export const useChatClient = () => {
  const {
    authenticationStore: { user, streamToken },
  } = useStores()

  useEffect(() => {
    if (!StreamChatInstance.userID) {
      if (user?.id && user?.email && streamToken) {
        setupStreamClient(user.id, user.email, streamToken)
      }
    }

    return () => {
      //  StreamChatInstance.disconnectUser()
    }
  }, [user?.id, streamToken, user?.email])

  return {
    streamUserId: StreamChatInstance.userID,
  }
}
