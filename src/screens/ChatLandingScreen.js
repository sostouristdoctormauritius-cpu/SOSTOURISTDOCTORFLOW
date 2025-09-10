import React, { useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const ChatLandingScreen = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const scrollViewRef = useRef();

  // Mock chat messages
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "doctor", time: "10:30 AM" },
    { id: 2, text: "Hi doctor, I've been having a headache for the past few days.", sender: "user", time: "10:32 AM" },
    { id: 3, text: "I see. Can you tell me more about the headache? Is it constant or does it come and go?", sender: "doctor", time: "10:33 AM" },
    { id: 4, text: "It comes and goes, usually in the afternoon.", sender: "user", time: "10:35 AM" },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 80}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image source={require('../assets/images/down_arrow.png')} style={styles.backIcon} />
            </TouchableOpacity>
            <View style={styles.doctorInfo}>
              <Image source={require('../assets/images/profile.png')} style={styles.doctorImage} />
              <View>
                <Text style={styles.doctorName}>Dr. Alice Smith</Text>
                <Text style={styles.doctorStatus}>Online</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.actionButton}>
              <Image source={require('../assets/images/down_arrow.png')} style={styles.videoIcon} />
            </TouchableOpacity>
          </View>

          <ScrollView 
            ref={scrollViewRef}
            style={styles.messageList}
            contentContainerStyle={styles.messageListContent}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
          >
            {messages.map((msg) => (
              <View 
                key={msg.id} 
                style={[styles.messageContainer, msg.sender === 'user' ? styles.userMessageContainer : styles.doctorMessageContainer]}
              >
                <View style={[styles.messageBubble, msg.sender === 'user' ? styles.userMessageBubble : styles.doctorMessageBubble]}>
                  <Text style={[styles.messageText, msg.sender === 'user' ? styles.userMessageText : styles.doctorMessageText]}>
                    {msg.text}
                  </Text>
                  <Text style={[styles.messageTime, msg.sender === 'user' ? styles.userMessageTime : styles.doctorMessageTime]}>
                    {msg.time}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.iconButton}>
                <Text>📎</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.messageInput}
              placeholder="Type a message..."
              placeholderTextColor="#999"
              value={message}
              onChangeText={setMessage}
              multiline
            />
            <TouchableOpacity style={styles.iconButton}>
                <Text>🎤</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.sendButton, !message.trim() && styles.sendButtonDisabled]}
              onPress={sendMessage}
              disabled={!message.trim()}
            >
              <Text style={styles.sendButtonText}>➤</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatLandingScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFFFFF" },
  keyboardAvoid: { flex: 1 },
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  backButton: { padding: 5 },
  backIcon: { width: 24, height: 24, transform: [{ rotate: '90deg' }] },
  doctorInfo: { flexDirection: "row", alignItems: "center" },
  doctorImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  doctorName: { fontSize: 16, fontWeight: "bold", color: "#333" },
  doctorStatus: { fontSize: 12, color: "#2FB645" },
  actionButton: { padding: 5 },
  videoIcon: { width: 24, height: 24 },
  messageList: { flex: 1 },
  messageListContent: { paddingVertical: 15, paddingHorizontal: 10 },
  messageContainer: { flexDirection: "row", marginBottom: 15 },
  userMessageContainer: { justifyContent: "flex-end" },
  doctorMessageContainer: { justifyContent: "flex-start" },
  messageBubble: {
    maxWidth: "80%",
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  userMessageBubble: { backgroundColor: "#F71E27", borderBottomRightRadius: 4 },
  doctorMessageBubble: { backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: '#E0E0E0', borderBottomLeftRadius: 4 },
  messageText: { fontSize: 16, lineHeight: 22 },
  userMessageText: { color: "#FFFFFF" },
  doctorMessageText: { color: "#333333" },
  messageTime: { fontSize: 11, marginTop: 5, textAlign: "right" },
  userMessageTime: { color: "#FFFFFFCC" },
  doctorMessageTime: { color: "#999999" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  messageInput: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginHorizontal: 10,
  },
  iconButton: {
    padding: 10,
  },
  sendButton: {
    backgroundColor: "#F71E27",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonDisabled: { backgroundColor: "#E0E0E0" },
  sendButtonText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 20 },
});
