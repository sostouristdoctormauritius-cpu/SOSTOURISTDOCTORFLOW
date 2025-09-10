# SOSDOCMOBILEAPP Navigation Map

## Overview
This document shows how all screens in the SOSDOCMOBILEAPP are connected through navigation.

## Main Navigation Flow

```
Welcome Screen
  ├── Sign In With Email
  │   ├── Sign In With Email 2 (Password)
  │   └── OTP Verify
  │       └── Home
  ├── Register With Email
  │   └── OTP Verify
  │       └── Complete Profile
  │           └── Home
  └── Home (Direct access for demo)

Home
  ├── Online Consultation Flow
  │   ├── Consultation Chat Onboarding
  │   ├── Consultation Eligible Doctors
  │   │   └── Doctor Profile Modal (Popup)
  │   ├── Consultation Symptom Selection
  │   │   └── Add Symptom Modal (Popup)
  │   ├── Consultation Book Appointment
  │   ├── Consultation Pay Appointment
  │   └── Consultation Order Confirmation
  ├── Home Visit
  ├── Appointments
  │   └── Appointment Cancellation
  ├── Billing
  ├── Emergency Call
  ├── E-Prescription
  ├── Discounted Offers
  │   └── Offer Details
  ├── Chat
  │   ├── Chat Landing
  │   ├── Chat Channel List
  │   └── Thread
  └── Language Selection
```

## Modal Navigation

Modals are implemented using React Navigation's modal presentation:

```
Main App Stack
  └── Modal Stack
      ├── Main Screens (Authenticated/Unauthenticated)
      ├── Doctor Profile Modal
      └── Add Symptom Modal
```

## Screen Descriptions

### Authentication Flow
- **WelcomeScreen**: Entry point of the application
- **SignInWithEmail**: Email input for sign in
- **SignInWithEmail2**: Password input for sign in
- **RegisterWithEmail**: Registration form
- **OtpVerify**: OTP verification screen
- **CompleteProfile**: User profile completion

### Main App Screens
- **Home**: Main dashboard with access to all features
- **HomeVisit**: Location selection for home visits
- **Appointment**: List of appointments
- **AppointmentCancellation**: Cancellation policy and process
- **Billing**: Billing information
- **EmergencyCall**: Emergency contact screen
- **Prescription**: E-Prescription viewing
- **DiscountedOffers**: List of available discounts
- **OfferDetails**: Details of a specific offer
- **LanguageSelection**: Language selection screen

### Consultation Flow
- **ConsultationChatOnboarding**: Introduction to chat consultation
- **ConsultationEligibleDoctors**: List of available doctors
- **DoctorProfileModal**: Detailed doctor information (Popup)
- **ConsultationSymptomSelection**: Symptom selection for consultation
- **AddSymptomModal**: Adding custom symptoms (Popup)
- **ConsultationBookAppointment**: Appointment scheduling
- **ConsultationPayAppointment**: Payment processing
- **ConsultationOrderConfirmation**: Confirmation of appointment

### Chat System
- **ChatLanding**: Chat system introduction
- **ChatChannelList**: List of chat channels
- **Thread**: Individual chat thread

## Implementation Notes

1. All screens are connected through React Navigation
2. Stack Navigator is used for the main navigation
3. Modal screens are implemented using React Navigation's modal presentation
4. Navigation is implemented using the `useNavigation` hook
5. Screen names are defined in the constants file for consistency

## How to Navigate

To navigate from one screen to another, use the `navigation.navigate()` function with the screen name:

```javascript
import { useNavigation } from '@react-navigation/native';

const MyComponent = () => {
  const navigation = useNavigation();
  
  const handlePress = () => {
    navigation.navigate('ScreenName');
  };
  
  return (
    <Button title="Go to Screen" onPress={handlePress} />
  );
};
```

To open a modal, use the same `navigation.navigate()` function with the modal screen name:

```javascript
const openDoctorProfile = () => {
  navigation.navigate('DoctorProfileModal');
};
```