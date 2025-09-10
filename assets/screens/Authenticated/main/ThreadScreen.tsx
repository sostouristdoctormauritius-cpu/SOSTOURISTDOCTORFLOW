import { useSOSChatContext } from "app/manager/Stream/ChatContext"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Channel, Thread } from "stream-chat-react-native"

interface ThreadScreenProps extends AppStackScreenProps<"Thread"> {}

export const ThreadScreen: FC<ThreadScreenProps> = observer(function ThreadScreen() {
  const { channel, thread } = useSOSChatContext()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Channel channel={channel} thread={thread} threadList>
      <Thread />
    </Channel>
  )
})
