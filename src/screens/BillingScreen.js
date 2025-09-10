import React from "react";
import { SectionList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';

const DUMMY_BILLING_DATA = [
  {
    title: "June 2023",
    data: [
      { id: "1", doctor: "Dr. Alice Smith", service: "Video Consultation", date: "Jun 15, 2023", amount: "$50.00", status: "Paid" },
      { id: "2", doctor: "Dr. Bob Johnson", service: "Chat Consultation", date: "Jun 22, 2023", amount: "$30.00", status: "Paid" },
    ],
  },
  {
    title: "May 2023",
    data: [
      { id: "3", doctor: "Dr. Carol White", service: "Home Visit", date: "May 10, 2023", amount: "$120.00", status: "Paid" },
    ],
  },
];

const BillingScreen = () => {
  const navigation = useNavigation();

  const renderBillingItem = ({ item }) => (
    <View style={styles.billingCard}>
      <View style={styles.cardLeft}>
        <Text style={styles.doctorName}>{item.doctor}</Text>
        <Text style={styles.serviceType}>{item.service}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.amount}>{item.amount}</Text>
        <View style={[styles.statusBadge, item.status === 'Paid' ? styles.paidBadge : styles.dueBadge]}>
          <Text style={[styles.statusText, item.status === 'Paid' ? styles.paidText : styles.dueText]}>{item.status}</Text>
        </View>
      </View>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Billing" 
        onBackPress={() => navigation.goBack()}
        onRightPress={() => navigation.navigate('PaymentMethods')}
      />

      <SectionList
        sections={DUMMY_BILLING_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderBillingItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Total Billed</Text>
            <Text style={styles.summaryAmount}>$200.00</Text>
            <Text style={styles.summaryDateRange}>For June 2023</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default BillingScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },
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
  headerTitle: { fontSize: 20, fontWeight: "bold", color: '#333' },
  paymentMethodsButton: { fontSize: 24 },
  summaryContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    margin: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryTitle: { fontSize: 16, color: '#666' },
  summaryAmount: { fontSize: 36, fontWeight: 'bold', color: '#F71E27', marginVertical: 5 },
  summaryDateRange: { fontSize: 14, color: '#999' },
  listContent: { paddingHorizontal: 20 },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#333", 
    marginTop: 20, 
    marginBottom: 10 
  },
  billingCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  cardLeft: { flex: 1 },
  doctorName: { fontSize: 16, fontWeight: "bold", color: "#333" },
  serviceType: { fontSize: 14, color: "#666", marginVertical: 4 },
  dateText: { fontSize: 12, color: "#999" },
  cardRight: { alignItems: 'flex-end' },
  amount: { fontSize: 18, fontWeight: "bold", color: "#333", marginBottom: 5 },
  statusBadge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 15 },
  statusText: { fontSize: 12, fontWeight: "bold" },
  paidBadge: { backgroundColor: '#E8F5E9' },
  paidText: { color: '#388E3C' },
  dueBadge: { backgroundColor: '#FFEBEE' },
  dueText: { color: '#D32F2F' },
});
