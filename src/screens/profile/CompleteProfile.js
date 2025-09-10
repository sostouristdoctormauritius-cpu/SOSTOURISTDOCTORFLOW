import React, { useState } from "react";
import { ScrollView, Image, StyleSheet, View, Text, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';

const CompleteProfile = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phoneNumber, setPhoneNumber] = useState('+1234567890');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profileHeader}>
          <View style={styles.profilePicContainer}>
            <Image 
              source={require("../../assets/images/profile.png")} 
              style={styles.profilePic} 
            />
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editIcon}>✏️</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput 
              style={styles.textInput}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput 
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput 
              style={styles.textInput} 
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button 
              title="Save Changes" 
              onPress={() => navigation.goBack()}
            />
            <TouchableOpacity 
              style={styles.logoutButton}
              onPress={() => navigation.navigate('Welcome')}
            >
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: { fontSize: 24, color: '#333' },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: '#333' },
  scrollViewContent: { padding: 20 },
  profileHeader: { alignItems: 'center', marginBottom: 30 },
  profilePicContainer: { position: 'relative' },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#F71E27',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#F71E27',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: { fontSize: 20, color: '#FFFFFF' },
  formContainer: { width: '100%' },
  inputGroup: { marginBottom: 20 },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  buttonContainer: { marginTop: 30 },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F71E27',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  logoutButtonText: {
    color: '#F71E27',
    fontSize: 16,
    fontWeight: '600',
  },
});