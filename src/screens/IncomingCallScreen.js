import React from "react"
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { useNavigation } from '@react-navigation/native'

const IncomingCallScreen = () => {
  const callerName = "SOS Tourist Doctor" // Static for visual recreation
  const doctorName = "Dr. John Doe" // Static for visual recreation
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.incomingCallContainer}>
      <View style={styles.callerInfoContainer}>
        <Text style={styles.callerName}>{callerName}</Text>
        <Text style={styles.callStatus}>
          {doctorName ? `Dr. ${doctorName}` : "SOS Tourist Doctor"}
        </Text>
        <Text style={styles.callStatus}>Incoming video call...</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={[styles.actionButton, styles.declineButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.icon}>📞</Text> {/* Placeholder for PhoneOff icon */}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.acceptButton]}
          onPress={() => navigation.navigate('StreamVideoCallScreen')}
        >
          <Text style={styles.icon}>📞</Text> {/* Placeholder for PhoneIcon */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default IncomingCallScreen

const styles = StyleSheet.create({
  acceptButton: {
    backgroundColor: "#34C759",
  },
  actionButton: {
    alignItems: "center",
    borderRadius: 32,
    height: 64,
    justifyContent: "center",
    width: 64,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 40,
  },
  callStatus: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 12,
    opacity: 0.8,
  },
  callerInfoContainer: {
    alignItems: "center",
    marginTop: 200, // Placeholder for Dimensions.get("window").height / 2 - 100
  },
  callerName: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 12,
  },
  declineButton: {
    backgroundColor: "#FF3B30",
  },
  incomingCallContainer: {
    backgroundColor: "rgba(0,0,0,0.9)",
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  icon: {
    fontSize: 32,
    color: "white",
  },
})
