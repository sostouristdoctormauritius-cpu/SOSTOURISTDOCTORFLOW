import messaging from "@react-native-firebase/messaging"
import { PermissionsAndroid, Platform } from "react-native"

/**
 * Request push notification permissions
 * @returns Promise<boolean> - Returns true if permissions are granted
 */
export const requestPushNotificationPermissions = async (): Promise<boolean> => {
  try {
    console.log("requestPushNotificationPermissions")
    if (Platform.OS === "ios") {
      const authStatus = await messaging().requestPermission()
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL

      return enabled
    }
    // For Android API 33+ we need to request notification permission
    if (Platform.OS === "android" && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      )
      return granted === PermissionsAndroid.RESULTS.GRANTED
    }
    // For Android API 32 and below, no explicit permission needed
    return true
  } catch (error) {
    console.error("Error requesting notification permissions:", error)
    return false
  }
}
