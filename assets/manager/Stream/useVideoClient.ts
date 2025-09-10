import { StreamVideoInstance } from "app/manager/Stream/streamClients"
import { useStores } from "app/models"
import { useEffect, useState } from "react"

export const useVideoClient = () => {
  const [clientIsReady, setClientIsReady] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    authenticationStore: { user, streamToken },
  } = useStores()

  useEffect(() => {
    const setupClient = async () => {
      try {
        const streamUser = {
          id: user?.id ?? "",
          name: user?.email ?? "",
          type: "guest" as const,
        }

        if (user?.id && streamToken) {
          // Connect user to Stream
          await StreamVideoInstance.connectUser(streamUser, streamToken)

          setClientIsReady(true)
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
      }
    }

    if (!StreamVideoInstance.userID) {
      setIsLoading(true)
      setupClient()
    }

    return () => {
      // StreamVideoInstance.disconnectUser()
    }
  }, [user?.id, streamToken, user?.email])

  return {
    clientIsReady,
    isLoading,
  }
}
