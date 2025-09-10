import React from "react"
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
} from "react-native"

const ChatChannelListScreen = () => {
  const EmptyStateComponent = () => (
    <View style={styles.emptyStateContainer}>
      <Text style={styles.emptyStateTitle}>No Active Chats</Text>
      <Text style={styles.emptyStateDescription}>
        You don't have any active chat consultations at the moment.
      </Text>
    </View>
  )

  const LoadingIndicator = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.loadingText}>Loading chats...</Text>
    </View>
  )

  const ErrorIndicator = () => (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>Unable to load chats</Text>
      <Text style={styles.errorDescription}>Please check your connection and try again</Text>
    </View>
  )

  // For static representation, we can choose to render one of these states
  // For example, let's render the EmptyStateComponent by default
  return (
    <View style={styles.root}>
      <EmptyStateComponent />
      {/* You can uncomment and switch between these to see different states */}
      {/* <LoadingIndicator /> */}
      {/* <ErrorIndicator /> */}
    </View>
  )
}

export default ChatChannelListScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  emptyStateContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#000",
  },
  emptyStateDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    color: "#666",
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ff0000",
    marginBottom: 8,
  },
  errorDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
})
