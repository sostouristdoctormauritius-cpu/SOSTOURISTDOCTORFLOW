import React from "react"
import { ActivityIndicator, StyleSheet, TouchableOpacity, View, Text, FlatList, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'

const DUMMY_DOCTORS = [
  {
    id: "1",
    name: "Dr. Alice Smith",
    specialisation: "General Practitioner",
    profilePicture: "", // Placeholder for image URL
    rating: 4.8,
    experience: "10 years",
  },
  {
    id: "2",
    name: "Dr. Bob Johnson",
    specialisation: "Pediatrician",
    profilePicture: "",
    rating: 4.9,
    experience: "8 years",
  },
  {
    id: "3",
    name: "Dr. Carol White",
    specialisation: "Dermatologist",
    profilePicture: "",
    rating: 4.7,
    experience: "12 years",
  },
  {
    id: "4",
    name: "Dr. David Brown",
    specialisation: "Cardiologist",
    profilePicture: "",
    rating: 4.9,
    experience: "15 years",
  },
  {
    id: "5",
    name: "Dr. Emily Davis",
    specialisation: "Neurologist",
    profilePicture: "",
    rating: 4.8,
    experience: "11 years",
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
          <Image 
            source={require('../../assets/images/profile.png')} 
            style={styles.doctorImage} 
          />
        )}
        <View style={styles.doctorDetails}>
          <Text style={styles.doctorName}>{item.name}</Text>
          <Text style={styles.doctorSpecialisation}>{item.specialisation}</Text>
          <View style={styles.doctorStats}>
            <Text style={styles.rating}>★ {item.rating}</Text>
            <Text style={styles.experience}>{item.experience} exp</Text>
          </View>
        </View>
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {
        isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color="#F71E27" />
          </View>
        ) : (
          <View style={styles.flexContainer}>
            <View style={styles.header}>
              <TouchableOpacity 
                style={styles.backButton} 
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.backButtonText}>{"<"}</Text>
              </TouchableOpacity>
              <Text style={styles.title}>
                {`Eligible Doctors`}
              </Text>
              <View style={styles.placeholder} />
            </View>

            <View style={styles.content}>
              <Text style={styles.consultationType}>
                {consultationType || "Online Consultation"}
              </Text>
              
              <Text style={styles.description}>
                Select a doctor from the list below.
              </Text>

              <View style={styles.doctorsContainer}>
                <FlatList
                  data={DUMMY_DOCTORS}
                  renderItem={renderDoctorItem}
                  keyExtractor={item => item.id}
                  style={styles.doctorList}
                  showsVerticalScrollIndicator={false}
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  flexContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row", 
    justifyContent: "space-between", 
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#333',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  consultationType: {
    fontSize: 16,
    color: '#F71E27',
    fontWeight: '600',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  doctorsContainer: {
    flex: 1,
  },
  doctorList: {
    flex: 1,
  },
  doctorItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fafafa',
    borderRadius: 12,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  doctorSpecialisation: {
    fontSize: 15,
    color: '#666',
    marginBottom: 5,
  },
  doctorStats: {
    flexDirection: 'row',
  },
  rating: {
    fontSize: 14,
    color: '#F71E27',
    fontWeight: '600',
    marginRight: 15,
  },
  experience: {
    fontSize: 14,
    color: '#666',
  },
  arrow: {
    fontSize: 24,
    color: '#999',
    fontWeight: 'bold',
  },
})