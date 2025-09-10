import { Call, CallingState } from "@stream-io/video-react-native-sdk"
import { MEMORY_INCOMING_CALL } from "app/constants/Memory"
import { SCREENS_VIDEO_CALL } from "app/constants/Screens"
import { requestStreamPermissions } from "app/manager/Stream/requestPermissions"
import { StreamVideoInstance } from "app/manager/Stream/streamClients"
import { navigationRef } from "app/navigators/navigationUtilities"
import { PhoneIcon, PhoneOff } from "lucide-react-native"
import React, { useCallback, useEffect, useState } from "react"
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native"
import { useMMKVObject } from "react-native-mmkv"

const VIBRATION_PATTERN = Platform.select({
  android: [500, 1000] as [number, number],
  ios: [0, 1000, 500, 1000] as number[],
})

// const SYSTEM_RINGTONE_URI = Platform.select({
//   ios: "system://ringtone",
//   android: "content://settings/system/ringtone",
// })

const IncomingCallScreen = () => {
  const [incomingCall, setIncomingCall] =
    useMMKVObject<StreamVideoNotification>(MEMORY_INCOMING_CALL)

  const [call, setCall] = useState<Call | null>(null)

  useEffect(() => {
    requestStreamPermissions()
  }, [])

    useEffect(() => {
    const initCall = async () => {
      try {
        const callCid = incomingCall?.call_cid
        if (!callCid) {
          return
        }
        const [type, id] = callCid.split(":")
        if (!type || !id) {
          return
        }
        const callInstance = StreamVideoInstance.call(type, id)
        await callInstance.get()
        setCall(callInstance)
      } catch (error) {
        console.error("Failed to initialize call:", error)
        setIncomingCall(undefined)
      }
    }
    if (incomingCall?.call_cid) {
      initCall()
    }
  }, [incomingCall?.call_cid, setIncomingCall])

  useEffect(() => {
    return () => {
      if (call?.state.callingState !== CallingState.LEFT) {
        call?.leave()
      }
    }
  }, [call])

  useEffect(() => {
    if (incomingCall?.call_cid) {
      Vibration.vibrate(VIBRATION_PATTERN, true)
    }

    return () => Vibration.cancel()
  }, [incomingCall?.call_cid])

  // // Sound handling
  // useEffect(() => {
  //   const playRingtone = async () => {
  //     try {
  //       const { sound } = await Audio.Sound.createAsync(
  //         { uri: SYSTEM_RINGTONE_URI },
  //         { shouldPlay: true, isLooping: true },
  //       )
  //       soundRef.current = sound
  //     } catch (error) {
  //       console.warn("Could not play ringtone", error)
  //     }
  //   }

  //   playRingtone()

  //   return () => {
  //     soundRef.current?.stopAsync().catch(console.warn)
  //     soundRef.current?.unloadAsync().catch(console.warn)
  //     soundRef.current = undefined
  //   }
  // }, [])

  const onHandleAcceptCall = useCallback(() => {
    navigationRef.navigate(SCREENS_VIDEO_CALL, {
      callData: {
        call_cid: incomingCall?.call_cid,
        created_by_display_name: incomingCall?.created_by_display_name,
        ...incomingCall,
      },
      streamChannelId: call?.id,
      doctorName: incomingCall?.created_by_display_name || "Doctor",
    })
    Vibration.cancel()
    setIncomingCall(undefined)
    setCall(null)
  }, [call, incomingCall, setIncomingCall])

  const onHandleDeclineCall = useCallback(() => {
    setIncomingCall(undefined)
    setCall(null)
  }, [setIncomingCall])

  const renderIncomingCall = useCallback(() => {
    return (
      <View style={styles.incomingCallContainer}>
        <View style={styles.callerInfoContainer}>
          <Text style={styles.callerName}>{"SOS Tourist Doctor"}</Text>
          <Text style={styles.callStatus}>
            {incomingCall?.created_by_display_name
              ? `Dr. ${incomingCall.created_by_display_name}`
              : "SOS Tourist Doctor"}
          </Text>
          <Text style={styles.callStatus}>Incoming video call...</Text>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.actionButton, styles.declineButton]}
            onPress={onHandleDeclineCall}
          >
            <PhoneOff size={32} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.acceptButton]}
            onPress={onHandleAcceptCall}
          >
            <PhoneIcon size={32} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }, [incomingCall, onHandleAcceptCall, onHandleDeclineCall])

  if (!call) {
    return null
  }

  return <SafeAreaView style={StyleSheet.absoluteFill}>{renderIncomingCall()}</SafeAreaView>
}

const styles = StyleSheet.create({
  acceptButton: {
    backgroundColor: "#34C759",
  },
  actionButton: {
    alignItems: "center",
    borderRadius: 32,
    height: 64,
    justifyContent: "center",
    width: 64,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 40,
  },
  callStatus: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 12,
    opacity: 0.8,
  },
  callerInfoContainer: {
    alignItems: "center",
    marginTop: Dimensions.get("window").height / 2 - 100,
  },
  callerName: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 12,
  },
  declineButton: {
    backgroundColor: "#FF3B30",
  },
  incomingCallContainer: {
    backgroundColor: "rgba(0,0,0,0.9)",
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
})

export default IncomingCallScreen
