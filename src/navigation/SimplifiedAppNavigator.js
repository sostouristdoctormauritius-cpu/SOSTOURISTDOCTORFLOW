import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Auth screens
import WelcomeScreen from '../screens/WelcomeScreen';
import LanguageSelection from '../screens/LanguageSelection';
import SignInWithEmail from '../screens/auth/SignInWithEmail';
import SignInWithEmail2 from '../screens/auth/SignInWithEmail2';
import RegisterWithEmail from '../screens/auth/RegisterWithEmail';
import OtpVerify from '../screens/auth/OtpVerify';
import CompleteProfile from '../screens/profile/CompleteProfile';
import About from '../screens/About';
import ForgotPassword from '../screens/auth/ForgotPassword';
import SplashAnimation from '../screens/SplashAnimation';
import UpdatePassword from '../screens/auth/UpdatePassword';
import ViewPdf from '../screens/ViewPdf';

// Main app screens
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
import ConsultationBookAppointmentScreen from '../screens/consultation/ConsultationBookAppointmentScreen';
import ConsultationChatOnboardingScreen from '../screens/consultation/ConsultationChatOnboardingScreen';
import ConsultationEligibleDoctorsScreen from '../screens/consultation/ConsultationEligibleDoctorsScreen';
import ConsultationOrderConfirmationScreen from '../screens/consultation/ConsultationOrderConfirmationScreen';
import ConsultationPayAppointmentScreen from '../screens/consultation/ConsultationPayAppointmentScreen';
import ConsultationSymptomSelectionScreen from '../screens/consultation/ConsultationSymptomSelectionScreen';
import DoctorProfileModal from '../screens/DoctorProfileModal';
import ErrorBoundary from '../screens/ErrorBoundary';
import ErrorDetails from '../screens/ErrorDetails';
import VideoCallLobby from '../screens/VideoCallLobby';
import StreamVideoCallScreen from '../screens/StreamVideoCallScreen';
import IncomingCallScreen from '../screens/IncomingCallScreen';

// Modal stack
import ModalStackScreen from './ModalStack';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
      <Stack.Screen name="SignInWithEmail" component={SignInWithEmail} />
      <Stack.Screen name="SignInWithEmail2" component={SignInWithEmail2} />
      <Stack.Screen name="RegisterWithEmail" component={RegisterWithEmail} />
      <Stack.Screen name="OtpVerify" component={OtpVerify} />
      <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SplashAnimation" component={SplashAnimation} />
      <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
      <Stack.Screen name="ViewPdf" component={ViewPdf} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  // In a real app, this would be managed by a proper authentication context
  // For this showcase, we'll use a simple state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Simulate checking authentication state
  useEffect(() => {
    // In a real app, you would check for a valid token or session here
    // For this showcase, we'll just set a timeout to simulate an async check
    const timer = setTimeout(() => {
      // For demo purposes, let's default to not logged in
      // In a real app, this would depend on actual auth state
      setIsLoggedIn(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={isLoggedIn ? "Main" : "Auth"} 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Main" component={ModalStackScreen} />
        <Stack.Screen name="ErrorBoundary" component={ErrorBoundary} />
        <Stack.Screen name="ErrorDetails" component={ErrorDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;