import React from "react"
import { FlatList, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'

const DUMMY_CONTACTS = [
  {
    id: 1,
    name: "Police",
    phone: "911",
    icon: require('../assets/images/profile.png'),
    color: "#D32F2F",
  },
  {
    id: 2,
    name: "Ambulance",
    phone: "999",
    icon: require('../assets/images/profile.png'),
    color: "#1976D2",
  },
  {
    id: 3,
    name: "Fire Department",
    phone: "112",
    icon: require('../assets/images/profile.png'),
    color: "#FFA000",
  },
  {
    id: 4,
    name: "SOS Doctor Helpline",
    phone: "1800-SOS-DOCTOR",
    icon: require('../assets/images/profile.png'),
    color: "#388E3C",
  },
]

const EmergencyCallScreen = () => {
  const navigation = useNavigation()
  
  const handleCallPress = (contact) => {
    // In a real app, this would initiate a phone call
    console.log("Calling", contact.phone)
  }

  const renderContactItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.contactCard, { borderLeftColor: item.color }]}
      onPress={() => handleCallPress(item)}
    >
      <View style={styles.contactInfo}>
        <Image source={item.icon} style={[styles.contactIcon, { backgroundColor: item.color }]} />
        <View style={styles.contactText}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.contactPhone}>{item.phone}</Text>
        </View>
      </View>
      <View style={[styles.callButton, { backgroundColor: item.color }]}>
        <Text style={styles.callButtonText}>CALL</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Emergency Contacts</Text>
        <View style={styles.placeholder} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.description}>
          In case of emergency, please contact the appropriate service immediately.
        </Text>
        
        <FlatList
          data={DUMMY_CONTACTS}
          renderItem={renderContactItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
        
        <View style={styles.warningContainer}>
          <Text style={styles.warningTitle}>⚠️ Important Notice</Text>
          <Text style={styles.warningText}>
            For medical emergencies, please also contact SOS Doctor Helpline for immediate medical assistance.
          </Text>
        </View>
      </View>
    </View>
  )
}

export default EmergencyCallScreen

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
  headerTitle: {
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
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  list: {
    flex: 1,
  },
  contactCard: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  contactInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  contactIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    resizeMode: "contain",
    padding: 10,
  },
  contactText: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 3,
  },
  contactPhone: {
    fontSize: 16,
    color: "#666",
  },
  callButton: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  callButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  warningContainer: {
    backgroundColor: "#FFF8E1",
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#FFECB3",
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF8F00",
    marginBottom: 5,
  },
  warningText: {
    fontSize: 14,
    color: "#999",
    lineHeight: 18,
  },
})
