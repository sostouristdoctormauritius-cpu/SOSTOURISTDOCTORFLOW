/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import { SCREENS_HOME, SCREENS_WELCOME } from "app/constants/Screens"
import AuthenticatedStack from "app/navigators/AuthenticatedStack"
import UnauthenticatedStack from "app/navigators/UnauthenticatedStack" 
import { colors } from "app/theme"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { useStores } from "../models"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"

export type AppStackParamList = {
  Welcome: undefined
  Login: undefined
  HomeScreen: undefined
  HomeVisitScreen: undefined
  ConsultationChatOnboardingScreen: undefined
  ConsultationEligibleDoctorsScreen: undefined
  ConsultationSymptomSelectionScreen: undefined
  ConsultationBookAppointmentScreen: undefined
  ConsultationOrderConfirmationScreen: undefined
  LanguageSelection: undefined
  About: undefined
  RegisterWithEmail: undefined
  SignInWithEmail: undefined
  CompleteProfile: undefined
  ViewPdf: undefined
  ChatLanding: undefined
  ChatChannelList: undefined
  Thread: undefined
  Call: undefined
  CONSULTATION_MODAL_DOCTOR: undefined
  CONSULTATION_MODAL_SYMPTOM: undefined
  ConsultationPayAppointment: undefined
  Billing: undefined
  EmergencyCall: undefined
  DiscountedOffers: undefined
  OfferDetails: undefined
  Appointments: undefined
  AppointmentCancellation: undefined
  EPrescription: undefined
}

const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.background,
        headerTintColor: "#000000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      initialRouteName={isAuthenticated ? SCREENS_HOME : SCREENS_WELCOME}
    >
      {isAuthenticated ? (
        <Stack.Screen name={SCREENS_HOME} component={AuthenticatedStack} />
      ) : (
        <Stack.Screen name={SCREENS_WELCOME} component={UnauthenticatedStack} />
      )}
    </Stack.Navigator>
  )
})

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
