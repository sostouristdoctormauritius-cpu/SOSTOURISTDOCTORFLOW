import React from 'react';
import { View, StyleSheet } from 'react-native';

import ConsultationSymptomSelectionScreen from '../screens/consultation/ConsultationSymptomSelectionScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// This page represents the complete consultation workflow
function ConsultationFlowPage() {
  // For now, we'll just render the first screen in the consultation flow
  // In a full implementation, this would manage the entire consultation workflow
  return (
    <View style={styles.container}>
      <ConsultationSymptomSelectionScreen />
    </View>
  );
}

export default ConsultationFlowPage;