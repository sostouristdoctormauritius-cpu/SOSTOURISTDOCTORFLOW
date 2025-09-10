import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  OTP_VERIFY,
  SCREEN_UPDATE_PASS,
  SCREENS_ABOUT,
  SCREENS_COMPLETE_PROFILE,
  SCREENS_FORGOT_PASSWORD,
  SCREENS_LANG_SELECTION,
  SCREENS_ONBOARDING,
  SCREENS_REGISTER_WITH_EMAIL,
  SCREENS_SIGNIN_WITH_EMAIL,
  SCREENS_SIGNIN_WITH_EMAIL2,
  SCREENS_VIEW_PDF,
} from "app/constants/Screens"
import { AppStackParamList } from "app/navigators/AppNavigator"
import Screens from "app/screens"
import React from "react"

const Stack = createNativeStackNavigator<AppStackParamList>()

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

const UnauthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={SCREENS_SIGNIN_WITH_EMAIL}>
      <Stack.Screen name={SCREENS_ONBOARDING} component={Screens.WelcomeScreen} />
      <Stack.Screen name={SCREENS_LANG_SELECTION} component={Screens.LanguageSelection} />
      <Stack.Screen name={OTP_VERIFY} component={Screens.OtpVerify}  />
      <Stack.Screen name={SCREENS_ABOUT} component={Screens.About} />
      <Stack.Screen
        name={SCREENS_REGISTER_WITH_EMAIL}
        component={Screens.RegisterWithEmail}
        options={unauthenticatedHeaderOptions}
      />
      <Stack.Screen
        name={SCREENS_SIGNIN_WITH_EMAIL}
        component={Screens.SignInWithEmail}
        options={unauthenticatedHeaderOptions}
      />
      <Stack.Screen
        name={SCREENS_SIGNIN_WITH_EMAIL2}
        component={Screens.SignInWithEmail2}
        options={unauthenticatedHeaderOptions}
      />
      <Stack.Screen
        name={SCREENS_COMPLETE_PROFILE}
        component={Screens.CompleteProfile}
        options={unauthenticatedHeaderOptions}
      />
      <Stack.Screen
        name={SCREENS_FORGOT_PASSWORD}
        component={Screens.ForgotPassword}
        options={unauthenticatedHeaderOptions}
      />
      <Stack.Screen name={SCREENS_VIEW_PDF} component={Screens.ViewPdf} />
      <Stack.Screen name={SCREEN_UPDATE_PASS} component={Screens.UpdatePassword} />
    </Stack.Navigator>
  )
}

export default UnauthenticatedStack
