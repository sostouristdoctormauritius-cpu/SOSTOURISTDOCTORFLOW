import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';

const SignInWithEmail = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sign In</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo.png")}
          />
          <Text style={styles.welcomeText}>Welcome back! Please sign in to continue.</Text>
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
          
          <TouchableOpacity 
            style={styles.forgotPasswordContainer}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          
          <Button 
            title="Sign In" 
            onPress={() => navigation.navigate('Home')} 
          />
          
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR SIGN IN WITH</Text>
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
          
          <View style={styles.signupContainer}>
            <Text style={styles.noAccountText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterWithEmail')}>
              <Text style={styles.signupText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignInWithEmail;

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
  forgotPasswordContainer: { alignItems: 'flex-end', marginBottom: 20 },
  forgotPasswordText: { fontSize: 14, fontWeight: "600", color: '#F71E27' },
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
  signupContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  noAccountText: { fontSize: 16, color: '#666' },
  signupText: { fontSize: 16, fontWeight: "bold", color: '#F71E27', marginLeft: 5 },
});