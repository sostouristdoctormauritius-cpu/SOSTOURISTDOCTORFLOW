import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components'

const ConsultationOrderConfirmationScreen = () => {
  const consultationType = "Chat" // Static for visual recreation
  const selectedDate = "25 May 2023" // Static for visual recreation
  const appointmentTime = "10:30 AM" // Static for visual recreation
  const symptomNames = "Fever, Headache" // Static for visual recreation
  const navigation = useNavigation()

  // Mock doctor details
  const doctorDetails = {
    name: "Dr. Alice Smith",
    speciality: "General Practitioner",
    experience: "10 years"
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Order Confirmation</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.successContainer}>
          <View style={styles.successIcon}>
            <Text style={styles.successIconText}>✓</Text>
          </View>
          <Text style={styles.successTitle}>Appointment Booked!</Text>
          <Text style={styles.successMessage}>
            Your consultation has been successfully scheduled.
          </Text>
        </View>

        <View style={styles.consultationCard}>
          <View style={styles.consultationHeader}>
            <Text style={styles.consultationType}>
              {consultationType === "Chat" && "Chat Consultation"}
              {consultationType === "Home" && "Home Visit Consultation"}
              {consultationType === "Video" && "Video Consultation"}
            </Text>
            <Text style={styles.symptoms}>
              Symptoms: <Text style={styles.symptomNames}>{symptomNames}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.doctorCard}>
          <View style={styles.doctorInfo}>
            <Image 
              source={require('../../assets/images/profile.png')} 
              style={styles.doctorImage} 
            />
            <View style={styles.doctorDetails}>
              <Text style={styles.doctorName}>{doctorDetails.name}</Text>
              <Text style={styles.doctorSpeciality}>{doctorDetails.speciality}</Text>
              <Text style={styles.doctorExperience}>{doctorDetails.experience} experience</Text>
            </View>
          </View>
          
          <View style={styles.infoNote}>
            <Text style={styles.infoIcon}>ℹ️</Text>
            <Text style={styles.infoText}>
              Doctor assigned based on availability
            </Text>
          </View>
        </View>

        <View style={styles.appointmentCard}>
          <Text style={styles.sectionTitle}>Appointment Details</Text>
          
          <View style={styles.appointmentDetails}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Date</Text>
              <Text style={styles.detailValue}>{selectedDate}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Time</Text>
              <Text style={styles.detailValue}>{appointmentTime}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Consultation Type</Text>
              <Text style={styles.detailValue}>
                {consultationType === "Chat" && "Chat"}
                {consultationType === "Home" && "Home Visit"}
                {consultationType === "Video" && "Video Call"}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          
          <View style={styles.pricingContainer}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Consultation Fee</Text>
              <Text style={styles.priceValue}>$50.00</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Service Charge</Text>
              <Text style={styles.priceValue}>$5.00</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.priceRow}>
              <Text style={styles.totalLabel}>Total Paid</Text>
              <Text style={styles.totalValue}>$55.00</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button 
          title="Back to Home" 
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  )
}

export default ConsultationOrderConfirmationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  title: {
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
  successContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2FB645',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  successIconText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  successTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  successMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  consultationCard: {
    backgroundColor: '#E0FFE64D',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  consultationHeader: {
    marginBottom: 10,
  },
  consultationType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2FB646',
    marginBottom: 10,
  },
  symptoms: {
    fontSize: 14,
    color: '#2FB646',
  },
  symptomNames: {
    color: '#212121',
    fontWeight: '600',
  },
  doctorCard: {
    backgroundColor: '#fafafa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  doctorSpeciality: {
    fontSize: 15,
    color: '#666',
    marginBottom: 3,
  },
  doctorExperience: {
    fontSize: 14,
    color: '#999',
  },
  infoNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    padding: 10,
  },
  infoIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#1976d2',
    flex: 1,
  },
  appointmentCard: {
    backgroundColor: '#fafafa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  appointmentDetails: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    padding: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  detailLabel: {
    fontSize: 15,
    color: '#666',
  },
  detailValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  summaryCard: {
    backgroundColor: '#fafafa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  pricingContainer: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    padding: 15,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceLabel: {
    fontSize: 15,
    color: '#666',
  },
  priceValue: {
    fontSize: 15,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F71E27',
  },
  footer: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
})
