import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, Button, ScrollView } from 'react-native';

// Import all screens
import WelcomeScreen from '../screens/WelcomeScreen';
import LanguageSelection from '../screens/LanguageSelection';
import SignInWithEmail from '../screens/SignInWithEmail';
import SignInWithEmail2 from '../screens/SignInWithEmail2';
import RegisterWithEmail from '../screens/RegisterWithEmail';
import OtpVerify from '../screens/OtpVerify';
import CompleteProfile from '../screens/Unauthenticated/CompleteProfile';
import About from '../screens/About';
import ForgotPassword from '../screens/ForgotPassword';
import SplashAnimation from '../screens/SplashAnimation';
import UpdatePassword from '../screens/UpdatePassword';
import ViewPdf from '../screens/ViewPdf';

import HomeScreen from '../screens/HomeScreen';
import BillingScreen from '../screens/BillingScreen';
import ChatChannelListScreen from '../screens/ChatChannelListScreen';
import ChatLandingScreen from '../screens/ChatLandingScreen';
import DiscountedOffersScreen from '../screens/DiscountedOffersScreen';
import EmergencyCallScreen from '../screens/EmergencyCallScreen';
import HomeVisitScreen from '../screens/HomeVisitScreen';
import OfferDetailsScreen from '../screens/OfferDetailsScreen';
import PrescriptionScreen from '../screens/PrescriptionScreen';
import ThreadScreen from '../screens/ThreadScreen';
import AppointmentCancellationScreen from '../screens/AppointmentCancellationScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import AddSymptomModal from '../screens/AddSymptomModal';
import ConsultationBookAppointmentScreen from '../screens/ConsultationBookAppointmentScreen';
import ConsultationChatOnboardingScreen from '../screens/ConsultationChatOnboardingScreen';
import ConsultationEligibleDoctorsScreen from '../screens/ConsultationEligibleDoctorsScreen';
import ConsultationOrderConfirmationScreen from '../screens/ConsultationOrderConfirmationScreen';
import ConsultationPayAppointmentScreen from '../screens/ConsultationPayAppointmentScreen';
import ConsultationSymptomSelectionScreen from '../screens/ConsultationSymptomSelectionScreen';
import DoctorProfileModal from '../screens/DoctorProfileModal';
import ErrorBoundary from '../screens/ErrorBoundary';
import ErrorDetails from '../screens/ErrorDetails';
import VideoCallLobby from '../screens/VideoCallLobby';
import StreamVideoCallScreen from '../screens/StreamVideoCallScreen';
import IncomingCallScreen from '../screens/IncomingCallScreen';

const Stack = createStackNavigator();

// Menu screen to navigate to all screens
function ShowcaseMenu({ navigation }) {
  const screens = [
    'Welcome',
    'LanguageSelection',
    'SignInWithEmail',
    'SignInWithEmail2',
    'RegisterWithEmail',
    'OtpVerify',
    'CompleteProfile',
    'About',
    'ForgotPassword',
    'SplashAnimation',
    'UpdatePassword',
    'ViewPdf',
    'Home',
    'Billing',
    'ChatChannelList',
    'ChatLanding',
    'DiscountedOffers',
    'EmergencyCall',
    'HomeVisit',
    'OfferDetails',
    'Prescription',
    'Thread',
    'AppointmentCancellation',
    'Appointment',
    'AddSymptomModal',
    'ConsultationBookAppointment',
    'ConsultationChatOnboarding',
    'ConsultationEligibleDoctors',
    'ConsultationOrderConfirmation',
    'ConsultationPayAppointment',
    'ConsultationSymptomSelection',
    'DoctorProfileModal',
    'ErrorBoundary',
    'ErrorDetails',
    'VideoCallLobby',
    'StreamVideoCallScreen',
    'IncomingCallScreen'
  ];

  return (
    <ScrollView style={styles.menuContainer}>
      <Text style={styles.title}>SOSDOCMOBILEAPP Showcase</Text>
      <Text style={styles.subtitle}>Select a screen to view:</Text>
      {screens.map((screen) => (
        <Button
          key={screen}
          title={screen}
          onPress={() => navigation.navigate(screen)}
          color="#2196F3"
        />
      ))}
    </ScrollView>
  );
}

function ShowcaseNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ShowcaseMenu">
        <Stack.Screen 
          name="ShowcaseMenu" 
          component={ShowcaseMenu} 
          options={{ 
            title: 'Screen Showcase',
            headerTitleStyle: { fontSize: 16 }
          }} 
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LanguageSelection" component={LanguageSelection} options={{ headerShown: false }} />
        <Stack.Screen name="SignInWithEmail" component={SignInWithEmail} options={{ headerShown: false }} />
        <Stack.Screen name="SignInWithEmail2" component={SignInWithEmail2} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterWithEmail" component={RegisterWithEmail} options={{ headerShown: false }} />
        <Stack.Screen name="OtpVerify" component={OtpVerify} options={{ headerShown: false }} />
        <Stack.Screen name="CompleteProfile" component={CompleteProfile} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="SplashAnimation" component={SplashAnimation} options={{ headerShown: false }} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword} options={{ headerShown: false }} />
        <Stack.Screen name="ViewPdf" component={ViewPdf} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Billing" component={BillingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChatChannelList" component={ChatChannelListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChatLanding" component={ChatLandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DiscountedOffers" component={DiscountedOffersScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EmergencyCall" component={EmergencyCallScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeVisit" component={HomeVisitScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OfferDetails" component={OfferDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Prescription" component={PrescriptionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Thread" component={ThreadScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AppointmentCancellation" component={AppointmentCancellationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Appointment" component={AppointmentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddSymptomModal" component={AddSymptomModal} options={{ headerShown: false }} />
        <Stack.Screen name="ConsultationBookAppointment" component={ConsultationBookAppointmentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConsultationChatOnboarding" component={ConsultationChatOnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConsultationEligibleDoctors" component={ConsultationEligibleDoctorsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConsultationOrderConfirmation" component={ConsultationOrderConfirmationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConsultationPayAppointment" component={ConsultationPayAppointmentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConsultationSymptomSelection" component={ConsultationSymptomSelectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DoctorProfileModal" component={DoctorProfileModal} options={{ headerShown: false }} />
        <Stack.Screen name="ErrorBoundary" component={ErrorBoundary} options={{ headerShown: false }} />
        <Stack.Screen name="ErrorDetails" component={ErrorDetails} options={{ headerShown: false }} />
        <Stack.Screen name="VideoCallLobby" component={VideoCallLobby} options={{ headerShown: false }} />
        <Stack.Screen name="StreamVideoCallScreen" component={StreamVideoCallScreen} options={{ headerShown: false }} />
        <Stack.Screen name="IncomingCallScreen" component={IncomingCallScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ShowcaseNavigator;