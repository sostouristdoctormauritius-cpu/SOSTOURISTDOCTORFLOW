import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderConfirmationScreen = ({ route }) => {
  const navigation = useNavigation();
  const { date, time } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../assets/images/ePrescription.png')} style={styles.successIcon} />
        <Text style={styles.title}>Payment Successful!</Text>
        <Text style={styles.subtitle}>Your appointment has been booked.</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Appointment Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date:</Text>
            <Text style={styles.detailValue}>{date || 'N/A'}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Time:</Text>
            <Text style={styles.detailValue}>{time || 'N/A'}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.popToTop()}>
          <Text style={styles.homeButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9', justifyContent: 'center', alignItems: 'center' },
  content: {
    alignItems: 'center',
    padding: 20,
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  successIcon: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 30, textAlign: 'center' },
  detailsContainer: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 20,
  },
  detailsTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15, textAlign: 'center' },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  detailLabel: { fontSize: 16, color: '#666' },
  detailValue: { fontSize: 16, color: '#333', fontWeight: '500' },
  homeButton: {
    backgroundColor: '#F71E27',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 30,
  },
  homeButtonText: { fontSize: 18, color: '#FFFFFF', fontWeight: 'bold' },
});

export default OrderConfirmationScreen;
