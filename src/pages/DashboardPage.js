import React from 'react';
import { View, StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// This page represents the main dashboard of the application
function DashboardPage() {
  // For now, we'll just render the HomeScreen
  // In a full implementation, this would compose multiple dashboard components
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

export default DashboardPage;