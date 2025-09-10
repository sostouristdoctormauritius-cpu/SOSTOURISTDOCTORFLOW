import { useNavigation } from "@react-navigation/native"
import { Text } from "app/components"
import { MEMORY_INCOMING_CALL } from "app/constants/Memory"
import { StreamChatInstance } from "app/manager/Stream/streamClients"
import { useChatClient } from "app/manager/Stream/useChatClient"
import { useVideoClient } from "app/manager/Stream/useVideoClient"
import { MessageCircleMore, Video } from "lucide-react-native"
import React, { useEffect, useState } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { useMMKVObject } from "react-native-mmkv"
import Separator from "../separator"

const Mailbox = () => {
  const [unreadCount, setUnreadCount] = useState(0)
  const navigation = useNavigation()
  const [incomingCall] = useMMKVObject(MEMORY_INCOMING_CALL)

  useChatClient()
  useVideoClient()

  useEffect(() => {
    if (!StreamChatInstance?.userID) {
      return
    }

    // Get all channels user is part of
    const channels = StreamChatInstance.queryChannels({
      members: { $in: [StreamChatInstance.userID] },
    })

    // Sum unread counts across all channels
    channels.then((channels) => {
      const totalUnread = channels.reduce(
        (acc, channel) => acc + (channel.state.unreadCount || 0),
        0,
      )
      setUnreadCount(totalUnread)
    })

    // Listen for new messages
    const handleEvent = (event) => {
      if (event.type === "message.new") {
        setUnreadCount((prev) => prev + 1)
      }
      if (event.type === "notification.mark_read") {
        setUnreadCount(0)
      }
    }

    StreamChatInstance.on(handleEvent)
    return () => StreamChatInstance.off(handleEvent)
  }, [])

  const onChatPressed = () => {
    navigation.navigate("Chat")
  }

  const onVideoPressed = () => navigation.navigate("Video")

  return (
    <View style={styles.bloc}>
      {/* <Separator /> */}
      <Text preset="screenHeader" tx="mailbox.title" style={styles.title} />

      <View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.btnView} onPress={onChatPressed}>
            <Text preset="screenHeader" style={{ color: "#2FB645" }}>
              {unreadCount}
            </Text>
            <MessageCircleMore size={50} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnView} onPress={onVideoPressed}>
            <Text preset="screenHeader" style={{ color: "#2FB645" }}>
              {incomingCall ? 1 : 0}
            </Text>
            <Video size={50} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <Separator />
    </View>
  )
}

const styles = StyleSheet.create({
  bloc: {
    paddingHorizontal: 8,
    width: "100%",
  },
  btnView: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
    height: 125,
    justifyContent: "center",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: "40%",
  },
  iconContainer: {
    alignItems: "center",
    alignSelf: "center",
    // backgroundColor: "red",
    flexDirection: "row",
    // height: 100,
    justifyContent: "space-between",
    width: "80%",
  },
  title: {
    alignSelf: "flex-start",
    marginBottom: 16,
  },
})

export default Mailbox
