import messaging from "@react-native-firebase/messaging"
import { Alert, Linking, PermissionsAndroid, Platform } from "react-native"

interface PermissionStatus {
  camera: boolean
  microphone: boolean
  notifications: boolean
}

export async function requestStreamPermissions(): Promise<PermissionStatus> {
  const permissionStatus: PermissionStatus = {
    camera: false,
    microphone: false,
    notifications: false,
  }

  try {
    // Handle notifications permissions
    const notificationAuthStatus = await messaging().requestPermission()
    permissionStatus.notifications =
      notificationAuthStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      notificationAuthStatus === messaging.AuthorizationStatus.PROVISIONAL

    if (Platform.OS === "ios") {
      // iOS permissions are handled through Info.plist
      // The permissions will be requested automatically when needed
      permissionStatus.camera = true
      permissionStatus.microphone = true
    } else {
      // Helper function for Android permission requests
      const requestAndroidPermission = async (
        permission: PermissionsAndroid.Permission,
        options: {
          title: string
          message: string
          buttonNeutral?: string
          buttonNegative?: string
          buttonPositive?: string
        },
      ) => {
        try {
          const currentStatus = await PermissionsAndroid.check(permission)
          if (currentStatus) {
            return PermissionsAndroid.RESULTS.GRANTED
          }

          // Directly request permission without checking rationale
          const result = await PermissionsAndroid.request(permission, options)

          if (result === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            Alert.alert(
              "Permission Required",
              `Please enable ${options.title.toLowerCase()} in app settings`,
              [
                { text: "Cancel", style: "cancel" },
                { text: "Open Settings", onPress: () => Linking.openSettings() },
              ],
            )
          }
          return result
        } catch (error) {
          console.error(`Error requesting ${permission} permission:`, error)
          return PermissionsAndroid.RESULTS.DENIED
        }
      }

      // Request camera permission
      const cameraGranted = await requestAndroidPermission(PermissionsAndroid.PERMISSIONS.CAMERA, {
        title: "Camera Permission",
        message: "This app needs access to your camera for video calls",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      })

      // Request microphone permission
      const microphoneGranted = await requestAndroidPermission(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: "Microphone Permission",
          message: "This app needs access to your microphone for video calls",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        },
      )

      permissionStatus.camera = cameraGranted === PermissionsAndroid.RESULTS.GRANTED
      permissionStatus.microphone = microphoneGranted === PermissionsAndroid.RESULTS.GRANTED
    }

    return permissionStatus
  } catch (error) {
    console.error("Error requesting permissions:", error)
    return permissionStatus
  }
}
