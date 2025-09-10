import React from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'

export default function AddSymptomModalScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.topHeaderSeparator} />

      <TouchableOpacity style={styles.topHeaderCancel} onPress={() => navigation.goBack()}>
        <Text style={styles.headerCancelButton}>Cancel</Text>
      </TouchableOpacity>

      <Text
        style={styles.title}
      >
        Add Additional Symptoms
      </Text>

      <View style={styles.inputFieldContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your symptoms here..."
          placeholderTextColor="#8ABAA4" // Placeholder for Colors.textInputFieldText
          autoCorrect={false}
          spellCheck={false}
          autoFocus
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 29,
    backgroundColor: "white",
  },
  inputField: {
    color: "#8ABAA4", // Placeholder for Colors.textInputFieldText
    fontFamily: "interSemiBold", // Placeholder for typography.primary.semiBold
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#EDF7F2", // Placeholder for Colors.textInputFieldBackground
    borderRadius: 23.5,
    paddingLeft: 22.5,
    paddingRight: 50,
    paddingVertical: 4,
  },
  inputFieldContainer: {
    marginTop: 16,
    width: "100%",
  },
  sendButton: {
    position: "absolute",
    right: 0,
    top: -3,
    backgroundColor: "lightgreen", // Placeholder color
    padding: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  title: {
    alignSelf: "flex-start",
    color: "#212121", // Placeholder for Colors.screenTitleText
    marginTop: 12,
    fontSize: 20,
    fontWeight: "bold",
  },
  topHeaderCancel: {
    alignSelf: "flex-end",
    marginTop: -4,
  },
  headerCancelButton: {
    color: "#938F99", // Placeholder for Colors.headerCancelButtonText
    fontSize: 16,
  },
  topHeaderSeparator: {
    backgroundColor: "#D9D9D9", // Placeholder for Colors.modalHeaderSwipeIndicator
    borderRadius: 8,
    height: 4,
    marginTop: 16,
    opacity: 0.7,
    width: 64,
  },
})
