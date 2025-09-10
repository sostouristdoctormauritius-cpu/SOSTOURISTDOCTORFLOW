import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';

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

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Emergency Contacts" 
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <Text style={styles.description}>
          In case of a medical emergency, please contact the appropriate emergency services immediately.
        </Text>
        
        <ScrollView style={styles.list}>
          {DUMMY_CONTACTS.map(contact => (
            <View 
              key={contact.id} 
              style={[styles.contactCard, { borderLeftColor: contact.color }]}
            >
              <View style={styles.contactInfo}>
                <Image source={contact.icon} style={styles.contactIcon} />
                <View style={styles.contactText}>
                  <Text style={styles.contactName}>{contact.name}</Text>
                  <Text style={styles.contactPhone}>{contact.phone}</Text>
                </View>
              </View>
              <TouchableOpacity 
                style={[styles.callButton, { backgroundColor: contact.color }]}
                onPress={() => Linking.openURL(`tel:${contact.phone}`)}
              >
                <Text style={styles.callButtonText}>Call</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        
        <View style={styles.warningContainer}>
          <Text style={styles.warningTitle}>⚠️ Important</Text>
          <Text style={styles.warningText}>
            These emergency contacts are for immediate medical assistance. 
            For non-emergency medical inquiries, please use the app's consultation feature.
          </Text>
        </View>
      </View>
    </SafeAreaView>
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
