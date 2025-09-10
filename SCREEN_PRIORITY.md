# Screen Implementation Priority

This document prioritizes the order of screen implementation based on the core user flow.

1.  **Authentication:**
    *   Login / Welcome (`WelcomeScreen.js`, `src/screens/auth/`)
2.  **Core Flow:**
    *   Home (`HomeScreen.js`)
    *   Doctor List & Profile (`HomeScreen.js`, `DoctorProfileModal.js`)
    *   Appointment Booking (`AppointmentScreen.js`, `AddSymptomModal.js`)
    *   My Appointments (`AppointmentScreen.js`)
3.  **Features:**
    *   Chat (`ThreadScreen.js`, `ChatLandingScreen.js`)
    *   Video Call (`IncomingCallScreen.js`, `StreamVideoCallScreen.js`)
    *   Billing (`BillingScreen.js`)
    *   Discounted Offers (`DiscountedOffersScreen.js`)
4.  **Profile & Settings:**
    *   Profile (`src/screens/profile/`)
    *   Settings (New Screen)
5.  **Other:**
    *   Emergency Call (`EmergencyCallScreen.js`)
    *   Home Visit (`HomeVisitScreen.js`)
    *   Language Selection (`LanguageSelection.js`)
    *   Notifications (New Screen)
