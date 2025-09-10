import React, { useState } from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Button } from '../components'

const HomeVisitScreen = () => {
  const navigation = useNavigation()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState(null)
  
  // Mock locations data
  const mockLocations = [
    { id: 1, name: "Home", address: "123 Main Street, New York, NY 10001" },
    { id: 2, name: "Office", address: "456 Business Ave, New York, NY 10002" },
    { id: 3, name: "Parent's House", address: "789 Family Road, New York, NY 10003" },
  ]

  return (
    <View style={styles.container}>
      {/* Map Placeholder */}
      <View style={styles.mapContainer}>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>Map View</Text>
          <View style={styles.marker}>
            <Text style={styles.markerIcon}>📍</Text>
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home Visit</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Search Container */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Image 
            source={require('../assets/images/profile.png')} 
            style={styles.searchIcon} 
          />
          <TextInput
            placeholder="Search for address..."
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery ? (
            <TouchableOpacity 
              style={styles.clearButton}
              onPress={() => setSearchQuery('')}
            >
              <Text style={styles.clearButtonText}>×</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      {/* Recent Locations */}
      <View style={styles.locationsContainer}>
        <Text style={styles.sectionTitle}>Recent Locations</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.locationsScrollView}
          contentContainerStyle={styles.locationsContent}
        >
          {mockLocations.map(location => (
            <TouchableOpacity 
              key={location.id}
              style={[
                styles.locationCard, 
                selectedLocation?.id === location.id && styles.selectedLocationCard
              ]}
              onPress={() => setSelectedLocation(location)}
            >
              <Text style={styles.locationName}>{location.name}</Text>
              <Text style={styles.locationAddress} numberOfLines={2}>{location.address}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Selected Location Modal */}
      {selectedLocation && (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.swipeIndicator} />
            <Text style={styles.modalTitle}>Confirm Location</Text>
            <View style={styles.locationDetails}>
              <Text style={styles.locationDetailName}>{selectedLocation.name}</Text>
              <Text style={styles.locationDetailAddress}>{selectedLocation.address}</Text>
            </View>
            
            <View style={styles.modalActions}>
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => setSelectedLocation(null)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <Button 
                title="Choose Location" 
                onPress={() => navigation.navigate('ConsultationSymptomSelection')}
                style={styles.chooseLocationButton}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  )
}

export default HomeVisitScreen

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
    backgroundColor: 'rgba(255,255,255,0.9)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
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
  mapContainer: {
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
  marker: {
    position: "absolute",
    top: "40%",
    left: "50%",
    marginLeft: -25,
    marginTop: -50,
  },
  markerIcon: {
    fontSize: 50,
  },
  searchContainer: {
    position: "absolute",
    top: 80,
    width: "100%",
    paddingHorizontal: 20,
    zIndex: 5,
  },
  searchInputContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#888',
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#333",
  },
  clearButton: {
    padding: 5,
  },
  clearButtonText: {
    fontSize: 24,
    color: '#888',
  },
  locationsContainer: {
    position: "absolute",
    top: 160,
    width: "100%",
    paddingHorizontal: 20,
    zIndex: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  locationsScrollView: {
    flexGrow: 0,
  },
  locationsContent: {
    paddingRight: 10,
  },
  locationCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    marginRight: 15,
    width: 200,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  selectedLocationCard: {
    borderWidth: 2,
    borderColor: "#F71E27",
  },
  locationName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  locationAddress: {
    fontSize: 14,
    color: "#666",
    lineHeight: 18,
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
    zIndex: 20,
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingTop: 10,
  },
  swipeIndicator: {
    width: 40,
    height: 4,
    backgroundColor: "#ccc",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  locationDetails: {
    backgroundColor: "#fafafa",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  locationDetailName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  locationDetailAddress: {
    fontSize: 16,
    color: "#666",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginRight: 10,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
  },
  chooseLocationButton: {
    flex: 2,
  },
})
