import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screens = [
  'About',
  'AddSymptomModal',
  'AppointmentCancellationScreen',
  'AppointmentScreen',
  'BillingScreen',
  'ChatChannelListScreen',
  'ChatLandingScreen',
  'EmergencyCallScreen',
  'ErrorBoundary',
  'ErrorDetails',
  'HomeScreen',
  'HomeVisitScreen',
  'IncomingCallScreen',
  'LanguageSelection',
  'OfferDetailsScreen',
  'PrescriptionScreen',
  'SplashAnimation',
  'StreamVideoCallScreen',
  'ThreadScreen',
  'VideoCallLobby',
  'ViewPdf',
  'WelcomeScreen',
  'UnauthenticatedCompleteProfile',
  'AuthForgotPassword',
  'AuthOtpVerify',
  'AuthRegisterWithEmail',
  'AuthSignInWithEmail',
  'AuthSignInWithEmail2',
  'AuthUpdatePassword',
  'ConsultationBookAppointmentScreen',
  'ConsultationChatOnboardingScreen',
  'ConsultationEligibleDoctorsScreen',
  'ConsultationOrderConfirmationScreen',
  'ConsultationPayAppointmentScreen',
  'ConsultationSymptomSelectionScreen',
  'ProfileCompleteProfile',
];

const ShowcaseScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Screens Showcase</Text>
      {screens.map(screenName => (
        <View key={screenName} style={styles.buttonContainer}>
          <Button
            title={screenName}
            onPress={() => navigation.navigate(screenName)}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 10,
  },
});

export default ShowcaseScreen;
