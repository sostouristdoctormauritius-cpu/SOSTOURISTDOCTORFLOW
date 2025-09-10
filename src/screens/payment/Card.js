import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardScreen = () => {
  const navigation = useNavigation();
  const [card, setCard] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: '',
  });

  const handleInputChange = (field, value) => {
    setCard({ ...card, [field]: value });
  };

  const handleAddCard = () => {
    // Add card logic here
    console.log('Card Added:', card);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Card</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          value={card.number}
          onChangeText={(val) => handleInputChange('number', val)}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.expiryInput]}
            placeholder="MM/YY"
            keyboardType="numeric"
            value={card.expiry}
            onChangeText={(val) => handleInputChange('expiry', val)}
          />
          <TextInput
            style={[styles.input, styles.cvvInput]}
            placeholder="CVV"
            keyboardType="numeric"
            secureTextEntry
            value={card.cvv}
            onChangeText={(val) => handleInputChange('cvv', val)}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Cardholder Name"
          value={card.name}
          onChangeText={(val) => handleInputChange('name', val)}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddCard}>
          <Text style={styles.addButtonText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  formContainer: { padding: 20 },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  expiryInput: { flex: 1, marginRight: 10 },
  cvvInput: { flex: 1, marginLeft: 10 },
  footer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  addButton: {
    backgroundColor: '#F71E27',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: { fontSize: 18, color: '#FFFFFF', fontWeight: 'bold' },
});

export default CardScreen;
