import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components'

const ConsultationChatOnboardingScreen = () => {
  const consultationType = "Chat" // Static for visual recreation
  const navigation = useNavigation()

  // Features for chat consultation
  const features = [
    { 
      id: 1, 
      title: "Instant Connection", 
      description: "Connect with doctors instantly through secure chat",
      icon: "💬"
    },
    { 
      id: 2, 
      title: "24/7 Availability", 
      description: "Access healthcare services anytime, anywhere",
      icon: "🕐"
    },
    { 
      id: 3, 
      title: "Secure Messaging", 
      description: "All conversations are encrypted and confidential",
      icon: "🔒"
    },
    { 
      id: 4, 
      title: "Photo Sharing", 
      description: "Share images to help doctors understand your condition",
      icon: "📷"
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Consultation Type</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.illustrationContainer}>
          <View style={styles.illustration}>
            <Text style={styles.illustrationText}>💬</Text>
          </View>
        </View>
        
        <Text style={styles.title}>
          {consultationType === "Chat" && "Chat Consultation"}
          {consultationType === "Video" && "Video Consultation"}
          {consultationType === "Home" && "Home Visit Consultation"}
        </Text>
        
        <Text style={styles.description}>
          {consultationType === "Chat" && "Connect with doctors instantly through secure chat. Get medical advice quickly and conveniently from the comfort of your home."}
          {consultationType === "Video" && "Have a face-to-face consultation with a doctor via video call. Receive personalized care from the comfort of your home."}
          {consultationType === "Home" && "Get a doctor to visit you at your location. Perfect for when you need in-person care without leaving your home."}
        </Text>
        
        <View style={styles.featuresContainer}>
          {features.map(feature => (
            <View key={feature.id} style={styles.featureCard}>
              <Text style={styles.featureIcon}>{feature.icon}</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button
          title="Continue to Booking"
          onPress={() => navigation.navigate('ConsultationSymptomSelection')}
        />
      </View>
    </View>
  )
}

export default ConsultationChatOnboardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
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
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#333',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  illustrationContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  illustration: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
  },
  illustrationText: {
    fontSize: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },
  featuresContainer: {
    marginBottom: 30,
  },
  featureCard: {
    flexDirection: "row",
    backgroundColor: "#fafafa",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
  },
  featureIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
})