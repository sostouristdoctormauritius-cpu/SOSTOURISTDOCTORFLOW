import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components';

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

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            placeholder="1234 5678 9012 3456"
            value={card.number}
            onChangeText={(value) => handleInputChange('number', value)}
            keyboardType="number-pad"
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputGroup, styles.halfWidth]}>
            <Text style={styles.label}>Expiry Date</Text>
            <TextInput
              style={styles.input}
              placeholder="MM/YY"
              value={card.expiry}
              onChangeText={(value) => handleInputChange('expiry', value)}
            />
          </View>

          <View style={[styles.inputGroup, styles.halfWidth]}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              placeholder="123"
              value={card.cvv}
              onChangeText={(value) => handleInputChange('cvv', value)}
              keyboardType="number-pad"
              secureTextEntry
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name on Card</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={card.name}
            onChangeText={(value) => handleInputChange('name', value)}
          />
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleAddCard}>
          <Text style={styles.addButtonText}>Add Card</Text>
        </TouchableOpacity>
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
