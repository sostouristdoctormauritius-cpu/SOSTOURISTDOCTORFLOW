import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Button } from '../components'

const mockServices = [
  "Comprehensive dental examination",
  "Professional teeth cleaning",
  "Digital X-rays",
  "Fluoride treatment",
  "Oral health education"
]

const mockSpecialists = [
  { id: 1, name: "Dr. Alice Smith", specialty: "Dental Surgeon", rating: 4.8 },
  { id: 2, name: "Dr. Bob Johnson", specialty: "Orthodontist", rating: 4.9 },
  { id: 3, name: "Dr. Carol White", specialty: "Pediatric Dentist", rating: 4.7 },
]

const OfferDetailsScreen = () => {
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
        <Text style={styles.headerTitle}>Offer Details</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content}>
        {/* Offer Details Header */}
        <View style={styles.offerHeader}>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>15% OFF</Text>
          </View>
          
          <Text style={styles.offerTitle}>Dental Check Up</Text>
          <Text style={styles.offerDescription}>
            Comprehensive dental examination with cleaning and X-rays. Perfect for maintaining your oral health.
          </Text>
          
          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>$100</Text>
            <Text style={styles.discountedPrice}>$85</Text>
            <Text style={styles.savingsText}>You save $15</Text>
          </View>
        </View>
        
        <View style={styles.separator} />
        
        {/* Services Included */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services Included</Text>
          <View style={styles.servicesList}>
            {mockServices.map((service, index) => (
              <View key={index} style={styles.serviceItem}>
                <Text style={styles.serviceIcon}>✓</Text>
                <Text style={styles.serviceText}>{service}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.separator} />
        
        {/* Specialists Available */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Specialists Available</Text>
          <View style={styles.specialistsList}>
            {mockSpecialists.map((specialist) => (
              <View key={specialist.id} style={styles.specialistCard}>
                <Image 
                  source={require('../assets/images/profile.png')} 
                  style={styles.specialistImage} 
                />
                <View style={styles.specialistInfo}>
                  <Text style={styles.specialistName}>{specialist.name}</Text>
                  <Text style={styles.specialistSpecialty}>{specialist.specialty}</Text>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.ratingIcon}>★</Text>
                    <Text style={styles.ratingText}>{specialist.rating}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
        
        {/* Terms and Conditions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Terms & Conditions</Text>
          <View style={styles.termsContainer}>
            <Text style={styles.termItem}>• Offer valid for new patients only</Text>
            <Text style={styles.termItem}>• Appointment must be booked within 30 days</Text>
            <Text style={styles.termItem}>• Cannot be combined with other offers</Text>
            <Text style={styles.termItem}>• Subject to availability</Text>
          </View>
        </View>
      </ScrollView>
      
      {/* Action Footer */}
      <View style={styles.footer}>
        <Button
          title="Book Appointment"
          onPress={() => navigation.navigate('ConsultationBookAppointment')}
        />
      </View>
    </View>
  )
}

export default OfferDetailsScreen

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
  offerHeader: {
    padding: 20,
    alignItems: "center",
  },
  discountBadge: {
    backgroundColor: "#F71E27",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 20,
  },
  discountText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  offerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  offerDescription: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },
  priceContainer: {
    alignItems: "center",
  },
  originalPrice: {
    fontSize: 18,
    color: "#999",
    textDecorationLine: "line-through",
  },
  discountedPrice: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F71E27",
    marginVertical: 10,
  },
  savingsText: {
    fontSize: 16,
    color: "#388E3C",
    fontWeight: "600",
  },
  separator: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 10,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  servicesList: {
    paddingLeft: 10,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  serviceIcon: {
    fontSize: 18,
    color: "#388E3C",
    marginRight: 15,
  },
  serviceText: {
    fontSize: 16,
    color: "#666",
    flex: 1,
  },
  specialistsList: {
    marginBottom: 20,
  },
  specialistCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fafafa",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  specialistImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  specialistInfo: {
    flex: 1,
  },
  specialistName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 3,
  },
  specialistSpecialty: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingIcon: {
    fontSize: 14,
    color: "#FFA000",
    marginRight: 5,
  },
  ratingText: {
    fontSize: 14,
    color: "#666",
  },
  termsContainer: {
    paddingLeft: 10,
  },
  termItem: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
})
