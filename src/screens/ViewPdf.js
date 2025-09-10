import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Button } from '../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
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
    padding: 20,
  },
  pdfContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  pdfPlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  pdfIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
    opacity: 0.7,
  },
  pdfTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  pdfDescription: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  infoContainer: {
    backgroundColor: "#E3F2FD",
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
})

const ViewPdf = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Document Viewer</Text>
        <View style={styles.placeholder} />
      </View>
      
      <View style={styles.content}>
        <View style={styles.pdfContainer}>
          <View style={styles.pdfPlaceholder}>
            <Image 
              source={require('../assets/images/pdfIcon.png')} 
              style={styles.pdfIcon} 
            />
            <Text style={styles.pdfTitle}>Terms and Conditions</Text>
            <Text style={styles.pdfDescription}>
              Your document is being prepared for viewing. In a real application, 
              this would display the PDF document.
            </Text>
            
            <View style={styles.actionsContainer}>
              <Button
                title="Download"
                style={styles.actionButton}
                onPress={() => {
                  // In a real app, this would download the PDF
                  console.log("Downloading PDF...")
                }}
              />
              <Button
                title="Share"
                style={styles.actionButton}
                onPress={() => {
                  // In a real app, this would share the PDF
                  console.log("Sharing PDF...")
                }}
              />
            </View>
          </View>
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Document Information</Text>
          <Text style={styles.infoText}>
            This document contains important information about our terms of service, 
            privacy policy, and usage guidelines. Please read carefully before proceeding.
          </Text>
        </View>
      </View>
    </View>
  )
}

export default ViewPdf
