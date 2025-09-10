import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LanguageSelection from '../screens/LanguageSelection';
import SignInWithEmail from '../screens/SignInWithEmail';
import SignInWithEmail2 from '../screens/SignInWithEmail2';
import RegisterWithEmail from '../screens/RegisterWithEmail';
import OtpVerify from '../screens/OtpVerify';
import CompleteProfile from '../screens/Unauthenticated/CompleteProfile';
import About from '../screens/About';
import ForgotPassword from '../screens/ForgotPassword';
import SplashAnimation from '../screens/SplashAnimation';
import UpdatePassword from '../screens/UpdatePassword';
import ViewPdf from '../screens/ViewPdf';

import AuthenticatedStack from './AuthenticatedStack';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LanguageSelection" component={LanguageSelection} options={{ headerShown: false }} />
        <Stack.Screen name="SignInWithEmail" component={SignInWithEmail} options={{ headerShown: false }} />
        <Stack.Screen name="SignInWithEmail2" component={SignInWithEmail2} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterWithEmail" component={RegisterWithEmail} options={{ headerShown: false }} />
        <Stack.Screen name="OtpVerify" component={OtpVerify} options={{ headerShown: false }} />
        <Stack.Screen name="CompleteProfile" component={CompleteProfile} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="SplashAnimation" component={SplashAnimation} options={{ headerShown: false }} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword} options={{ headerShown: false }} />
        <Stack.Screen name="ViewPdf" component={ViewPdf} options={{ headerShown: false }} />
        <Stack.Screen name="AuthenticatedStack" component={AuthenticatedStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



