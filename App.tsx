import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/SimplifiedAppNavigator';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <AppNavigator />
    </>
  );
}

export default App;