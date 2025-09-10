import Screens from "app/screens"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Colors from "app/constants/Colors"
import {
  SCREENS_APPOINTMENT_CANCELLATION,
  SCREENS_BILLING,
  SCREENS_CHAT_CHANNEL_LIST,
  SCREENS_CHAT_LANDING,
  SCREENS_CHAT_THREAD,
  SCREENS_COMPLETE_PROFILE,
  SCREENS_CONSULTATION_BOOK_APPT,
  SCREENS_CONSULTATION_CHAT_ONBOARDING,
  SCREENS_CONSULTATION_CONFIRM_ORDER,
  SCREENS_CONSULTATION_ELIGIBLE_DOCTORS,
  SCREENS_CONSULTATION_MODAL_DOCTOR,
  SCREENS_CONSULTATION_MODAL_SYMPTOM,
  SCREENS_CONSULTATION_PAY,
  SCREENS_CONSULTATION_SYMPTOM_SELECTION,
  SCREENS_DISCOUNTED_OFFERS,
  SCREENS_EMERGENCY_CALL,
  SCREENS_HOME_VISIT,
  SCREENS_OFFER_DETAILS,
  SCREENS_PRESCRIPTION,
  SCREENS_VIDEO_CALL,
  SCREENS_VIEW_PDF,
} from "app/constants/Screens"
import { translate } from "app/i18n/translate"
import { AppStackParamList } from "app/navigators/AppNavigator"
import AuthenticatedTabs from "app/navigators/AuthenticatedTabs"
import React from "react"

const unauthenticatedHeaderOptions = {
  headerShown: true,
  headerBackImageSource: require("../images/header/chevronLeft.png"),
  title: "",
  headerBackTitle: "",
  headerBackTitleVisible: false,
  headerShadowVisible: false,
  headerStyle: { backgroundColor: '#ffffff' },
  headerTintColor: '#000000', // Change text color
}

const Stack = createNativeStackNavigator<AppStackParamList>()

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeTabs">
      <Stack.Screen name="HomeTabs" component={AuthenticatedTabs} />
      <Stack.Screen
        name={SCREENS_HOME_VISIT}
        component={Screens.HomeVisitScreen}
        options={{
          headerShown: true,
          headerBackImageSource: require("../images/header/chevronLeft.png"),
          title: "Choose your location",
          headerBackTitle: "",
          headerBackTitleVisible: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name={SCREENS_CONSULTATION_CHAT_ONBOARDING}
        component={Screens.ConsultationChatOnboardingScreen}
      />
      <Stack.Screen
        name={SCREENS_CONSULTATION_ELIGIBLE_DOCTORS}
        component={Screens.ConsultationEligibleDoctorsScreen}
      />
      <Stack.Screen
        name={SCREENS_CONSULTATION_SYMPTOM_SELECTION}
        component={Screens.ConsultationSymptomSelectionScreen}
      />
      <Stack.Screen
        name={SCREENS_CONSULTATION_BOOK_APPT}
        component={Screens.ConsultationBookAppointmentScreen}
      />
      <Stack.Screen
        name={SCREENS_CONSULTATION_CONFIRM_ORDER}
        component={Screens.ConsultationOrderConfirmationScreen}
      />
      <Stack.Screen
        name={SCREENS_CONSULTATION_MODAL_SYMPTOM}
        component={Screens.AddSymptomModalScreen}
      />
      <Stack.Screen
        name={SCREENS_CONSULTATION_MODAL_DOCTOR}
        component={Screens.DoctorProfileModalScreen}
      />
      <Stack.Screen
        name={SCREENS_CONSULTATION_PAY}
        component={Screens.ConsultationPayAppointmentScreen}
      />
      <Stack.Screen
        name={SCREENS_APPOINTMENT_CANCELLATION}
        component={Screens.AppointmentCancellationScreen}
        options={{
          headerShown: true,
          title: "Cancellation Policy",
          headerShadowVisible: false,
          headerBackTitle: "",
          headerBackTitleVisible: false,
          headerBackImageSource: require("../images/header/chevronLeft.png"),
        }}
      />
      <Stack.Screen name={SCREENS_VIEW_PDF} component={Screens.ViewPdf} />

      <Stack.Screen
        name={SCREENS_BILLING}
        component={Screens.BillingScreen}
        options={{
          ...unauthenticatedHeaderOptions,
          title: translate("billing.heading", {}),
          headerStyle: {
            backgroundColor: Colors.greyBG,
          },
        }}
      />

      <Stack.Screen
        name={SCREENS_EMERGENCY_CALL}
        options={{
          ...unauthenticatedHeaderOptions,
          title: "Emergency Number",
          headerStyle: {
            backgroundColor: Colors.greyBG,
          },
          headerBackTitle: "",
        }}
        component={Screens.EmergencyCallScreen}
      />

      <Stack.Screen
        name={SCREENS_PRESCRIPTION}
        component={Screens.PrescriptionScreen}
        options={{
          ...unauthenticatedHeaderOptions,
          title: SCREENS_PRESCRIPTION,
          headerStyle: {
            backgroundColor: Colors.greyBG,
          },
        }}
      />
      <Stack.Screen
        name={SCREENS_DISCOUNTED_OFFERS}
        options={{
          ...unauthenticatedHeaderOptions,
          title: translate("discounts.heading", {}),
          headerStyle: {
            backgroundColor: Colors.greyBG,
          },
        }}
        component={Screens.DiscountedOffersScreen}
      />
      <Stack.Screen
        name={SCREENS_OFFER_DETAILS}
        options={{
          ...unauthenticatedHeaderOptions,
          title: translate("discounts.heading", {}),
          headerStyle: {
            backgroundColor: Colors.greyBG,
          },
        }}
        component={Screens.OfferDetailsScreen}
      />
      <Stack.Screen name={SCREENS_CHAT_LANDING} component={Screens.ChatLandingScreen} />
      <Stack.Screen name={SCREENS_CHAT_THREAD} component={Screens.ThreadScreen} />
      <Stack.Screen name={SCREENS_CHAT_CHANNEL_LIST} component={Screens.ChatChannelListScreen} />
      <Stack.Screen name={SCREENS_VIDEO_CALL} component={Screens.StreamVideoCallScreen} />
      <Stack.Screen name={SCREENS_COMPLETE_PROFILE} component={Screens.CompleteProfile} />
    </Stack.Navigator>
  )
}

 
export default AuthenticatedStack 
