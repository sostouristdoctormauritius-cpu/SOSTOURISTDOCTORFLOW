# Push Notification Template

{

  "notification": {

    "title": "{{ sender.name }}",

    "body": "{{ message.text }}",

    "priority": "high"

  },

  "data": {

    "channel_id": "{{ channel.id }}",

    "message_id": "{{ message.id }}"
  }
  
}
