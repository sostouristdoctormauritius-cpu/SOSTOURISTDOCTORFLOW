import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components'

const ConsultationPayAppointmentScreen = () => {
  const navigation = useNavigation()
  
  // Mock appointment details
  const appointmentDetails = {
    doctorName: "Dr. Alice Smith",
    speciality: "General Practitioner",
    date: "25 May 2023",
    time: "10:00 AM",
    consultationType: "Online Consultation"
  }
  
  // Mock payment methods
  const paymentMethods = [
    { id: 1, name: "Credit Card", icon: require('../../assets/images/profile.png') },
    { id: 2, name: "PayPal", icon: require('../../assets/images/profile.png') },
    { id: 3, name: "Apple Pay", icon: require('../../assets/images/apple.png') },
    { id: 4, name: "Google Pay", icon: require('../../assets/images/google.png') },
  ]
  
  // Mock pricing details
  const pricing = {
    consultationFee: 50.00,
    serviceCharge: 5.00,
    total: 55.00
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
        <Text style={styles.headerTitle}>Payment</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.appointmentCard}>
          <View style={styles.doctorInfo}>
            <Image 
              source={require('../../assets/images/profile.png')} 
              style={styles.doctorImage} 
            />
            <View style={styles.doctorDetails}>
              <Text style={styles.doctorName}>{appointmentDetails.doctorName}</Text>
              <Text style={styles.doctorSpeciality}>{appointmentDetails.speciality}</Text>
            </View>
          </View>
          
          <View style={styles.appointmentDetails}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Date</Text>
              <Text style={styles.detailValue}>{appointmentDetails.date}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Time</Text>
              <Text style={styles.detailValue}>{appointmentDetails.time}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Type</Text>
              <Text style={styles.detailValue}>{appointmentDetails.consultationType}</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.paymentMethodsContainer}>
            {paymentMethods.map(method => (
              <TouchableOpacity key={method.id} style={styles.paymentMethod}>
                <Image source={method.icon} style={styles.paymentIcon} />
                <Text style={styles.paymentName}>{method.name}</Text>
                <View style={styles.radioCircle} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.pricingContainer}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Consultation Fee</Text>
              <Text style={styles.priceValue}>${pricing.consultationFee.toFixed(2)}</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Service Charge</Text>
              <Text style={styles.priceValue}>${pricing.serviceCharge.toFixed(2)}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.priceRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>${pricing.total.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button 
          title={`Pay ${pricing.total.toFixed(2)}`} 
          onPress={() => navigation.navigate('ConsultationOrderConfirmation')}
        />
      </View>
    </View>
  )
}

export default ConsultationPayAppointmentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    padding: 20,
  },
  appointmentCard: {
    backgroundColor: '#fafafa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
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
    marginBottom: 5,
  },
  doctorSpeciality: {
    fontSize: 15,
    color: '#666',
  },
  appointmentDetails: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
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
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#333',
    marginBottom: 15,
  },
  paymentMethodsContainer: {
    backgroundColor: '#fafafa',
    borderRadius: 12,
    padding: 15,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  paymentIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    resizeMode: 'contain',
  },
  paymentName: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  pricingContainer: {
    backgroundColor: '#fafafa',
    borderRadius: 12,
    padding: 20,
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
