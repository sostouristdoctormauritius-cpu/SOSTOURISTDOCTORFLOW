# SOSDOCMOBILEAPP Screen Flows

## Overview
This document describes the complete user journey flows through the SOSDOCMOBILEAPP application.

## Flow 1: User Authentication

### New User Registration
```
Welcome Screen 
  → Register With Email 
  → OTP Verify 
  → Complete Profile 
  → Home
```

### Existing User Login
```
Welcome Screen 
  → Sign In With Email 
  → Sign In With Email 2 (Password) 
  → Home
```

Alternative Login with OTP:
```
Welcome Screen 
  → Sign In With Email 
  → OTP Verify 
  → Home
```

## Flow 2: Online Consultation

```
Home 
  → Consultation Chat Onboarding 
  → Consultation Eligible Doctors 
  → Doctor Profile Modal (Popup) 
  → Consultation Symptom Selection 
  → Add Symptom Modal (Popup) 
  → Consultation Book Appointment 
  → Consultation Pay Appointment 
  → Consultation Order Confirmation
```

## Flow 3: Home Visit

```
Home 
  → Home Visit 
  → Consultation Eligible Doctors 
  → Doctor Profile Modal (Popup) 
  → Consultation Symptom Selection 
  → Add Symptom Modal (Popup) 
  → Consultation Book Appointment 
  → Consultation Pay Appointment 
  → Consultation Order Confirmation
```

## Flow 4: Appointment Management

```
Home 
  → Appointment 
  → Appointment Details 
  → Appointment Cancellation (Popup)
```

## Flow 5: Billing & Payments

```
Home 
  → Billing
```

## Flow 6: Emergency Services

```
Home 
  → Emergency Call
```

## Flow 7: Prescription Access

```
Home 
  → E-Prescription
```

## Flow 8: Discount Offers

```
Home 
  → Discounted Offers 
  → Offer Details
```

## Flow 9: Chat System

```
Home 
  → Chat Landing 
  → Chat Channel List 
  → Thread
```

## Flow 10: Settings & Preferences

```
Home 
  → Language Selection
```

## Modal Implementation

The application implements two main modal types:

1. **Doctor Profile Modal**: 
   - Triggered from Consultation Eligible Doctors screen
   - Displays detailed information about a selected doctor
   - Can be dismissed by tapping outside or using the close button

2. **Add Symptom Modal**: 
   - Triggered from Consultation Symptom Selection screen
   - Allows users to enter custom symptoms
   - Can be dismissed by tapping outside or using the cancel button

## Implementation Details

Each flow is implemented as a sequence of connected screens using React Navigation. Users can navigate forward through the flows using buttons and links, and backward using the device's back button or navigation header.

### Navigation Patterns

1. **Stack Navigation**: Used for linear flows where users progress from one screen to the next
2. **Modal Presentation**: Used for supplementary information screens like Doctor Profile and Add Symptom
3. **Tab Navigation**: Could be implemented for main sections (not currently implemented)

### User Experience Considerations

1. **Consistent Navigation**: All screens have a consistent way to navigate back
2. **Clear Progression**: Each step in a flow is clearly indicated
3. **Error Handling**: Each flow accounts for potential errors or edge cases
4. **Accessibility**: Navigation elements are clearly labeled and easy to use
5. **Modal Behavior**: Modals can be dismissed by tapping outside or using explicit buttons

## Testing the Flows

To test each flow:

1. Start at the Welcome Screen
2. Follow the documented path for each flow
3. Verify that all screens load correctly
4. Check that navigation between screens works as expected
5. Confirm that modal screens appear and behave correctly
6. Verify that all user interface elements are visible and properly positioned

## Future Improvements

1. Implement tab navigation for main sections
2. Add deep linking for direct access to specific flows
3. Implement better state management for form data across screens
4. Add animations for smoother transitions between screens
5. Add more comprehensive error and confirmation modals throughout the app