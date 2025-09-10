import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'

const ConsultationPayAppointmentScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.root}>
      {/* Header Placeholder */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pay for Appointment</Text>
      </View>

      {/* WebView Placeholder */}
      <View style={styles.webViewPlaceholder}>
        <Text style={styles.webViewText}>Payment Gateway will be displayed here.</Text>
        <Text style={styles.webViewText}>Please imagine a secure payment page.</Text>
      </View>
    </View>
  )
}

export default ConsultationPayAppointmentScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    fontSize: 20,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  webViewPlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  webViewText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
})
