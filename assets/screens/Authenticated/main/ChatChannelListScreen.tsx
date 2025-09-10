import React, { FC, useEffect, useState } from "react"
import {
  ActivityIndicator,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { useNavigation, useIsFocused } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Channel, ChannelList, DefaultStreamChatGenerics } from "stream-chat-react-native"

import { Screen } from "app/components"
import { SCREENS_CHAT_LANDING } from "app/constants/Screens"
import { useSOSChatContext } from "app/manager/Stream/ChatContext"
import { useChatClient } from "app/manager/Stream/useChatClient"
import { useStores } from "app/models"
import { AppStackScreenProps } from "app/navigators"
import { useHeader } from "app/utils/useHeader"

interface ChatChannelListScreenProps extends AppStackScreenProps<"ChatChannelList"> {}

interface ChannelFilters {
  members: {
    $in: string[]
  }
}

const sort = { last_updated: -1 }
const options = {
  limit: 20,
  messages_limit: 30,
  state: true,
  watch: true,
}

export const ChatChannelListScreen: FC<ChatChannelListScreenProps> = observer(
  function ChatChannelListScreen() {
    const {
      authenticationStore: { user },
    } = useStores()

    useChatClient()
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const [refreshKey, setRefreshKey] = useState(0)

    const { setChannel } = useSOSChatContext()

    useHeader({
      title: "Chat Messages",
    })

    // Re-trigger ChannelList on screen focus
    useEffect(() => {
      if (isFocused) {
        setRefreshKey(prev => prev + 1)
      }
    }, [isFocused])

    const filters: ChannelFilters = {
      members: {
        $in: [user?.id ?? ""],
      },
    }

    const EmptyStateComponent = () => (
      <View style={$emptyStateContainer}>
        <Text style={$emptyStateTitle}>No Active Chats</Text>
        <Text style={$emptyStateDescription}>
          You don't have any active chat consultations at the moment.
        </Text>
      </View>
    )

    const LoadingIndicator = () => (
      <View style={$loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={$loadingText}>Loading chats...</Text>
      </View>
    )

    const ErrorIndicator = () => (
      <View style={$errorContainer}>
        <Text style={$errorText}>Unable to load chats</Text>
        <Text style={$errorDescription}>Please check your connection and try again</Text>
      </View>
    )

    const handleChannelSelect = (channel: Channel<DefaultStreamChatGenerics>) => {
      setChannel(channel)
      navigation.navigate(SCREENS_CHAT_LANDING)
    }

    return (
      <Screen style={$root} preset="scroll">
        <ChannelList<DefaultStreamChatGenerics>
          key={refreshKey}
          sort={sort}
          filters={filters}
          options={options}
          onSelect={handleChannelSelect}
          EmptyStateIndicator={EmptyStateComponent}
          loadingIndicator={LoadingIndicator}
          LoadingErrorIndicator={ErrorIndicator}
        />
      </Screen>
    )
  }
)

const $root: ViewStyle = {
  flex: 1,
}

const $emptyStateContainer: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
  backgroundColor: "white",
}

const $emptyStateTitle: TextStyle = {
  fontSize: 18,
  fontWeight: "600",
  marginBottom: 8,
  color: "#000",
}

const $emptyStateDescription: TextStyle = {
  fontSize: 14,
  color: "#666",
  textAlign: "center",
  lineHeight: 20,
}

const $loadingContainer: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
}

const $loadingText: TextStyle = {
  marginTop: 10,
  fontSize: 14,
  color: "#666",
}

const $errorContainer: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
}

const $errorText: TextStyle = {
  fontSize: 16,
  fontWeight: "600",
  color: "#ff0000",
  marginBottom: 8,
}

const $errorDescription: TextStyle = {
  fontSize: 14,
  color: "#666",
  textAlign: "center",
}
