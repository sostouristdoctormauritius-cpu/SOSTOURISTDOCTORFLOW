import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import page components
import DashboardPage from '../pages/DashboardPage';
import ConsultationFlowPage from '../pages/ConsultationFlowPage';

// Import individual screens
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

const Stack = createStackNavigator();

function AuthenticatedStack() {
  return (
    <Stack.Navigator initialRouteName="DashboardPage">
      <Stack.Screen name="DashboardPage" component={DashboardPage} options={{ headerShown: false }} />
      <Stack.Screen name="ConsultationFlowPage" component={ConsultationFlowPage} options={{ headerShown: false }} />
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
  );
}

export default AuthenticatedStack;