import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// Import screens
import AuthenticatedStack from './AuthenticatedStack';
import DoctorProfileModal from '../screens/DoctorProfileModal';
import AddSymptomModal from '../screens/AddSymptomModal';

const Stack = createStackNavigator();
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

function ModalScreen({ navigation, route }) {
  const { component: Component, ...props } = route.params;
  return (
    <View style={styles.modalContainer}>
      <Component {...props} />
    </View>
  );
}

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

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ModalStackScreen;