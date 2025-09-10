import React from "react"
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Button } from '../components'

export function ErrorDetails() {
  const navigation = useNavigation()
  const error = "Sample Error: Something went wrong!"
  const errorInfo = "Component Stack: \n  at MyComponent (MyComponent.js:10:5)\n  at App (App.js:5:3)"

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Error Details</Text>
      </View>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.errorCard}>
          <Image 
            source={require('../assets/images/sad-face.png')} 
            style={styles.errorIcon} 
          />
          <Text style={styles.errorTitle}>Something went wrong!</Text>
          <Text style={styles.errorDescription}>
            We apologize for the inconvenience. An unexpected error occurred in the application.
          </Text>
        </View>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>Error Information</Text>
          <View style={styles.errorInfoContainer}>
            <Text style={styles.errorContent}>{error.trim()}</Text>
            <Text selectable style={styles.errorBacktrace}>{errorInfo.trim()}</Text>
          </View>
        </View>
        
        <View style={styles.helpContainer}>
          <Text style={styles.helpTitle}>Need Help?</Text>
          <Text style={styles.helpText}>
            If this problem persists, please contact our support team with the error details above.
          </Text>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button
          title="Reset App"
          onPress={() => {
            // In a real app, this would reset the app state
            navigation.navigate('Welcome')
          }}
          disabled={true}
        />
        
        <TouchableOpacity 
          style={styles.supportButton}
          onPress={() => {
            // In a real app, this would open a support ticket
            console.log("Contacting support...")
          }}
        >
          <Text style={styles.supportButtonText}>Contact Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  errorCard: {
    backgroundColor: "#FFF8E1",
    borderRadius: 12,
    padding: 30,
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#FFECB3",
  },
  errorIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
    opacity: 0.7,
  },
  errorTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF8F00",
    marginBottom: 15,
    textAlign: "center",
  },
  errorDescription: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    lineHeight: 22,
  },
  detailsContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  errorInfoContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 20,
  },
  errorContent: {
    color: "#D32F2F",
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 16,
  },
  errorBacktrace: {
    color: "#666",
    fontSize: 14,
    lineHeight: 20,
  },
  helpContainer: {
    backgroundColor: "#E3F2FD",
    borderRadius: 12,
    padding: 20,
  },
  helpTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: 10,
  },
  helpText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  supportButton: {
    marginTop: 15,
    padding: 15,
  },
  supportButtonText: {
    color: "#F71E27",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default ErrorDetails;