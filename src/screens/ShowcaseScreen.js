import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../components';

const screenMap = {
  'WelcomeScreen': 'Welcome',
  'SignInWithEmail': 'SignInWithEmail',
  'RegisterWithEmail': 'RegisterWithEmail',
  'CompleteProfile': 'CompleteProfile', // Assuming this is the unauthenticated one
  'HomeScreen': 'Home',
  'DoctorProfileModal': 'DoctorProfileModal',
  'AppointmentScreen': 'Appointment',
  'AppointmentBookingScreen': 'AppointmentBooking',
  'AddSymptomModal': 'AddSymptomModal',
  'ChatLandingScreen': 'ChatLanding',
  'IncomingCallScreen': 'IncomingCallScreen',
  'StreamVideoCallScreen': 'StreamVideoCallScreen',
  'BillingScreen': 'Billing',
  'Payment': 'Payment',
  'Card': 'Card',
  'OrderConfirmation': 'OrderConfirmation',
  'DiscountedOffersScreen': 'DiscountedOffers',
  'Settings': 'Settings',
  'About': 'About',
  'LanguageSelection': 'LanguageSelection',
  'ForgotPassword': 'ForgotPassword',
  'OtpVerify': 'OtpVerify',
  'UpdatePassword': 'UpdatePassword',
  'ViewPdf': 'ViewPdf',
  'ThreadScreen': 'Thread',
  'VideoCallLobby': 'VideoCallLobby',
  'EmergencyCallScreen': 'EmergencyCall',
  'HomeVisitScreen': 'HomeVisit',
  'OfferDetailsScreen': 'OfferDetails',
  'PrescriptionScreen': 'Prescription',
  'ChatChannelListScreen': 'ChatChannelList',
  'ErrorBoundary': 'ErrorBoundary',
  'ErrorDetails': 'ErrorDetails',
  'SplashAnimation': 'SplashAnimation',
  'PaymentMethods': 'PaymentMethods',
};

const screens = Object.keys(screenMap);

const ShowcaseScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Screens Showcase</Text>
        <Text style={styles.subtitle}>Tap any button to view the screen</Text>
      </View>
      
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
      >
        {screens.map((screenName, index) => (
          <View key={screenName} style={styles.buttonContainer}>
            <Button
              title={`${index + 1}. ${screenName}`}
              onPress={() => navigation.navigate(screenMap[screenName])}
              style={styles.button}
              textStyle={styles.buttonText}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 10,
  },
  buttonContainer: {
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ShowcaseScreen;
