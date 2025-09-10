import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";

export default function DoctorProfileModalScreen({ visible, onClose, doctorName, specialty, experience, rating, fee }) {
  const profilePicture = "" // Placeholder for image URL
  const name = "Dr. John Doe" // Static for visual recreation
  const specialisation = "General Practitioner" // Static for visual recreation
  const doctorRating = 4.5 // Static for visual recreation
  const ratingCount = 120 // Static for visual recreation
  const address = "123 Main St, Anytown, USA" // Static for visual recreation
  const workingHours = "Mon-Fri, 9 AM - 5 PM" // Static for visual recreation
  const bio = "Dr. John Doe is a highly experienced general practitioner with a passion for patient care." // Static for visual recreation
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.title}>Doctor Profile</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.profileContainer}>
            <View style={styles.avatarContainer}>
              {!profilePicture && <Image style={styles.avatar} source={require("../../assets/images/profile.png")} />}
              <Text style={styles.doctorName}>{doctorName || name}</Text>
              <Text style={styles.specialty}>{specialty || specialisation}</Text>
            </View>
            
            <View style={styles.ratingContainer}>
              <Text>Rating: {doctorRating} ({ratingCount} reviews)</Text>
            </View>
            <View style={styles.addressContainer}>
              <Text style={styles.blockSectionTitle}>Address</Text>
              <Text style={styles.addressLabel}>{address}</Text>
            </View>
            {Boolean(workingHours) && (
              <View style={styles.workingHoursContainer}>
                <Text style={styles.subSectionTitle}>Working Hours</Text>
                <Text
                  style={styles.workingHoursLabel}
                >
                  {workingHours}
                </Text>
              </View>
            )}
            <Text style={styles.aboutTitle}>About</Text>
            {Boolean(bio) && (
              <View style={styles.bioContainer}>
                <Text>{bio}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    maxHeight: "80%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  closeButton: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileContainer: {
    width: "100%",
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  specialty: {
    fontSize: 16,
    color: "#666",
  },
  ratingContainer: {
    marginBottom: 15,
  },
  addressContainer: {
    marginBottom: 15,
  },
  blockSectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  addressLabel: {
    fontSize: 14,
  },
  workingHoursContainer: {
    marginBottom: 15,
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  workingHoursLabel: {
    fontSize: 14,
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bioContainer: {
    marginBottom: 15,
  },
});