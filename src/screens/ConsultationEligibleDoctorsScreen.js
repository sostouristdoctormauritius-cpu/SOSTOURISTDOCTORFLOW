import React from "react"
import { ActivityIndicator, StyleSheet, TouchableOpacity, View, Text, FlatList, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'

const DUMMY_DOCTORS = [
  {
    id: "1",
    name: "Dr. Alice Smith",
    specialisation: "General Practitioner",
    profilePicture: "", // Placeholder for image URL
  },
  {
    id: "2",
    name: "Dr. Bob Johnson",
    specialisation: "Pediatrician",
    profilePicture: "",
  },
  {
    id: "3",
    name: "Dr. Carol White",
    specialisation: "Dermatologist",
    profilePicture: "",
  },
]

const ConsultationEligibleDoctorsScreen = () => {
  const isLoading = false // Static for visual recreation
  const navigation = useNavigation()

  const openDoctorProfile = (doctor) => {
    navigation.navigate('DoctorProfileModal');
  };

  const renderDoctorItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.doctorItem} 
      onPress={() => openDoctorProfile(item)}
    >
      <View style={styles.doctorInfo}>
        {item.profilePicture ? (
          <Image source={{ uri: item.profilePicture }} style={styles.doctorImage} />
        ) : (
          <View style={styles.doctorImagePlaceholder} />
        )}
        <View>
          <Text style={styles.doctorName}>{item.name}</Text>
          <Text style={styles.doctorSpecialisation}>{item.specialisation}</Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={styles.$screenContentContainerStyle}
    >
      {
        isLoading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={'large'} color="blue" />
          </View>
        )
          :
          <>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "100%" }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>{'<'}</Text>
              </TouchableOpacity>
              <Text
                style={styles.$titleStyle}
              >
                {consultationType === "Chat" && "Eligible Doctors for Chat"}
                {consultationType === "Video" && "Eligible Doctors for Video"}
                {consultationType === "Home" && "Eligible Doctors for Home Visit"}
              </Text>
              <View />
            </View>

            <Text
              style={styles.$descriptionStyle}
            >
              Select a doctor from the list below.
            </Text>

            <View style={styles.$doctorsContainerStyle}>
            <FlatList
              data={DUMMY_DOCTORS}
              renderItem={renderDoctorItem}
              keyExtractor={item => item.id}
              style={styles.doctorList}
            />
          </>
      }
    </View>
  )
}

export default ConsultationEligibleDoctorsScreen

const styles = StyleSheet.create({
  $backButtonStyle: {
    alignSelf: "flex-start",
  },
  $buttonStyle: {
    width: "100%",
    backgroundColor: "lightgreen", // Placeholder color
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  $descriptionStyle: {
    marginTop: 26.7,
    textAlign: "center",
  },
  $doctorsContainerStyle: {
    flex: 1,
    paddingTop: 16, // Placeholder for spacing.md
    width: "100%",
  },
  $doctorsRowSeparator: {
    backgroundColor: "#CECECE", // Placeholder for Colors.rowSeparator
    height: 0.5,
    width: "100%",
  },
  $screenContentContainerStyle: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 16, // Placeholder for spacing.lg
    paddingVertical: 16, // Placeholder for spacing.lg
    backgroundColor: "white",
  },
  $titleStyle: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  eligibleDoctorRow: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    marginBottom: 5,
    borderRadius: 5,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  doctorSpecialisation: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  arrow: {
    fontSize: 20,
    color: '#ccc',
  },
  privacyWarningModal: {
    position: "absolute",
    top: "20%",
    left: "10%",
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
})
