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
import DiscountedOffersScreen from '../screens/DiscountedOffersScreen';
import EmergencyCallScreen from '../screens/EmergencyCallScreen';
import ErrorBoundary from '../screens/ErrorBoundary';
import ErrorDetails from '../screens/ErrorDetails';
import HomeScreen from '../screens/HomeScreen';
import HomeVisitScreen from '../screens/HomeVisitScreen';
import IncomingCallScreen from '../screens/IncomingCallScreen';
import LanguageSelection from '../screens/LanguageSelection';
import OfferDetailsScreen from '../screens/OfferDetailsScreen';
import PrescriptionScreen from '../screens/PrescriptionScreen';
import Settings from '../screens/Settings';
import SplashAnimation from '../screens/SplashAnimation';
import StreamVideoCallScreen from '../screens/StreamVideoCallScreen';
import ThreadScreen from '../screens/ThreadScreen';
import VideoCallLobby from '../screens/VideoCallLobby';
import ViewPdf from '../screens/ViewPdf';
import Payment from '../screens/payment/Payment';
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
import ProfileScreen from '../screens/profile/ProfileScreen';
import ConsultationFlowPage from '../pages/ConsultationFlowPage';
import PrivacyPolicyScreen from '../screens/PrivacyPolicy';
import TermsAndConditionsScreen from '../screens/TermsAndConditions';
import DoctorProfileModal from '../screens/DoctorProfileModal';
import Card from '../screens/payment/Card';

// Modal stack
import ModalStackScreen from './ModalStack';
import PaymentMethods from '../screens/payment/PaymentMethods';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Showcase" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Showcase" component={ShowcaseScreen} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="AddSymptomModal" component={AddSymptomModal} />
      <Stack.Screen name="AppointmentCancellation" component={AppointmentCancellationScreen} />
      <Stack.Screen name="Appointment" component={AppointmentScreen} />
      <Stack.Screen name="Billing" component={BillingScreen} />
      <Stack.Screen name="Card" component={Card} />
      <Stack.Screen name="ChatChannelList" component={ChatChannelListScreen} />
      <Stack.Screen name="ChatLanding" component={ChatLandingScreen} />
      <Stack.Screen name="DiscountedOffers" component={DiscountedOffersScreen} />
      <Stack.Screen name="EmergencyCall" component={EmergencyCallScreen} />
      <Stack.Screen name="ErrorBoundary" component={ErrorBoundary} />
      <Stack.Screen name="ErrorDetails" component={ErrorDetails} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeVisit" component={HomeVisitScreen} />
      <Stack.Screen name="IncomingCallScreen" component={IncomingCallScreen} />
      <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
      <Stack.Screen name="OfferDetails" component={OfferDetailsScreen} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Prescription" component={PrescriptionScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="SplashAnimation" component={SplashAnimation} />
      <Stack.Screen name="StreamVideoCallScreen" component={StreamVideoCallScreen} />
      <Stack.Screen name="Thread" component={ThreadScreen} />
      <Stack.Screen name="VideoCallLobby" component={VideoCallLobby} />
      <Stack.Screen name="ViewPdf" component={ViewPdf} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="CompleteProfile" component={UnauthenticatedCompleteProfile} />
      <Stack.Screen name="ForgotPassword" component={AuthForgotPassword} />
      <Stack.Screen name="OtpVerify" component={AuthOtpVerify} />
      <Stack.Screen name="RegisterWithEmail" component={AuthRegisterWithEmail} />
      <Stack.Screen name="SignInWithEmail" component={AuthSignInWithEmail} />
      <Stack.Screen name="SignInWithEmail2" component={AuthSignInWithEmail2} />
      <Stack.Screen name="UpdatePassword" component={AuthUpdatePassword} />
      <Stack.Screen name="AppointmentBooking" component={ConsultationBookAppointmentScreen} />
      <Stack.Screen name="ConsultationChatOnboarding" component={ConsultationChatOnboardingScreen} />
      <Stack.Screen name="ConsultationEligibleDoctors" component={ConsultationEligibleDoctorsScreen} />
      <Stack.Screen name="OrderConfirmation" component={ConsultationOrderConfirmationScreen} />
      <Stack.Screen name="ConsultationPayAppointment" component={ConsultationPayAppointmentScreen} />
      <Stack.Screen name="ConsultationSymptomSelection" component={ConsultationSymptomSelectionScreen} />
      <Stack.Screen name="ProfileCompleteProfile" component={ProfileCompleteProfile} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ConsultationFlowPage" component={ConsultationFlowPage} />
      <Stack.Screen name="DoctorProfileModal" component={DoctorProfileModal} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditionsScreen} />
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