import { EVENT_LOGOUT } from "app/constants/Events"
import EphemeralStore from "app/manager/EphemeralStore"
import { StreamChatInstance, StreamVideoInstance } from "app/manager/Stream/streamClients"
import { useStores } from "app/models"
import { useEffect } from "react"
import { DeviceEventEmitter } from "react-native"

export const useLogout = () => {
  const {
    authenticationStore: { logout },
    // appConfigStore: { clearAll },
  } = useStores()

  useEffect(() => {
    const listener = DeviceEventEmitter.addListener(EVENT_LOGOUT, () => {
      // clearAll()
      logout()
      EphemeralStore.clear()
      StreamChatInstance?.disconnectUser()
      StreamVideoInstance?.disconnectUser()
    })

    return () => {
      listener.remove()
    }
  }, [logout])
}

export const emitLogout = () => {
  DeviceEventEmitter.emit(EVENT_LOGOUT)
}
