import { useNavigation } from "@react-navigation/native"
import { Screen } from "app/components"
import HeaderBackButton from "app/components/headerBackButton"
import { SCREENS_CHAT_THREAD } from "app/constants/Screens"
import { useSOSChatContext } from "app/manager/Stream/ChatContext"
import { AppStackScreenProps } from "app/navigators"
import { useHeader } from "app/utils/useHeader"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
  ViewStyle,
} from "react-native"
import { Channel, MessageInput, MessageList } from "stream-chat-react-native"

interface ChatLandingScreenProps extends AppStackScreenProps<"ChatLanding"> {}

const ChatLandingScreen: FC<ChatLandingScreenProps> = observer(function ChatLandingScreen() {
  const { channel, setThread } = useSOSChatContext()
  const navigation = useNavigation()

  useHeader({
    title: "Chat Consultation",
    LeftActionComponent: <HeaderBackButton />,
  })

  if (!channel) return null

  return (
    <SafeAreaView style={$safeArea}>
      <KeyboardAvoidingView
        style={$keyboardAvoid}
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 80}
      >
        <Channel channel={channel}>
          <View style={$chatContainer}>
            <MessageList
              onThreadSelect={(message) => {
                if (channel?.id) {
                  setThread(message)
                  navigation.navigate(SCREENS_CHAT_THREAD)
                }
              }}
              keyboardShouldPersistTaps="handled"
            />
            <MessageInput />
          </View>
        </Channel>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
})

const $safeArea: ViewStyle = {
  flex: 1,
  backgroundColor: "#fff",
}

const $keyboardAvoid: ViewStyle = {
  flex: 1,
}

const $chatContainer: ViewStyle = {
  flex: 1,
  justifyContent: "flex-end", // ensures input is always at the bottom
}

export default ChatLandingScreen
