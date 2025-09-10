import React, { useState } from "react"
import { Image, StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
  profilePicContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
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
    padding: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  editIcon: {
    width: 20,
    height: 20,
    tintColor: '#ffffff',
  },
  formContainer: {
    width: '100%',
    marginTop: 20,
  },
  inputContainer: {
    width: "100%",
    height: 55,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: '#FAFAFA',
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#888888',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  termsText: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 10,
  },
  termsLink: {
    color: '#F71E27',
    fontWeight: '600',
  },
  buttonContainer: {
    marginVertical: 20,
  },
})

export default function CompleteProfile() {
  const isProfileUpdate = false // Static for visual recreation
  const navigation = useNavigation()
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Complete Your Profile</Text>
          <Text style={styles.subtitle}>Please provide your details to continue</Text>
        </View>
        
        <View style={styles.profilePicContainer}>
          <Image 
            source={require("../../../assets/images/profile.png")} 
            style={styles.profilePic} 
          />
          <TouchableOpacity style={styles.editButton}>
            <Image
              source={require("../../../assets/images/edit.png")}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.formContainer}>
          {/* FullNameField */}
          <View style={styles.inputContainer}>
            <Image 
              source={require("../../../assets/images/profile.png")} 
              style={styles.inputIcon} 
            />
            <TextInput 
              placeholder="Full Name" 
              style={styles.textInput}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* PhoneNumberField */}
          <View style={styles.inputContainer}>
            <Image 
              source={require("../../../assets/images/profile.png")} 
              style={styles.inputIcon} 
            />
            <TextInput 
              placeholder="Phone Number" 
              style={styles.textInput} 
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          {/* Password Field (conditionally rendered) */}
          {!isProfileUpdate && (
            <View style={styles.inputContainer}>
              <Image 
                source={require("../../../assets/images/lock.png")} 
                style={styles.inputIcon} 
              />
              <TextInput 
                placeholder="Password" 
                style={styles.textInput} 
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </View>
          )}

          <View style={styles.termsContainer}>
            <TouchableOpacity>
              <Image 
                source={require("../../../assets/images/radio_uncheck.png")}
                style={styles.inputIcon} 
              />
            </TouchableOpacity>
            <Text style={styles.termsText}>
              I agree to the <Text style={styles.termsLink}>Terms & Conditions</Text> and <Text style={styles.termsLink}>Privacy Policy</Text>
            </Text>
          </View>
          
          <View style={styles.buttonContainer}>
            <Button 
              title="Continue" 
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}