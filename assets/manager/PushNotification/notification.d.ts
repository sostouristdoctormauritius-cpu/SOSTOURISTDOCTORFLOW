interface StreamVideoNotification {
  created_by_id: string
  version: string
  created_by_display_name: string
  receiver_id: string
  call_cid: string
  call_display_name: string
  type: string
  sender: string
}

interface StreamChatNotification {
  version: string
  cid: string
  type: string
  channel_id: string
  channel_type: string
  sender: string
  message_id: string
  id: string
  receiver_id: string
}

interface PushNotificationData {
  version?: string
  cid?: string
  type?: string
  channel_id?: string
  channel_type?: string
  sender?: string
  message_id?: string
  id?: string
  receiver_id?: string
}

type StreamNotification = StreamVideoNotification | StreamChatNotification

