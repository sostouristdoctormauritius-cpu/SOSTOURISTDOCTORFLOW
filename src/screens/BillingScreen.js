import React from "react"
import { SectionList, StyleSheet, View, Text } from "react-native"

const DATA = [
  {
    title: "Today",
    date: "December 22, 2023",
    data: ["Voice", "Home", "Voice"],
  },
  {
    title: "Yesterday",
    date: "Septemberr 22, 2023",
    data: ["Voice", "Home", "Voice"],
  },
]

const BillingScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => (
          <View style={styles.billingEntry}>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title, date } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <Text style={styles.sectionDate}>, {date}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default BillingScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7", // Placeholder for Colors.greyBG
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  billingEntry: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "white",
    marginBottom: 5,
  },
  sectionHeader: {
    marginBottom: 12,
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
