import React, { useCallback } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';

const RegisterWithEmail = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Account</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo.png")}
          />
          <Text style={styles.welcomeText}>Join us to start your health journey.</Text>
        </View>
        
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Confirm your password"
              secureTextEntry={true}
            />
          </View>
          
          <View style={styles.termsContainer}>
            <TouchableOpacity style={styles.checkbox}>
              {/* Add a checkmark icon here when selected */}
            </TouchableOpacity>
            <Text style={styles.termsText}>
              I agree to the <Text style={styles.termsLink}>Terms</Text> and <Text style={styles.termsLink}>Privacy Policy</Text>.
            </Text>
          </View>
          
          <Button 
            title="Register" 
            onPress={useCallback(() => navigation.navigate('CompleteProfile'), [navigation])}
          />
          
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR REGISTER WITH</Text>
            <View style={styles.line} />
          </View>
          
          <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require("../../assets/images/google.png")} 
                style={styles.socialIcon} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require("../../assets/images/fb.png")} 
                style={styles.socialIcon} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require("../../assets/images/apple.png")} 
                style={styles.socialIcon} 
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.signinContainer}>
            <Text style={styles.haveAccountText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignInWithEmail')}>
              <Text style={styles.signinText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegisterWithEmail;

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
  scrollViewContent: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  logoContainer: { alignItems: 'center', marginBottom: 30 },
  logo: { width: 100, height: 100, resizeMode: 'contain', marginBottom: 10 },
  welcomeText: { fontSize: 16, color: '#666', textAlign: 'center' },
  formContainer: { width: '100%' },
  inputGroup: { marginBottom: 20 },
  inputLabel: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 8 },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#F71E27',
    marginRight: 10,
  },
  termsText: { fontSize: 14, color: '#666', flex: 1 },
  termsLink: { color: '#F71E27', fontWeight: 'bold', textDecorationLine: 'underline' },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  line: { flex: 1, height: 1, backgroundColor: '#E0E0E0' },
  orText: { marginHorizontal: 10, color: '#999', fontSize: 12, fontWeight: 'bold' },
  socialLoginContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 30 },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  socialIcon: { width: 30, height: 30, resizeMode: 'contain' },
  signinContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  haveAccountText: { fontSize: 16, color: '#666' },
  signinText: { fontSize: 16, fontWeight: "bold", color: '#F71E27', marginLeft: 5 },
});