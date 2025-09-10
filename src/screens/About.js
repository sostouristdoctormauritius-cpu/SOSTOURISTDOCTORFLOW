import React from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Us</Text>
        <View style={{ width: 24 }} />
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.sectionText}>
            At SOS Doctor, our mission is to provide accessible, high-quality healthcare services to everyone, everywhere. We believe that healthcare should be convenient, affordable, and personalized.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Vision</Text>
          <Text style={styles.sectionText}>
            To be the leading digital healthcare platform, empowering individuals to take control of their health and well-being with confidence and ease.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.sectionText}>Email: support@sosdoctor.com</Text>
          <Text style={styles.sectionText}>Phone: +1 (123) 456-7890</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Legal</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
            <Text style={styles.linkText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TermsAndConditions')}>
            <Text style={styles.linkText}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    fontSize: 24,
    color: '#333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#333',
  },
  scrollViewContent: {
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  sectionText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    marginBottom: 10,
  },
  linkText: {
    fontSize: 16,
    color: "#F71E27",
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
});
