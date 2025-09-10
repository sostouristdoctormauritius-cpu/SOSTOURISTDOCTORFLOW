import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DUMMY_CARDS = [
  { id: '1', type: 'Credit Card', last4: '4242', icon: require('../../assets/images/google.png') },
  { id: '2', type: 'Credit Card', last4: '5555', icon: require('../../assets/images/fb.png') },
];

const PaymentMethodsScreen = () => {
  const navigation = useNavigation();

  const renderCardItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Image source={item.icon} style={styles.cardIcon} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardType}>{item.type}</Text>
        <Text style={styles.cardNumber}>**** **** **** {item.last4}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.removeButton}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Methods</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={DUMMY_CARDS}
        renderItem={renderCardItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Card')}>
          <Text style={styles.addButtonText}>+ Add New Card</Text>
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
  listContent: { padding: 20 },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: { width: 40, height: 40, marginRight: 15 },
  cardInfo: { flex: 1 },
  cardType: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  cardNumber: { fontSize: 14, color: '#666', marginTop: 4 },
  removeButton: { fontSize: 14, color: '#F71E27', fontWeight: '600' },
  footer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  addButton: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
  },
  addButtonText: { fontSize: 16, color: '#388E3C', fontWeight: 'bold' },
});

export default PaymentMethodsScreen;
