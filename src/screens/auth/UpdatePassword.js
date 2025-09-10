import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
    marginHorizontal: 30,
  },
  formContainer: {
    width: '85%',
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
  eyeIconContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#888888',
  },
  passwordRequirements: {
    backgroundColor: '#f0f9f2',
    borderRadius: 12,
    padding: 20,
    marginVertical: 20,
  },
  requirementsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2FB645',
    marginBottom: 10,
  },
  requirement: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  requirementBullet: {
    marginRight: 8,
  },
  backButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#F71E27',
    fontWeight: '600',
  },
})

export default function UpdatePassword() {
  const navigation = useNavigation()
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [securePassword1, setSecurePassword1] = useState(true);

  // Password requirements
  const passwordRequirements = [
    { id: 1, text: "At least 8 characters long" },
    { id: 2, text: "Contains at least one uppercase letter" },
    { id: 3, text: "Contains at least one lowercase letter" },
    { id: 4, text: "Contains at least one number" },
    { id: 5, text: "Contains at least one special character" },
  ];

  const handleUpdatePassword = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    
    if (password.length < 8) {
      Alert.alert("Error", "Password must be at least 8 characters long");
      return;
    }
    
    // In a real app, you would validate all requirements here
    Alert.alert("Success", "Password updated successfully");
    navigation.navigate('SignInWithEmail');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo.png")}
          />
          <Text style={styles.appName}>SOS Doctor</Text>
        </View>
        
        <View style={styles.formContainer}>
          <Text style={styles.title}>Update Password</Text>
          <Text style={styles.subtitle}>
            Create a new password for your account
          </Text>
          
          <View style={styles.inputContainer}>
            <Image source={require("../../assets/images/lock.png")} style={styles.inputIcon} />
            <TextInput
              placeholder="New Password"
              placeholderTextColor="#888888"
              style={styles.textInput}
              secureTextEntry={securePassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.eyeIconContainer}
              onPress={() => setSecurePassword(!securePassword)}
            >
              <Image source={require("../../assets/images/eye-crossed.png")} style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Image source={require("../../assets/images/lock.png")} style={styles.inputIcon} />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#888888"
              style={styles.textInput}
              secureTextEntry={securePassword1}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              style={styles.eyeIconContainer}
              onPress={() => setSecurePassword1(!securePassword1)}
            >
              <Image source={require("../../assets/images/eye-crossed.png")} style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.passwordRequirements}>
            <Text style={styles.requirementsTitle}>Password Requirements</Text>
            {passwordRequirements.map(requirement => (
              <View key={requirement.id} style={styles.requirement}>
                <Text style={styles.requirementBullet}>•</Text>
                <Text style={styles.requirementText}>{requirement.text}</Text>
              </View>
            ))}
          </View>
          
          <Button
            title="Update Password"
            onPress={handleUpdatePassword}
          />
          
          <View style={styles.backButtonContainer}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>Back to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}