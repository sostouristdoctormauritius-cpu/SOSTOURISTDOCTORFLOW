import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    height: "100%", // Placeholder for Dimensions.get("window").height
    width: "100%", // Placeholder for Dimensions.get("window").width
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
  },
  backButton: {
    fontSize: 20,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
})

const ViewPdf = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms and Conditions</Text>
      </View>
      <View style={styles.pdf}>
        <Text>PDF Viewer Placeholder</Text>
        <Text>Terms and Conditions PDF would be displayed here.</Text>
      </View>
    </View>
  )
}

export default ViewPdf
