import React from "react";
boardsimport { StyleSheet, View, Text, Image, Modal, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button, CloseButton } from '../components';

export default function DoctorProfileModalScreen({ visible, onClose, doctor }) {
  const navigation = useNavigation();
  // Use passed doctor data or fallback to a default mock object
  const currentDoctor = doctor || {
    name: "Dr. Alice Smith",
    specialty: "General Practitioner",
    rating: 4.8,
    reviews: 120,
    experience: "10 years",
    bio: "Dr. Alice Smith is a highly experienced general practitioner with over 10 years of experience in patient care. She specializes in preventive medicine and chronic disease management.",
    languages: ["English", "Spanish", "French"],
    education: [
      { degree: "MD", school: "Harvard Medical School", year: "2010" },
      { degree: "Residency", school: "Johns Hopkins Hospital", year: "2013" }
    ],
    address: "123 Medical Center, Health St, New York, NY 10001",
    workingHours: "Mon-Fri, 9 AM - 5 PM",
    avatar: require("../assets/images/profile.png") // Default avatar
  };

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
            <CloseButton onPress={onClose} />
          </View>
          
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.profileHeader}>
              <Image style={styles.avatar} source={currentDoctor.avatar} />
              <Text style={styles.doctorName}>{currentDoctor.name}</Text>
              <Text style={styles.specialty}>{currentDoctor.specialty}</Text>
              <View style={styles.statsContainer}>
                <View style={styles.stat}>
                  <Text style={styles.statValue}>{currentDoctor.rating} ★</Text>
                  <Text style={styles.statLabel}>({currentDoctor.reviews} reviews)</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statValue}>{currentDoctor.experience}</Text>
                  <Text style={styles.statLabel}>Experience</Text>
                </View>
              </View>
            </View>

            <View style={styles.content}>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.bioText}>{currentDoctor.bio}</Text>
              </View>
              
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Languages</Text>
                <View style={styles.languagesContainer}>
                  {currentDoctor.languages.map((language, index) => (
                    <View key={index} style={styles.languageBadge}>
                      <Text style={styles.languageText}>{language}</Text>
                    </View>
                  ))}
                </View>
              </View>
              
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Education</Text>
                {currentDoctor.education.map((edu, index) => (
                  <View key={index} style={styles.educationItem}>
                    <Text style={styles.educationDegree}>{edu.degree} - {edu.year}</Text>
                    <Text style={styles.educationSchool}>{edu.school}</Text>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
          
          <View style={styles.footer}>
            <Button
              title="Book Appointment"
              onPress={() => {
                onClose();
                navigation.navigate('AppointmentBooking', { doctor: currentDoctor });
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalView: {
    backgroundColor: "#F9F9F9",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    height: "90%",
  },
  header: {
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  profileHeader: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  doctorName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  specialty: {
    fontSize: 18,
    color: "#666",
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  bioText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  languagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  languageBadge: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  languageText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  educationItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  educationDegree: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  educationSchool: {
    fontSize: 15,
    color: "#666",
    marginTop: 4,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    backgroundColor: "#FFFFFF",
  },
});