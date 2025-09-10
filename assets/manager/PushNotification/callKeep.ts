import RNCallKeep from "react-native-callkeep"
import { v4 as uuidv4 } from "uuid"



export const setupCallKeep = async () => {
  try {
    // RNCallKeep.setAvailable(true)
    // RNCallKeep.setForegroundService(true) // Add this to prevent the service from being killed
    // RNCallKeep.setDebug(true) // Enable debugging
  } catch (error) {
    console.error("CallKeep setup failed:", error)
  }
}

export const displayIncomingCall = () => {
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
