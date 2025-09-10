import remoteConfig from "@react-native-firebase/remote-config"

import { FirebaseSOS } from "app/constants/Google"
import EphemeralStore from "app/manager/EphemeralStore"

export const fetchRemoteConfig = async () => {
  let success
  try {
    await remoteConfig().setDefaults({ awesome_new_feature: "disabled" })
    const fetchedRemotely = await remoteConfig().fetchAndActivate()

    const message = fetchedRemotely
      ? "Configs were retrieved from the backend and activated."
      : "No configs were fetched from the backend, and the local configs were already activated"
    console.debug(message)
    success = true
  } catch (error) {
    console.error("An error occurred while fetching remote configs", error)
    success = false
  }
  EphemeralStore.set(FirebaseSOS.RemoteConfig.Activated, success)
  return success
}

export const getRemoteConfigAsString = (key: string) => {
  let value = ""
  if (EphemeralStore.get(FirebaseSOS.RemoteConfig.Activated)) {
    value = remoteConfig().getValue(key).asString()
  }
  return value
}
