import React from "react"
import { FlatList, StyleSheet, View, Text } from "react-native"

const DUMMY_CONTACTS = [
  {
    name: "Police",
    phone: "911",
    iconUri: "",
  },
  {
    name: "Ambulance",
    phone: "999",
    iconUri: "",
  },
  {
    name: "Fire Department",
    phone: "112",
    iconUri: "",
  },
]

const EmergencyCallScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY_CONTACTS}
        renderItem={({ item }) => {
          return (
            <View style={styles.contactCard}>
              <Text style={styles.contactName}>{item.name}</Text>
              <Text style={styles.contactPhone}>{item.phone}</Text>
            </View>
          )
        }}
        style={styles.list}
      />
    </View>
  )
}

export default EmergencyCallScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7", // Placeholder for Colors.greyBG
    flex: 1,
    paddingTop: 24,
  },
  list: {
    backgroundColor: "#F7F7F7", // Placeholder for Colors.greyBG
    margin: 16,
  },
  contactCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contactPhone: {
    fontSize: 16,
    color: "#666",
  },
})
