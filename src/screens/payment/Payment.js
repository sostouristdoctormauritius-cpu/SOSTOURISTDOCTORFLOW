import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components';

const PaymentScreen = () => {
  const navigation = useNavigation();

  const orderDetails = {
    doctor: 'Dr. Alice Smith',
    service: 'Video Consultation',
    date: 'June 15, 2023',
    time: '10:30 AM',
    amount: 50.00,
  };

  const paymentMethods = [
    { id: '1', type: 'Credit Card', last4: '4242', icon: require('../../assets/images/google.png') },
    { id: '2', type: 'PayPal', email: 'user@example.com', icon: require('../../assets/images/fb.png') },
  ];

  return (
    <View style={styles.container}>
      <Header 
        title="Payment" 
        onBackPress={() => navigation.goBack()} 
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Order Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Doctor</Text>
            <Text style={styles.summaryValue}>{orderDetails.doctor}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Service</Text>
            <Text style={styles.summaryValue}>{orderDetails.service}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Date & Time</Text>
            <Text style={styles.summaryValue}>{orderDetails.date} at {orderDetails.time}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalAmount}>${orderDetails.amount.toFixed(2)}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Select Payment Method</Text>
        {paymentMethods.map(method => (
          <TouchableOpacity key={method.id} style={styles.methodCard}>
            <Image source={method.icon} style={styles.methodIcon} />
            <View style={styles.methodInfo}>
              <Text style={styles.methodType}>{method.type}</Text>
              {method.last4 && <Text style={styles.methodDetail}>**** **** **** {method.last4}</Text>}
              {method.email && <Text style={styles.methodDetail}>{method.email}</Text>}
            </View>
            <Text style={styles.selectArrow}>›</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.addMethodButton}>
          <Text style={styles.addMethodButtonText}>+ Add New Method</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('OrderConfirmation')}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: { fontSize: 24, color: '#333' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  contentContainer: { padding: 20 },
  summaryContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  summaryTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  summaryLabel: { fontSize: 16, color: '#666' },
  summaryValue: { fontSize: 16, color: '#333', fontWeight: '500' },
  totalRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 15, 
    paddingTop: 15, 
    borderTopWidth: 1, 
    borderTopColor: '#E0E0E0' 
  },
  totalLabel: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  totalAmount: { fontSize: 18, fontWeight: 'bold', color: '#F71E27' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  methodCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  methodIcon: { width: 40, height: 40, marginRight: 15 },
  methodInfo: { flex: 1 },
  methodType: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  methodDetail: { fontSize: 14, color: '#666', marginTop: 4 },
  selectArrow: { fontSize: 24, color: '#CCC' },
  addMethodButton: { 
    backgroundColor: '#E8F5E9', 
    borderRadius: 12, 
    padding: 15, 
    alignItems: 'center', 
    marginTop: 10 
  },
  addMethodButtonText: { fontSize: 16, color: '#388E3C', fontWeight: 'bold' },
  footer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  payButton: {
    backgroundColor: '#F71E27',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  payButtonText: { fontSize: 18, color: '#FFFFFF', fontWeight: 'bold' },
});

export default PaymentScreen;
