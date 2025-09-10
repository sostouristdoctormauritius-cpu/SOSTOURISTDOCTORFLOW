import React from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'

const HomeVisitScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {/* Placeholder for MapView */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Map View Placeholder</Text>
        {/* Placeholder for Marker */}
        <View style={styles.markerPlaceholder}>
          <Text style={styles.markerText}>Marker</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        {/* Placeholder for GooglePlacesAutocomplete */}
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Search for address..."
            style={styles.textInput}
          />
        </View>
        {/* Placeholder for ActivityIndicator */}
        <View style={styles.activityIndicatorPlaceholder}>
          <Text>Loading...</Text>
        </View>
      </View>

      {/* Placeholder for ModalChooseLocation */}
      <View style={styles.modalChooseLocationPlaceholder}>
        <Text style={styles.modalText}>Choose Location Modal</Text>
        <Text>Name: [Name Placeholder]</Text>
        <Text>Address: [Address Placeholder]</Text>
        <TouchableOpacity style={styles.chooseLocationButton} onPress={() => navigation.navigate('ConsultationSymptomSelection')}>
          <Text style={styles.chooseLocationButtonText}>Choose Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeVisitScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  mapText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#666",
  },
  markerPlaceholder: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  markerText: {
    color: "white",
    fontWeight: "bold",
  },
  searchContainer: {
    position: "absolute",
    top: 25,
    width: "100%",
    alignItems: "center",
  },
  textInputContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 5,
    width: "90%",
    alignSelf: "center",
  },
  textInput: {
    height: 64,
    color: "#5d5d5d",
    fontSize: 16,
    borderRadius: 32,
    paddingLeft: 18,
  },
  activityIndicatorPlaceholder: {
    marginTop: 10,
  },
  modalChooseLocationPlaceholder: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chooseLocationButton: {
    backgroundColor: "lightgreen",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  chooseLocationButtonText: {
    color: "white",
    fontWeight: "bold",
  },
})
