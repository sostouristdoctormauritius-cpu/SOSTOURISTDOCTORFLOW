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

const ConsultationEligibleDoctorsScreen = ({ consultationType }) => {
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
      style={styles.screenContentContainerStyle}
    >
      {
        isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color="blue" />
          </View>
        )
          :
          (
          <View style={styles.flexContainer}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>{'<'}</Text>
              </TouchableOpacity>
              <Text
                style={styles.titleStyle}
              >
                {`Eligible Doctors for ${consultationType}`}
              </Text>
              <View />
            </View>

            <View>
              <Text
                style={styles.descriptionStyle}
              >
                Select a doctor from the list below.
              </Text>

              <View style={styles.doctorsContainerStyle}>
                <FlatList
                  data={DUMMY_DOCTORS}
                  renderItem={renderDoctorItem}
                  keyExtractor={item => item.id}
                  style={styles.doctorList}
                />
              </View>
            </View>
          </View>
        )}
    </View>
  )
}

export default ConsultationEligibleDoctorsScreen

const styles = StyleSheet.create({
  screenContentContainerStyle: {
    flex: 1,
    backgroundColor: "white",
  },
  loadingContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  flexContainer: {
    flex: 1, 
    width: "100%"
  },
  headerContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "100%",
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptionStyle: {
    textAlign: "center",
    marginVertical: 10,
  },
  doctorsContainerStyle: {
    flex: 1,
    width: '100%',
  },
  doctorList: {
    flex: 1,
  },
  doctorItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  doctorImagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
    marginRight: 10,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  doctorSpecialisation: {
    fontSize: 14,
    color: '#666',
  },
  arrow: {
    fontSize: 20,
    color: '#999',
  },
})