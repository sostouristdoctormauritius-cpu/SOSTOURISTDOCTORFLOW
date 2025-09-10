import React from "react"
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native"
import ConnectyCube from "react-native-connectycube"

interface ChatMessageProps {
  isUpstream: boolean
  message: string
  attachments: any[] | undefined
  avatarUrl?: string
  date: number
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  isUpstream,
  message,
  attachments,
  avatarUrl,
  date,
}) => {
  const formatDate = (timestamp: number): string => {
    const dateObj = new Date(timestamp)
    return dateObj.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  }

  const getImageLinkFromUid = (uid: string): string | null => {
    if (!uid) {
      return null
    }
    return ConnectyCube.storage.privateUrl(uid)
  }

  return (
    <View
      style={[
        styles.messageContainer,
        isUpstream ? styles.upstreamContainer : styles.downstreamContainer,
      ]}
    >
      {isUpstream && avatarUrl && (
        <Image source={{ uri: avatarUrl } as ImageSourcePropType} style={styles.avatar} />
      )}
      <View
        style={[styles.messageBubble, isUpstream ? styles.upstreamBubble : styles.downstreamBubble]}
      >
        {attachments &&
          attachments.map((attachment, index) => {
            // TODO: render other types of attachment
            if (attachment.type === "photo") {
              // TODO: show loading indicator while image is being downloaded
              return (
                <Image
                  key={index}
                  source={
                    {
                      uri: getImageLinkFromUid(attachment.uid),
                    } as ImageSourcePropType
                  }
                  style={styles.attachmentImageStyle}
                />
              )
            }
            return null
          })}

        <Text
          style={[styles.messageText, isUpstream ? styles.upstreamText : styles.downstreamText]}
        >
          {message !== "attachment" ? message : null}
        </Text>
        <Text
          style={[
            styles.dateText,
            isUpstream ? styles.upstreamDateText : styles.downstreamDateText,
          ]}
        >
          {formatDate(date)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  attachmentImageStyle: {
    height: 100,
    marginTop: 5,
    width: 100,
  },
  avatar: {
    borderColor: "#7CD1AA",
    borderRadius: 24,
    borderWidth: 2,
    height: 48,
    marginRight: 10,
    width: 48,
  },
  dateText: {
    alignSelf: "flex-end",
    fontSize: 12,
    marginTop: 5,
  },
  downstreamBubble: {
    backgroundColor: "#2FB645",
  },
  downstreamContainer: {
    justifyContent: "flex-end",
    marginLeft: 50,
  },
  downstreamDateText: {
    color: "#E0E0E0",
  },
  downstreamText: {
    color: "white",
  },
  messageBubble: {
    borderRadius: 10,
    maxWidth: "80%",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  messageContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    marginVertical: 5,
  },
  messageText: {
    fontSize: 18,
  },
  upstreamBubble: {
    backgroundColor: "#F5F5F5",
  },
  upstreamContainer: {
    justifyContent: "flex-start",
  },
  upstreamDateText: {
    color: "#9E9E9E",
  },
  upstreamText: {
    color: "#212121",
  },
})

export default ChatMessage
