import React from 'react';
import { View, StyleSheet } from 'react-native';

import SignInWithEmail from '../screens/auth/SignInWithEmail';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// This page composes multiple authentication screens into a single flow
function LoginPage() {
  // For now, we'll just render the SignInWithEmail screen
  // In a full implementation, this would manage the entire login flow
  return (
    <View style={styles.container}>
      <SignInWithEmail />
    </View>
  );
}

export default LoginPage;