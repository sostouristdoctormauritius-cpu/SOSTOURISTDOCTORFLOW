import { useNavigation, useRoute } from "@react-navigation/native"
import {
  Call,
  CallContent,
  CallingState,
  StreamCall,
  useStreamVideoClient,
} from "@stream-io/video-react-native-sdk"
import { Screen, Text } from "app/components"
import HeaderBackButton from "app/components/headerBackButton"
import { useStores } from "app/models"
import { AppStackScreenProps } from "app/navigators"
import { useHeader } from "app/utils/useHeader"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect } from "react"
import { Dimensions, StyleSheet, View, ViewStyle } from "react-native"

interface CallScreenProps extends AppStackScreenProps<"Call"> {}

export const StreamVideoCallScreen: FC<CallScreenProps> = observer(function CallScreen() {
  const route = useRoute()
  const { streamChannelId, doctorName, callData } = route.params as {
    streamChannelId?: string //   "streamChannelId": "679dd1fb684e5f002024a5bb-673bedb3f6da2500201cd8db",
    doctorName?: string
    callData?: { call_cid: string; created_by_display_name?: string }
  }
  const navigation = useNavigation()
  const {} = useStores()

  // Extract channel ID from either direct param or notification data
  const channelId = React.useMemo(() => {
    if (callData?.call_cid) {
      // Call CID format is "default:[channelId]"
      // "callerId": "default:679dd1fb684e5f002024a5bb-673bedb3f6da2500201cd8db"
      return callData.call_cid.split(":")[1]
    }
    return streamChannelId
  }, [callData, streamChannelId])

  useHeader({
    title: `Video Call with Dr ${doctorName || callData?.created_by_display_name || "the Doctor"}`,
    LeftActionComponent: <HeaderBackButton />,
  })

  const [call, setCall] = React.useState<Call | null>(null)

  const client = useStreamVideoClient()
  useEffect(() => {
    if (!client || !channelId) {
      return
    }
    const _call = client.call("default", channelId)
    _call?.join({ create: true }).then(() => setCall(_call))
  }, [client, channelId])

  // useEffect(() => {
  //   if (!client || !channelId) {
  //     return
  //   }

  //   const joinCall = async () => {
  //     const _call = client.call("default", channelId)

  //     try {
  //       // For guest users, use this alternative approach
  //       await _call.get()

  //       if (_call.state.callingState === CallingState.LEFT) {
  //         throw new Error("Call has already ended")
  //       }

  //       // Join with user context
  //       await _call.join({
  //         user: {
  //           id: user?.id || `guest-${StreamVideoInstance?.userID}`, // Use real user ID if available
  //           name: user?.name || "Guest",
  //           role: "user",
  //         },
  //         create: false, // Never create for incoming calls
  //       })

  //       setCall(_call)
  //     } catch (error) {
  //       console.error("Call join error:", error)
  //       navigation.goBack()
  //     }
  //   }

  //   joinCall()
  // }, [client, channelId, user])

  useEffect(() => {
    return () => {
      // cleanup the call on unmount if the call was not left already
      if (call?.state.callingState !== CallingState.LEFT) {
        call?.leave()
      }
    }
  }, [call, channelId])

  if (!call) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Joining call...</Text>
        <Text style={styles.subTitle}>
          (if you have video appointment, we will find it and connect you)
        </Text>
      </View>
    )
  }

  return (
    <Screen style={$root} preset="fixed">
      <StreamCall call={call}>
        <View style={styles.videoContainer}>
          <CallContent onHangupCallHandler={() => navigation.goBack()} />
        </View>
      </StreamCall>
    </Screen>
  )
})

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  subTitle: { fontSize: 12, textAlign: "center" },
  text: { fontSize: 20 },
  videoContainer: {
    height: Dimensions.get("window").height - 60,
    width: Dimensions.get("window").width,
  },
})

const $root: ViewStyle = {
  flex: 1,
}
