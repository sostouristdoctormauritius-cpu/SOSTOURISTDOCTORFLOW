import React from "react"
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native"
import { useNavigation } from '@react-navigation/native'

const ChatChannelListScreen = () => {
  const navigation = useNavigation()
  const isLoading = false // Static for visual recreation
  const hasError = false // Static for visual recreation
  
  // Mock chat channels data
  const chatChannels = [
    {
      id: "1",
      doctorName: "Dr. Alice Smith",
      speciality: "General Practitioner",
      lastMessage: "Hello! How are you feeling today?",
      lastMessageTime: "10:30 AM",
      unreadCount: 2,
      isOnline: true,
    },
    {
      id: "2",
      doctorName: "Dr. Bob Johnson",
      speciality: "Pediatrician",
      lastMessage: "Thanks for the update. I'll review your symptoms.",
      lastMessageTime: "Yesterday",
      unreadCount: 0,
      isOnline: false,
    },
    {
      id: "3",
      doctorName: "Dr. Carol White",
      speciality: "Dermatologist",
      lastMessage: "Your prescription has been sent to the pharmacy.",
      lastMessageTime: "2 days ago",
      unreadCount: 0,
      isOnline: false,
    },
  ]

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F71E27" />
        <Text style={styles.loadingText}>Loading chats...</Text>
      </View>
    )
  }

  if (hasError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Oops! Something went wrong</Text>
        <Text style={styles.errorDescription}>
          We couldn't load your chats. Please try again.
        </Text>
        <TouchableOpacity style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderChatItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.chatItem}
      onPress={() => navigation.navigate('ChatLanding')}
    >
      <View style={styles.chatItemLeft}>
        <Image 
          source={require('../assets/images/profile.png')} 
          style={styles.doctorImage} 
        />
        {item.isOnline && <View style={styles.onlineIndicator} />}
      </View>
      
      <View style={styles.chatItemContent}>
        <View style={styles.chatItemHeader}>
          <Text style={styles.doctorName}>{item.doctorName}</Text>
          <Text style={styles.lastMessageTime}>{item.lastMessageTime}</Text>
        </View>
        
        <Text style={styles.doctorSpeciality}>{item.speciality}</Text>
        <Text style={styles.lastMessage} numberOfLines={1}>{item.lastMessage}</Text>
      </View>
      
      {item.unreadCount > 0 && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadCount}>{item.unreadCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  )

  const isEmpty = chatChannels.length === 0

  if (isEmpty) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Chats</Text>
        </View>
        
        <View style={styles.emptyStateContainer}>
          <Image 
            source={require('../assets/images/profile.png')} 
            style={styles.emptyStateImage} 
          />
          <Text style={styles.emptyStateTitle}>No Active Chats</Text>
          <Text style={styles.emptyStateDescription}>
            You don't have any active chat consultations at the moment.
          </Text>
          <TouchableOpacity 
            style={styles.startChatButton}
            onPress={() => navigation.navigate('ConsultationFlowPage')}
          >
            <Text style={styles.startChatButtonText}>Start a Chat Consultation</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Chats</Text>
      </View>
      
      <FlatList
        data={chatChannels}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default ChatChannelListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#ffffff",
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  chatList: {
    padding: 15,
  },
  chatItem: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  chatItemLeft: {
    position: "relative",
    marginRight: 15,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#4CAF50",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  chatItemContent: {
    flex: 1,
  },
  chatItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  lastMessageTime: {
    fontSize: 12,
    color: "#999",
  },
  doctorSpeciality: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  lastMessage: {
    fontSize: 14,
    color: "#999",
  },
  unreadBadge: {
    backgroundColor: "#F71E27",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  unreadCount: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  emptyStateContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  emptyStateImage: {
    width: 100,
    height: 100,
    marginBottom: 30,
    opacity: 0.5,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  emptyStateDescription: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 30,
  },
  startChatButton: {
    backgroundColor: "#F71E27",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  startChatButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: "#666",
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    backgroundColor: "#ffffff",
  },
  errorText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#D32F2F",
    marginBottom: 10,
  },
  errorDescription: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  retryButton: {
    backgroundColor: "#F71E27",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  retryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
})
