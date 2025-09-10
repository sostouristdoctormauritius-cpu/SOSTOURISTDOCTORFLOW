import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Greeting = ({ name }) => (
  <View style={styles.greetingContainer}>
    <Text style={styles.greetingText}>Good morning,</Text>
    <Text style={styles.userName}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  greetingContainer: {
    padding: 20,
  },
  greetingText: {
    fontSize: 18,
    color: '#666666',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default Greeting;