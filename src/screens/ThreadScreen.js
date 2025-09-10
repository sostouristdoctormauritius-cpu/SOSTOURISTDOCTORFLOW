import React from "react"
import { View, Text, StyleSheet } from "react-native"

const ThreadScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat Thread</Text>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>User: Hello, how can I help you?</Text>
      </View>
      <View style={[styles.messageContainer, styles.messageRight]}>
        <Text style={styles.message}>Doctor: I need some assistance.</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>User: Please describe your issue.</Text>
      </View>
    </View>
  )
}

export default ThreadScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  messageContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  message: {
    fontSize: 16,
  },
  messageRight: {
    alignSelf: "flex-end",
    backgroundColor: "#dcf8c6",
  },
})
