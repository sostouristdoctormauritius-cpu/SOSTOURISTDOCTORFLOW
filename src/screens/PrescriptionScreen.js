import React from "react"
import { ActivityIndicator, SectionList, StyleSheet, View, Text } from "react-native"

const DUMMY_PRESCRIPTIONS = [
  {
    id: "1",
    title: "Today",
    date: "December 22, 2023",
    data: [
      { id: "1a", name: "Amoxicillin", dosage: "250mg", instructions: "Take twice daily" },
      { id: "1b", name: "Ibuprofen", dosage: "200mg", instructions: "Take as needed" },
    ],
  },
  {
    id: "2",
    title: "Yesterday",
    date: "December 21, 2023",
    data: [
      { id: "2a", name: "Paracetamol", dosage: "500mg", instructions: "Take every 4 hours" },
    ],
  },
  {
    id: "3",
    title: "Older",
    date: "",
    data: [
      { id: "3a", name: "Vitamin D", dosage: "1000IU", instructions: "Take once daily" },
      { id: "3b", name: "Calcium", dosage: "500mg", instructions: "Take once daily" },
    ],
  },
]

const PrescriptionScreen = () => {
  const isLoading = false // Static for visual recreation

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#F71E27" /> {/* Placeholder for Colors.drawerCompleteProfile */}
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SectionList
        sections={DUMMY_PRESCRIPTIONS}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({ item }) => (
          <View style={styles.prescriptionCard}>
            <Text style={styles.prescriptionName}>{item.name}</Text>
            <Text style={styles.prescriptionDetails}>{item.dosage} - {item.instructions}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title, date } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {date ? <Text style={styles.sectionDate}>, {date}</Text> : null}
          </View>
        )}
      />
    </View>
  )
}

export default PrescriptionScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7", // Placeholder for Colors.greyBG
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  loading: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  prescriptionCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  prescriptionName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  prescriptionDetails: {
    fontSize: 14,
    color: "#666",
  },
  sectionHeader: {
    marginBottom: 16,
    flexDirection: "row",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionDate: {
    fontSize: 16,
  },
})
