import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'

const ConsultationChatOnboardingScreen = () => {
  const consultationType = "Chat" // Static for visual recreation
  const navigation = useNavigation()

  return (
    <View
      style={styles.screenContentContainerStyle}
    >
      <TouchableOpacity style={styles.backButtonStyle} onPress={() => navigation.goBack()}>
        <Text>{'<'}</Text>
      </TouchableOpacity>
      <View style={styles.svgContainer}>
        {/* Placeholder for SVG based on consultationType */}
        <Text>SVG Placeholder for {consultationType} Visit</Text>
      </View>
      <Text
        style={styles.titleStyle}
      >
        {consultationType === "Chat" && "Chat Consultation"}
        {consultationType === "Video" && "Video Consultation"}
        {consultationType === "Home" && "Home Visit Consultation"}
      </Text>
      <Text
        style={styles.descriptionStyle}
      >
        {consultationType === "Chat" && "Connect with doctors instantly through secure chat."}
        {consultationType === "Video" && "Have a face-to-face consultation with a doctor via video call."}
        {consultationType === "Home" && "Get a doctor to visit you at your location."}
      </Text>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('ConsultationSymptomSelection')}
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ConsultationChatOnboardingScreen

const styles = StyleSheet.create({
  backButtonStyle: {
    alignSelf: "flex-start",
  },
  buttonStyle: {
    marginTop: 57,
    width: "100%",
    backgroundColor: "lightgreen",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  descriptionStyle: {
    marginTop: 8,
    textAlign: "center",
  },
  screenContentContainerStyle: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "white",
  },
  svgContainer: {
    marginTop: 114,
    height: 100,
    width: 100,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  titleStyle: {
    marginTop: 26,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
})