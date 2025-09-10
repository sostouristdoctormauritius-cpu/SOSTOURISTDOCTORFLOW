import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from '../components/index';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
          />
          <Text style={styles.title}>Welcome to SOS Doctor</Text>
          <Text style={styles.subtitle}>Your health is our priority</Text>
          
          <View style={styles.featuresContainer}>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>👨‍⚕️</Text>
              <Text style={styles.featureTitle}>Expert Doctors</Text>
              <Text style={styles.featureDescription}>Connect with certified healthcare professionals</Text>
            </View>
            
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>📱</Text>
              <Text style={styles.featureTitle}>Easy Access</Text>
              <Text style={styles.featureDescription}>24/7 access to healthcare services from anywhere</Text>
            </View>
            
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🔒</Text>
              <Text style={styles.featureTitle}>Secure & Private</Text>
              <Text style={styles.featureDescription}>Your health data is protected with industry-standard security</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button
          title="Continue"
          onPress={() => navigation.navigate('SignInWithEmail')}
          style={styles.continueButton}
        />
        <TouchableOpacity 
          style={styles.registerButton}
          onPress={() => navigation.navigate('RegisterWithEmail')}
        >
          <Text style={styles.registerText}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    paddingTop: 50,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  featuresContainer: {
    width: '100%',
  },
  featureItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  featureDescription: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  footer: {
    padding: 30,
    paddingTop: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  continueButton: {
    marginBottom: 15,
  },
  registerButton: {
    padding: 15,
  },
  registerText: {
    color: '#F71E27',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
