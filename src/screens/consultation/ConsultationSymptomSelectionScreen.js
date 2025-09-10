import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';

const DUMMY_SYMPTOMS = [
  "Fever",
  "Headache",
  "Cough",
  "Sore Throat",
  "Fatigue",
  "Nausea",
  "Back Pain",
  "Joint Pain",
  "Stomach Ache",
  "Dizziness",
  "Skin Rash",
  "Eye Irritation"
];

const ConsultationSymptomSelectionScreen = () => {
  const navigation = useNavigation();
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [additionalSymptom, setAdditionalSymptom] = useState('');

  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const openAddSymptomModal = () => {
    navigation.navigate('AddSymptomModal');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          What are your symptoms?
        </Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Common Symptoms</Text>
        <View style={styles.symptomsContainer}>
          {DUMMY_SYMPTOMS.map((symptom, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.symptomButton, 
                selectedSymptoms.includes(symptom) && styles.selectedSymptomButton
              ]}
              onPress={() => toggleSymptom(symptom)}
            >
              <Text style={[
                styles.symptomText,
                selectedSymptoms.includes(symptom) && styles.selectedSymptomText
              ]}>
                {symptom}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.sectionTitle}>Additional Symptom</Text>
        <View style={styles.additionalSymptomContainer}>
          <TextInput
            style={styles.additionalSymptomInput}
            placeholder="Enter your symptoms here..."
            value={additionalSymptom}
            onChangeText={setAdditionalSymptom}
            multiline
          />
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button 
          title="Continue" 
          onPress={() => navigation.navigate("ConsultationBookAppointment")}
        />
      </View>
    </View>
  );
};

export default ConsultationSymptomSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#333',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
    color: '#333',
  },
  symptomsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  symptomButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedSymptomButton: {
    backgroundColor: "#F71E27",
    borderColor: "#F71E27",
  },
  symptomText: {
    fontSize: 14,
    color: "#333",
  },
  selectedSymptomText: {
    color: "#fff",
  },
  additionalSymptomContainer: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    padding: 15,
    minHeight: 100,
    justifyContent: "flex-start",
    backgroundColor: '#fafafa',
    marginBottom: 20,
  },
  additionalSymptomInput: {
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'top',
  },
  footer: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
