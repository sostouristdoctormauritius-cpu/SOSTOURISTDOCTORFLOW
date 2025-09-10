import React from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const TermsAndConditionsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms & Conditions</Text>
        <View style={{ width: 24 }} />
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acceptance of Terms</Text>
          <Text style={styles.sectionText}>
            By accessing or using the SOS Doctor services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services Description</Text>
          <Text style={styles.sectionText}>
            SOS Doctor provides a platform for connecting patients with licensed healthcare professionals for medical consultations and related services.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>User Responsibilities</Text>
          <Text style={styles.sectionText}>
            As a user, you agree to:
          </Text>
          <Text style={styles.sectionText}>
            • Provide accurate and complete information when creating an account
          </Text>
          <Text style={styles.sectionText}>
            • Maintain the security of your account credentials
          </Text>
          <Text style={styles.sectionText}>
            • Use the services only for lawful purposes
          </Text>
          <Text style={styles.sectionText}>
            • Not interfere with or disrupt the services
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medical Disclaimer</Text>
          <Text style={styles.sectionText}>
            Our services are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Terms</Text>
          <Text style={styles.sectionText}>
            You agree to pay all fees and charges associated with your use of our services. All payments are non-refundable unless otherwise specified.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Limitation of Liability</Text>
          <Text style={styles.sectionText}>
            SOS Doctor shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Intellectual Property</Text>
          <Text style={styles.sectionText}>
            All content, features, and functionality of our services are owned by SOS Doctor and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Termination</Text>
          <Text style={styles.sectionText}>
            We may terminate or suspend your access to our services immediately, without prior notice, for any reason whatsoever, including without limitation if you breach the Terms.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Governing Law</Text>
          <Text style={styles.sectionText}>
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction where our company is registered, without regard to its conflict of law provisions.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Changes to Terms</Text>
          <Text style={styles.sectionText}>
            We reserve the right to modify or replace these Terms at any time. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <Text style={styles.sectionText}>
            If you have any questions about these Terms and Conditions, please contact us at:
          </Text>
          <Text style={styles.sectionText}>
            Email: terms@sosdoctor.com
          </Text>
          <Text style={styles.sectionText}>
            Phone: +1 (800) 555-0199
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
});

export default TermsAndConditionsScreen;