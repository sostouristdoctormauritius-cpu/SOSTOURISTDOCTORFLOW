import RNCallKeep from "react-native-callkeep"
import { v4 as uuidv4 } from "uuid"

const options = {
  ios: {
    appName: "My app name",
  },
  android: {
    selfManaged: true,
    alertTitle: "Permissions required",
    alertDescription: "This application needs to access your phone accounts",
    cancelButton: "Cancel",
    okButton: "ok",
    imageName: "phone_account_icon",
    // additionalPermissions: [PermissionsAndroid.PERMISSIONS.example],
    // Required to get audio in background when using Android 11
    foregroundService: {
      channelId: "com.medicassistanceinternationalltd.sostouristdoctor",
      channelName: "default",
      notificationTitle: "My app is running on background",
      notificationIcon: "Path to the resource icon of the notification",
    },
  },
}

export const setupCallKeep = async () => {
  try {
    // RNCallKeep.setAvailable(true)
    // RNCallKeep.setForegroundService(true) // Add this to prevent the service from being killed
    // RNCallKeep.setDebug(true) // Enable debugging
  } catch (error) {
    console.error("CallKeep setup failed:", error)
  }
}

export const displayIncomingCall = (data: StreamVideoNotification) => {
  try {
    const callerId = uuidv4()
    const callerName = "SOS Tourist Doctor"
    const handle = "1234567890"
    const callType = "number"
    const isVideo = true
    RNCallKeep.displayIncomingCall(callerId, callerName, handle, callType, isVideo)
  } catch (error) {
    console.error("CallKeep display incoming call failed:", error)
  }
}
