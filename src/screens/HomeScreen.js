import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';
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
      <Header 
        showLogo={true}
        onRightPress={() => navigation.navigate('Profile')}
      />

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
  scrollViewContent: {
    paddingBottom: 20,
  },
});