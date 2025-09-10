import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'

const StreamVideoCallScreen = () => {
  const doctorName = "Dr. Smith" // Static for visual recreation
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {/* Header Placeholder */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Video Call with {doctorName}</Text>
      </View>

      {/* Video Container Placeholder */}
      <View style={styles.videoContainer}>
        <Text style={styles.videoText}>Video Call in Progress</Text>
        <Text style={styles.videoText}>Connecting to {doctorName}...</Text>
      </View>

      {/* Call Controls Placeholder */}
      <View style={styles.callControls}>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlButtonText}>End Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default StreamVideoCallScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "white",
  },
  backButton: {
    fontSize: 20,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  videoText: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,
  },
  callControls: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  controlButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 50,
  },
  controlButtonText: {
    color: "white",
    fontWeight: "bold",
  },
})
