import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation();

  const services = [
    { id: 1, title: 'Instant Consultation', icon: require('../assets/images/instantOnline.png'), screen: 'ConsultationFlowPage' },
    { id: 2, title: 'E-Prescription', icon: require('../assets/images/ePrescription.png'), screen: 'Prescription' },
    { id: 3, title: 'Home Visit', icon: require('../assets/images/homeVisit.png'), screen: 'HomeVisit' },
    { id: 4, title: 'Emergency Call', icon: require('../assets/images/sad-face.png'), screen: 'EmergencyCall' },
  ];

  const appointment = {
    title: 'Dr. John Smith',
    specialty: 'Cardiologist',
    time: '10:30 AM',
    date: 'Today, 25 May 2023',
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../assets/images/watch.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Profile')}>
            <Image source={require('../assets/images/profile.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Good morning,</Text>
          <Text style={styles.userName}>John Doe</Text>
        </View>

        <View style={styles.quickActionsContainer}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('ConsultationFlowPage')}
          >
            <Text style={styles.actionButtonText}>Start Instant Consultation</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.servicesScroll}>
            {services.map(service => (
              <TouchableOpacity 
                key={service.id} 
                style={styles.serviceCard}
                onPress={() => navigation.navigate(service.screen)}
              >
                <Image source={service.icon} style={styles.serviceIcon} />
                <Text style={styles.serviceTitle}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.appointmentsContainer}>
          <Text style={styles.sectionTitle}>Upcoming Appointment</Text>
          <View style={styles.appointmentCard}>
            <Image source={require('../assets/images/profile.png')} style={styles.appointmentIcon} />
            <View style={styles.appointmentInfo}>
              <Text style={styles.appointmentTitle}>{appointment.title}</Text>
              <Text style={styles.appointmentDetails}>{appointment.specialty}</Text>
              <Text style={styles.appointmentDetails}>{appointment.date} at {appointment.time}</Text>
            </View>
            <TouchableOpacity style={styles.arrowButton}>
              <Image source={require('../assets/images/down_arrow.png')} style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={styles.viewAllButton}
            onPress={() => navigation.navigate('Appointment')}
          >
            <Text style={styles.viewAllText}>View All Appointments</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 20,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  greetingContainer: {
    padding: 20,
  },
  greetingText: {
    fontSize: 18,
    color: '#666666',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  quickActionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#F71E27',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  servicesContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  servicesScroll: {
    paddingLeft: 20,
  },
  serviceCard: {
    width: 140,
    height: 160,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  serviceIcon: {
    width: 60,
    height: 60,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
  },
  appointmentsContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  appointmentCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  appointmentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  appointmentInfo: {
    flex: 1,
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  appointmentDetails: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  arrowButton: {
    padding: 10,
  },
  arrowIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    transform: [{ rotate: '-90deg' }],
  },
  viewAllButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  viewAllText: {
    color: '#F71E27',
    fontSize: 16,
    fontWeight: '600',
  },
});