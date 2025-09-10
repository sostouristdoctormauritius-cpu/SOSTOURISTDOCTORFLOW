import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const DUMMY_SYMPTOMS = [
  "Fever",
  "Headache",
  "Cough",
  "Sore Throat",
  "Fatigue",
  "Nausea",
];

const ConsultationSymptomSelectionScreen = () => {
  
  const navigation = useNavigation();

  const openAddSymptomModal = () => {
    navigation.navigate('AddSymptomModal');
  };

  return (
    <View style={styles.$screenContentContainerStyle}>
      <TouchableOpacity style={styles.$backButtonStyle} onPress={() => navigation.goBack()}>
        <Text>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.$titleStyle}>
        What are your symptoms?
      </Text>
      <View style={styles.symptomsContainer}>
        {DUMMY_SYMPTOMS.map((symptom, index) => (
          <TouchableOpacity key={index} style={styles.symptomButton} disabled={true}>
            <Text style={styles.symptomText}>{symptom}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.$additionalSymptomTitleStyle}>
        Additional Symptom
      </Text>
      <TouchableOpacity 
        style={styles.$additionalSymptomNoteStyle} 
        onPress={openAddSymptomModal}
      >
        <Text style={styles.additionalSymptomPlaceholder}>
          Enter your symptoms here...
        </Text>
      </TouchableOpacity>

      {/* PricingFooter Placeholder */}
      <View style={styles.pricingFooter}>
        <TouchableOpacity 
          style={styles.continueButton} 
          onPress={() => navigation.navigate("ConsultationBookAppointment")}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConsultationSymptomSelectionScreen;

const styles = StyleSheet.create({
  $screenContentContainerStyle: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  $backButtonStyle: {
    alignSelf: 'flex-start',
    padding: 10,
  },
  $titleStyle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  symptomsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 20,
  },
  symptomButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
  },
  symptomText: {
    fontSize: 14,
    color: "#333",
  },
  $additionalSymptomTitleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },
  $additionalSymptomNoteStyle: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
    minHeight: 60,
    justifyContent: "center",
  },
  additionalSymptomPlaceholder: {
    color: "#999",
    fontSize: 16,
  },
  pricingFooter: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  continueButton: {
    backgroundColor: "#F71E27",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
