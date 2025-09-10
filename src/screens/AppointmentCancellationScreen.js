import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'

const AppointmentCancellationScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.root}>
      <View style={styles.mar24}>
        <Text style={styles.text}>This is a disclaimer about appointment cancellation.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ViewPdf')}>
          <Text style={styles.linkText}>Terms and Conditions</Text>
        </TouchableOpacity>
        <Text style={styles.cancelBy}>Cancel By</Text>
        {/* RenderCancellationOptions Placeholder */}
        <View style={styles.cancellationOption}>
          <Text style={styles.optionTitle}>Refund Duration</Text>
          <Text style={styles.optionCaption}>After booking</Text>
          <Text style={styles.optionRefundText}>Refund Policy details here.</Text>
        </View>
        <View style={styles.cancellationOption}>
          <Text style={styles.optionTitle}>Refund Duration</Text>
          <Text style={styles.optionCaption}>After booking</Text>
          <Text style={styles.optionRefundText}>Refund Policy details here.</Text>
        </View>
        <TouchableOpacity style={styles.marginTop48} onPress={() => navigation.navigate('ViewPdf')}>
          <Text style={styles.linkTextLarge}>Cancellation Policies</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AppointmentCancellationScreen

const styles = StyleSheet.create({
  marginTop48: {
    marginTop: 48,
  },
  cancelBy: {
    marginTop: 64,
    fontSize: 20,
    fontWeight: "bold", // Placeholder for typography.primary.bold
  },
  mar24: {
    marginTop: 24,
  },
  root: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "white",
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
    color: "#616161", // Placeholder for colors.descriptionText
  },
  linkText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "bold", // Placeholder for typography.primary.bold
    textDecorationLine: "underline",
    color: "#616161", // Placeholder for colors.descriptionText
  },
  linkTextLarge: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "bold", // Placeholder for typography.primary.bold
    textDecorationLine: "underline",
    color: "#616161", // Placeholder for colors.descriptionText
  },
  cancellationOption: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  optionCaption: {
    fontSize: 14,
    color: "#666",
  },
  optionRefundText: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
})