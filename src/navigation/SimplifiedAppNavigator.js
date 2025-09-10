import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen imports
import ShowcaseScreen from '../screens/ShowcaseScreen';
import About from '../screens/About';
import AddSymptomModal from '../screens/AddSymptomModal';
import AppointmentCancellationScreen from '../screens/AppointmentCancellationScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import BillingScreen from '../screens/BillingScreen';
import ChatChannelListScreen from '../screens/ChatChannelListScreen';
import ChatLandingScreen from '../screens/ChatLandingScreen';
import EmergencyCallScreen from '../screens/EmergencyCallScreen';
import ErrorBoundary from '../screens/ErrorBoundary';
import ErrorDetails from '../screens/ErrorDetails';
import HomeScreen from '../screens/HomeScreen';
import HomeVisitScreen from '../screens/HomeVisitScreen';
import IncomingCallScreen from '../screens/IncomingCallScreen';
import LanguageSelection from '../screens/LanguageSelection';
import OfferDetailsScreen from '../screens/OfferDetailsScreen';
import PrescriptionScreen from '../screens/PrescriptionScreen';
import SplashAnimation from '../screens/SplashAnimation';
import StreamVideoCallScreen from '../screens/StreamVideoCallScreen';
import ThreadScreen from '../screens/ThreadScreen';
import VideoCallLobby from '../screens/VideoCallLobby';
import ViewPdf from '../screens/ViewPdf';
import WelcomeScreen from '../screens/WelcomeScreen';
import UnauthenticatedCompleteProfile from '../screens/Unauthenticated/CompleteProfile';
import AuthForgotPassword from '../screens/auth/ForgotPassword';
import AuthOtpVerify from '../screens/auth/OtpVerify';
import AuthRegisterWithEmail from '../screens/auth/RegisterWithEmail';
import AuthSignInWithEmail from '../screens/auth/SignInWithEmail';
import AuthSignInWithEmail2 from '../screens/auth/SignInWithEmail2';
import AuthUpdatePassword from '../screens/auth/UpdatePassword';
import ConsultationBookAppointmentScreen from '../screens/consultation/ConsultationBookAppointmentScreen';
import ConsultationChatOnboardingScreen from '../screens/consultation/ConsultationChatOnboardingScreen';
import ConsultationEligibleDoctorsScreen from '../screens/consultation/ConsultationEligibleDoctorsScreen';
import ConsultationOrderConfirmationScreen from '../screens/consultation/ConsultationOrderConfirmationScreen';
import ConsultationPayAppointmentScreen from '../screens/consultation/ConsultationPayAppointmentScreen';
import ConsultationSymptomSelectionScreen from '../screens/consultation/ConsultationSymptomSelectionScreen';
import ProfileCompleteProfile from '../screens/profile/CompleteProfile';

// Modal stack
import ModalStackScreen from './ModalStack';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Showcase" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Showcase" component={ShowcaseScreen} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="AddSymptomModal" component={AddSymptomModal} />
      <Stack.Screen name="AppointmentCancellationScreen" component={AppointmentCancellationScreen} />
      <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} />
      <Stack.Screen name="BillingScreen" component={BillingScreen} />
      <Stack.Screen name="ChatChannelListScreen" component={ChatChannelListScreen} />
      <Stack.Screen name="ChatLandingScreen" component={ChatLandingScreen} />
      <Stack.Screen name="EmergencyCallScreen" component={EmergencyCallScreen} />
      <Stack.Screen name="ErrorBoundary" component={ErrorBoundary} />
      <Stack.Screen name="ErrorDetails" component={ErrorDetails} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HomeVisitScreen" component={HomeVisitScreen} />
      <Stack.Screen name="IncomingCallScreen" component={IncomingCallScreen} />
      <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
      <Stack.Screen name="OfferDetailsScreen" component={OfferDetailsScreen} />
      <Stack.Screen name="PrescriptionScreen" component={PrescriptionScreen} />
      <Stack.Screen name="SplashAnimation" component={SplashAnimation} />
      <Stack.Screen name="StreamVideoCallScreen" component={StreamVideoCallScreen} />
      <Stack.Screen name="ThreadScreen" component={ThreadScreen} />
      <Stack.Screen name="VideoCallLobby" component={VideoCallLobby} />
      <Stack.Screen name="ViewPdf" component={ViewPdf} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="UnauthenticatedCompleteProfile" component={UnauthenticatedCompleteProfile} />
      <Stack.Screen name="AuthForgotPassword" component={AuthForgotPassword} />
      <Stack.Screen name="AuthOtpVerify" component={AuthOtpVerify} />
      <Stack.Screen name="AuthRegisterWithEmail" component={AuthRegisterWithEmail} />
      <Stack.Screen name="AuthSignInWithEmail" component={AuthSignInWithEmail} />
      <Stack.Screen name="AuthSignInWithEmail2" component={AuthSignInWithEmail2} />
      <Stack.Screen name="AuthUpdatePassword" component={AuthUpdatePassword} />
      <Stack.Screen name="ConsultationBookAppointmentScreen" component={ConsultationBookAppointmentScreen} />
      <Stack.Screen name="ConsultationChatOnboardingScreen" component={ConsultationChatOnboardingScreen} />
      <Stack.Screen name="ConsultationEligibleDoctorsScreen" component={ConsultationEligibleDoctorsScreen} />
      <Stack.Screen name="ConsultationOrderConfirmationScreen" component={ConsultationOrderConfirmationScreen} />
      <Stack.Screen name="ConsultationPayAppointmentScreen" component={ConsultationPayAppointmentScreen} />
      <Stack.Screen name="ConsultationSymptomSelectionScreen" component={ConsultationSymptomSelectionScreen} />
      <Stack.Screen name="ProfileCompleteProfile" component={ProfileCompleteProfile} />
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
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;