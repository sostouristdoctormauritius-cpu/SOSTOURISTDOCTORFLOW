import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button, CloseButton } from '../components';

const commonSymptoms = ['Fever', 'Headache', 'Cough', 'Fatigue', 'Nausea', 'Dizziness', 'Sore Throat', 'Shortness of Breath'];

export default function AddSymptomModalScreen() {
  const navigation = useNavigation();
  const [customSymptom, setCustomSymptom] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) ? prev.filter(s => s !== symptom) : [...prev, symptom]
    );
  };

  const handleAddSymptoms = () => {
    const allSymptoms = [...selectedSymptoms];
    if (customSymptom.trim()) {
      allSymptoms.push(customSymptom.trim());
    }
    // In a real app, you would pass this data back to the previous screen
    console.log("Selected Symptoms:", allSymptoms);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CloseButton onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Add Symptoms</Text>
        <View style={{ width: 50 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Select Common Symptoms</Text>
        <View style={styles.suggestionsList}>
          {commonSymptoms.map((symptom, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.suggestionItem,
                selectedSymptoms.includes(symptom) && styles.selectedSuggestionItem
              ]}
              onPress={() => toggleSymptom(symptom)}
            >
              <Text style={[
                styles.suggestionText,
                selectedSymptoms.includes(symptom) && styles.selectedSuggestionText
              ]}>
                {symptom}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Add Custom Symptom</Text>
        <TextInput
          style={styles.customSymptomInput}
          placeholder="Enter custom symptom"
          value={customSymptom}
          onChangeText={setCustomSymptom}
        />

        <Button
          title="Add Symptoms"
          onPress={handleAddSymptoms}
          disabled={selectedSymptoms.length === 0 && !customSymptom.trim()}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  title: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  suggestionsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  suggestionItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  selectedSuggestionItem: {
    backgroundColor: "#F71E27",
    borderColor: "#F71E27",
  },
  suggestionText: {
    color: "#333",
    fontSize: 14,
  },
  selectedSuggestionText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  customSymptomInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 30,
  },
});
