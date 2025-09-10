import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Button } from '../components'
import { ConfirmationModal } from '../components'

const AppointmentCancellationScreen = () => {
  const navigation = useNavigation()
  const [showCancelModal, setShowCancelModal] = React.useState(false)
  
  // Mock appointment details
  const appointmentDetails = {
    doctorName: "Dr. Alice Smith",
    speciality: "General Practitioner",
    date: "25 May 2023",
    time: "10:30 AM",
    consultationType: "Video Consultation"
  }
  
  // Mock cancellation policies
  const cancellationPolicies = [
    {
      id: 1,
      title: "Full Refund",
      description: "Cancel at least 24 hours before appointment",
      timeframe: "Before 24 hours",
      refund: "100% refund"
    },
    {
      id: 2,
      title: "Partial Refund",
      description: "Cancel between 12-24 hours before appointment",
      timeframe: "12-24 hours before",
      refund: "50% refund"
    },
    {
      id: 3,
      title: "No Refund",
      description: "Cancel less than 12 hours before appointment",
      timeframe: "Less than 12 hours",
      refund: "No refund"
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
        <Text style={styles.headerTitle}>Cancel Appointment</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.appointmentCard}>
          <View style={styles.doctorInfo}>
            <Image 
              source={require('../assets/images/profile.png')} 
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
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Cancellation Policy</Text>
          <Text style={styles.infoText}>
            Please review our cancellation policy before proceeding. Refund amount depends on how far in advance you cancel.
          </Text>
          
          <TouchableOpacity 
            style={styles.policyLink}
            onPress={() => navigation.navigate('ViewPdf')}
          >
            <Text style={styles.policyLinkText}>View Full Cancellation Policy</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.policiesContainer}>
          <Text style={styles.sectionTitle}>Refund Information</Text>
          {cancellationPolicies.map(policy => (
            <View key={policy.id} style={styles.policyCard}>
              <View style={styles.policyHeader}>
                <Text style={styles.policyTitle}>{policy.title}</Text>
                <Text style={styles.policyRefund}>{policy.refund}</Text>
              </View>
              <Text style={styles.policyDescription}>{policy.description}</Text>
              <Text style={styles.policyTimeframe}>{policy.timeframe}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.warningContainer}>
          <Text style={styles.warningTitle}>⚠️ Important Notice</Text>
          <Text style={styles.warningText}>
            Cancelling this appointment will remove it from your schedule. 
            Are you sure you want to proceed?
          </Text>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button
          title="Cancel Appointment"
          onPress={() => setShowCancelModal(true)}
          style={styles.cancelButton}
        />
      </View>
      
      <ConfirmationModal
        visible={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={() => {
          // In a real app, this would cancel the appointment
          setShowCancelModal(false)
          navigation.goBack()
        }}
        title="Confirm Cancellation"
        message="Are you sure you want to cancel this appointment? This action cannot be undone."
        confirmText="Yes, Cancel"
        cancelText="No, Keep"
      />
    </View>
  )
}

export default AppointmentCancellationScreen

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
    marginBottom: 3,
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
  infoContainer: {
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 15,
  },
  policyLink: {
    alignSelf: 'flex-start',
  },
  policyLinkText: {
    fontSize: 15,
    color: '#1976D2',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  policiesContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  policyCard: {
    backgroundColor: '#fafafa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#F71E27',
  },
  policyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  policyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  policyRefund: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F71E27',
  },
  policyDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  policyTimeframe: {
    fontSize: 13,
    color: '#999',
    fontStyle: 'italic',
  },
  warningContainer: {
    backgroundColor: '#FFF8E1',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#FFECB3',
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF8F00',
    marginBottom: 10,
  },
  warningText: {
    fontSize: 14,
    color: '#999',
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  cancelButton: {
    backgroundColor: '#F71E27',
  },
})