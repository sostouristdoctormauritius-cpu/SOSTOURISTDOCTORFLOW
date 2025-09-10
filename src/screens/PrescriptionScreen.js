import React from 'react';
import { SectionList, StyleSheet, Text, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';

const DUMMY_PRESCRIPTIONS = [
  {
    id: "1",
    title: "Today",
    date: "December 22, 2023",
    data: [
      { id: "1a", name: "Amoxicillin", dosage: "250mg", instructions: "Take twice daily with food", duration: "7 days" },
      { id: "1b", name: "Ibuprofen", dosage: "200mg", instructions: "Take as needed for pain", duration: "3 days" },
    ],
  },
  {
    id: "2",
    title: "Yesterday",
    date: "December 21, 2023",
    data: [
      { id: "2a", name: "Paracetamol", dosage: "500mg", instructions: "Take every 4 hours", duration: "5 days" },
    ],
  },
  {
    id: "3",
    title: "Older",
    date: "",
    data: [
      { id: "3a", name: "Vitamin D", dosage: "1000IU", instructions: "Take once daily with breakfast", duration: "30 days" },
      { id: "3b", name: "Calcium", dosage: "500mg", instructions: "Take once daily", duration: "30 days" },
    ],
  },
]

const PrescriptionScreen = () => {
  const navigation = useNavigation()
  const isLoading = false // Static for visual recreation

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#F71E27" />
        </View>
      </View>
    )
  }

  const renderPrescriptionItem = ({ item }) => (
    <View style={styles.prescriptionCard}>
      <View style={styles.medicationHeader}>
        <View style={styles.medicationIcon}>
          <Text style={styles.medicationIconText}>℞</Text>
        </View>
        <View style={styles.medicationInfo}>
          <Text style={styles.medicationName}>{item.name}</Text>
          <Text style={styles.medicationDosage}>{item.dosage}</Text>
        </View>
      </View>
      
      <View style={styles.medicationDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Instructions:</Text>
          <Text style={styles.detailValue}>{item.instructions}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Duration:</Text>
          <Text style={styles.detailValue}>{item.duration}</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.downloadButton}>
        <Image 
          source={require('../assets/images/pdfIcon.png')} 
          style={styles.downloadIcon} 
        />
        <Text style={styles.downloadButtonText}>Download Prescription</Text>
      </TouchableOpacity>
    </View>
  )

  const renderSectionHeader = ({ section: { title, date } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {date ? <Text style={styles.sectionDate}>, {date}</Text> : null}
    </View>
  )

  return (
    <View style={styles.container}>
      <Header 
        title="My Prescriptions" 
        onBackPress={() => navigation.goBack()}
      />
      
      <SectionList
        sections={DUMMY_PRESCRIPTIONS}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={renderPrescriptionItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
      />
      
      <View style={styles.infoBanner}>
        <Text style={styles.infoIcon}>ℹ️</Text>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>Important Notice</Text>
          <Text style={styles.infoText}>
            Always follow your doctor's instructions when taking medications. 
            If you experience any side effects, contact your doctor immediately.
          </Text>
        </View>
      </View>
    </View>
  )
}

export default PrescriptionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#333',
  },
  placeholder: {
    width: 40,
  },
  listContent: {
    padding: 20,
    paddingTop: 10,
  },
  loading: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  sectionHeader: {
    marginBottom: 16,
    flexDirection: "row",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 8,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  sectionDate: {
    fontSize: 16,
    color: "#666",
  },
  prescriptionCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  medicationHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  medicationIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  medicationIconText: {
    fontSize: 24,
    color: "#1976D2",
  },
  medicationInfo: {
    flex: 1,
  },
  medicationName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 3,
  },
  medicationDosage: {
    fontSize: 15,
    color: "#F71E27",
    fontWeight: "600",
  },
  medicationDetails: {
    backgroundColor: "#fafafa",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  detailRowLast: {
    marginBottom: 0,
  },
  detailLabel: {
    fontSize: 14,
    color: "#666",
    fontWeight: "600",
    width: 100,
  },
  detailValue: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  downloadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 12,
  },
  downloadIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "#666",
  },
  downloadButtonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  infoBanner: {
    flexDirection: "row",
    backgroundColor: "#FFF8E1",
    padding: 15,
    margin: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFECB3",
  },
  infoIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF8F00",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: "#999",
    lineHeight: 18,
  },
})
