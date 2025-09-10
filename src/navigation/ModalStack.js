import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import AuthenticatedStack from './AuthenticatedStack';
import DoctorProfileModal from '../screens/DoctorProfileModal';
import AddSymptomModal from '../screens/AddSymptomModal';

const ModalStack = createStackNavigator();

// Modal screen options
const modalScreenOptions = {
  headerShown: true,
  headerTitle: '',
  headerTransparent: true,
  headerBackTitleVisible: false,
  headerLeft: () => null,
};

// Modal presentation options
const modalOptions = {
  presentation: 'modal',
  headerShown: false,
  cardStyle: { backgroundColor: 'transparent' },
};



function ModalStackScreen() {
  return (
    <ModalStack.Navigator screenOptions={modalOptions}>
      <ModalStack.Screen name="Main" component={AuthenticatedStack} options={{ headerShown: false }} />
      <ModalStack.Screen 
        name="DoctorProfileModal" 
        component={DoctorProfileModal} 
        options={modalScreenOptions}
      />
      <ModalStack.Screen 
        name="AddSymptomModal" 
        component={AddSymptomModal} 
        options={modalScreenOptions}
      />
    </ModalStack.Navigator>
  );
}



export default ModalStackScreen;