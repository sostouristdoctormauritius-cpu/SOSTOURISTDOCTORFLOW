import React from "react"
import { FlatList, StyleSheet, View, Text } from "react-native"

const data = [
  {
    name: "Book a dental check up",
    discount: "15",
    heading: "Dental Check Up",
    description: "This is a description for dental check up.",
  },
  {
    name: "Book a dental check up",
    discount: "15",
    heading: "Dental Check Up",
    description: "This is a description for dental check up.",
  },
  {
    name: "Book a dental check up",
    discount: "15",
    heading: "Dental Check Up",
    description: "This is a description for dental check up.",
  },
  {
    name: "Book a dental check up",
    discount: "15",
    heading: "Dental Check Up",
    description: "This is a description for dental check up.",
  },
]

const DiscountedOffersScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <>
            <View style={styles.separator} />
            <View style={styles.discountCard}>
              <Text style={styles.discountHeading}>{item.heading}</Text>
              <Text style={styles.discountDescription}>{item.description}</Text>
              <Text style={styles.discountText}>{item.discount}% Off</Text>
            </View>
          </>
        )}
        style={styles.list}
      />
    </View>
  )
}

export default DiscountedOffersScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7", // Placeholder for Colors.greyBG
    flex: 1,
    paddingHorizontal: 16,
  },
  list: {
    backgroundColor: "#F7F7F7", // Placeholder for Colors.greyBG
  },
  separator: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 10,
  },
  discountCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  discountHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  discountDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  discountText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
})
