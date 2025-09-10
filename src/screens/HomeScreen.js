import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Greeting, QuickActions, Services, UpcomingAppointment } from '../components';

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
        <Greeting name="John Doe" />
        <QuickActions />
        <Services services={services} />
        <UpcomingAppointment appointment={appointment} onViewAllPress={() => navigation.navigate('Appointment')} />
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
});