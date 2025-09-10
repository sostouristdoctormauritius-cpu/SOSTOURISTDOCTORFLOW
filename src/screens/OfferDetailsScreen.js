import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'

const mockServices = ["Therapy 1", "Therapy 2", "Therapy 3"]

const OfferDetailsScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {/* OfferDetailsHeading Placeholder */}
      <View style={styles.offerDetailsHeading}>
        <Text style={styles.offerDiscount}>15% Discount</Text>
        <Text style={styles.offerHeading}>Dental Check Up</Text>
        <Text style={styles.offerDescription}>This is a description for dental check up.</Text>
      </View>

      <View style={styles.separator} />

      {/* ServicesBlock Placeholder */}
      <View style={styles.servicesBlock}>
        <Text style={styles.blockTitle}>Services Included:</Text>
        {mockServices.map((service, index) => (
          <Text key={index} style={styles.serviceItem}>- {service}</Text>
        ))}
      </View>

      <View style={styles.separator} />

      {/* SpecialistsBlock Placeholder */}
      <View style={styles.specialistsBlock}>
        <Text style={styles.blockTitle}>Specialists Available</Text>
        <Text>List of specialists will be here.</Text>
      </View>

      {/* PricingFooter Placeholder */}
      <View style={styles.pricingFooter}>
        <View>
          <Text style={styles.pricingTitle}>Treatment Cost</Text>
          <Text style={styles.pricingDescription}>Book your spot now!</Text>
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('ConsultationBookAppointment')}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OfferDetailsScreen

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  offerDetailsHeading: {
    padding: 16,
    alignItems: "center",
    marginBottom: 27,
  },
  offerDiscount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },
  offerHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  offerDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
  },
  separator: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 10,
  },
  servicesBlock: {
    padding: 16,
  },
  blockTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  serviceItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  specialistsBlock: {
    padding: 16,
  },
  pricingFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginTop: 20,
  },
  pricingTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pricingDescription: {
    fontSize: 14,
    color: "#666",
  },
  continueButton: {
    backgroundColor: "lightgreen",
    padding: 15,
    borderRadius: 5,
  },
  continueButtonText: {
    color: "white",
    fontWeight: "bold",
  },
})
