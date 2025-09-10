import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";

import { useNavigation } from '@react-navigation/native'

export default function DoctorProfileModalScreen({ visible, onClose, doctorName, specialty, experience, rating, fee }) {
  const profilePicture = "" // Placeholder for image URL
  const name = "Dr. John Doe" // Static for visual recreation
  const specialisation = "General Practitioner" // Static for visual recreation
  const rating = 4.5 // Static for visual recreation
  const ratingCount = 120 // Static for visual recreation
  const address = "123 Main St, Anytown, USA" // Static for visual recreation
  const workingHours = "Mon-Fri, 9 AM - 5 PM" // Static for visual recreation
  const bio = "Dr. John Doe is a highly experienced general practitioner with a passion for patient care." // Static for visual recreation
  const navigation = useNavigation()

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
              <Text style={styles.doctorName}>{doctorName}</Text>
              <Text style={styles.specialty}>{specialty}</Text>
            </View>
            <View style={styles.ratingContainer}>
              {/* RatingStars Placeholder */}
              <Text>Rating: {rating} ({ratingCount} reviews)</Text>
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
  aboutTitle: {
    marginTop: 18,
    fontSize: 16,
    fontWeight: "bold",
  },
  addressContainer: {
    alignItems: "center",
    backgroundColor: "#EDF7F2", // Placeholder for Colors.blockSectionBackground
    borderRadius: 20,
    marginTop: 6.7,
    paddingBottom: 17,
    paddingHorizontal: 17,
    paddingTop: 15,
    width: "100%",
  },
  addressLabel: {
    marginTop: 9,
    fontSize: 14,
    color: "#616161",
  },
  avatar: {
    borderRadius: 70,
    height: 140,
    marginTop: 32,
    width: 140,
  },
  bioContainer: {
    backgroundColor: "#FAFAFA", // Placeholder for Colors.aboutContainerBackground
    borderRadius: 20,
    marginTop: 18,
    paddingBottom: 41,
    paddingHorizontal: 17,
    paddingTop: 17,
    width: "100%",
  },
  container: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 29,
    backgroundColor: "white",
  },
  name: {
    marginTop: 28,
    fontSize: 24,
    fontWeight: "bold",
  },
  ratingContainer: {
    marginTop: 22.1,
  },
  specialisation: {
    fontSize: 16,
    color: "#666",
  },
  topHeaderSeparatorStyle: {
    backgroundColor: "#D9D9D9", // Placeholder for Colors.modalHeaderSwipeIndicator
    borderRadius: 8,
    height: 4,
    marginTop: 16,
    opacity: 0.7,
    width: 64,
  },
  workingHoursContainer: {
    alignSelf: "flex-start",
    marginTop: 10,
    paddingBottom: 21,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  workingHoursLabel: {
    marginTop: 9,
    fontSize: 14,
    color: "#666",
  },
  headerBackButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  blockSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
})
