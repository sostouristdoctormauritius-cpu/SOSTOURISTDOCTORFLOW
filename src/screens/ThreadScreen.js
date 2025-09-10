import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Header } from '../components'

const ThreadScreen = () => {
  const navigation = useNavigation()
  
  // Mock chat messages
  const messages = [
    { id: 1, text: "Hello! How can I help you today?", sender: "doctor", time: "10:30 AM" },
    { id: 2, text: "Hi doctor, I've been having a headache for the past few days.", sender: "user", time: "10:32 AM" },
    { id: 3, text: "I see. Can you tell me more about the headache? Is it constant or does it come and go?", sender: "doctor", time: "10:33 AM" },
    { id: 4, text: "It comes and goes, usually in the afternoon.", sender: "user", time: "10:35 AM" },
    { id: 5, text: "Thank you for that information. Have you noticed any other symptoms?", sender: "doctor", time: "10:36 AM" },
    { id: 6, text: "Sometimes I feel nauseous, especially when the headache is severe.", sender: "user", time: "10:38 AM" },
  ]

  return (
    <View style={styles.container}>
      <Header 
        title="Dr. Alice Smith" 
        onBackPress={() => navigation.goBack()}
      />
      
      <ScrollView 
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
      >
        {messages.map((msg) => (
          <View 
            key={msg.id} 
            style={[
              styles.messageContainer, 
              msg.sender === 'user' ? styles.userMessageContainer : styles.doctorMessageContainer
            ]}
          >
            {msg.sender === 'doctor' && (
              <Image 
                source={require('../assets/images/profile.png')} 
                style={styles.messageAvatar} 
              />
            )}
            
            <View 
              style={[
                styles.messageBubble, 
                msg.sender === 'user' ? styles.userMessageBubble : styles.doctorMessageBubble
              ]}
            >
              <Text 
                style={[
                  styles.messageText, 
                  msg.sender === 'user' ? styles.userMessageText : styles.doctorMessageText
                ]}
              >
                {msg.text}
              </Text>
              <Text 
                style={[
                  styles.messageTime, 
                  msg.sender === 'user' ? styles.userMessageTime : styles.doctorMessageTime
                ]}
              >
                {msg.time}
              </Text>
            </View>
            
            {msg.sender === 'user' && (
              <Image 
                source={require('../assets/images/profile.png')} 
                style={styles.messageAvatar} 
              />
            )}
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachButton}>
          <Text style={styles.attachButtonText}>+</Text>
        </TouchableOpacity>
        
        <View style={styles.inputWrapper}>
          <Text style={styles.inputPlaceholder}>Type a message...</Text>
        </View>
        
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ThreadScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  doctorInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  doctorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  doctorStatus: {
    fontSize: 12,
    color: "#2FB645",
  },
  actionButton: {
    padding: 10,
  },
  actionButtonText: {
    fontSize: 20,
    color: "#666",
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 15,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 15,
  },
  userMessageContainer: {
    justifyContent: "flex-end",
  },
  doctorMessageContainer: {
    justifyContent: "flex-start",
  },
  messageAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  messageBubble: {
    maxWidth: "70%",
    borderRadius: 18,
    padding: 12,
  },
  userMessageBubble: {
    backgroundColor: "#F71E27",
    borderBottomRightRadius: 4,
  },
  doctorMessageBubble: {
    backgroundColor: "#f0f0f0",
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userMessageText: {
    color: "#ffffff",
  },
  doctorMessageText: {
    color: "#333333",
  },
  messageTime: {
    fontSize: 11,
    marginTop: 5,
    textAlign: "right",
  },
  userMessageTime: {
    color: "#ffffffcc",
  },
  doctorMessageTime: {
    color: "#999999",
  },
})
