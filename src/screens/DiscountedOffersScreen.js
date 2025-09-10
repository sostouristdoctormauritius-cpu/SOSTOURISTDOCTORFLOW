import React from "react";
import { FlatList, StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const DUMMY_OFFERS = [
  {
    id: "1",
    title: "Comprehensive Dental Check-up",
    description: "Includes full examination, cleaning, and X-rays.",
    discount: "15% OFF",
    originalPrice: "$100",
    discountedPrice: "$85",
    image: require('../assets/images/profile.png'),
  },
  {
    id: "2",
    title: "Complete Eye Examination",
    description: "Detailed eye test with prescription and consultation.",
    discount: "20% OFF",
    originalPrice: "$120",
    discountedPrice: "$96",
    image: require('../assets/images/profile.png'),
  },
  {
    id: "3",
    title: "Cardiac Health Screening",
    description: "ECG, blood pressure, and cholesterol tests.",
    discount: "25% OFF",
    originalPrice: "$150",
    discountedPrice: "$112.50",
    image: require('../assets/images/profile.png'),
  },
];

const DiscountedOffersScreen = () => {
  const navigation = useNavigation();

  const renderOfferItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.offerCard}
      onPress={() => navigation.navigate('OfferDetails', { offer: item })}
    >
      <Image source={item.image} style={styles.offerImage} />
      <View style={styles.offerInfo}>
        <Text style={styles.offerTitle}>{item.title}</Text>
        <Text style={styles.offerDescription}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>{item.discountedPrice}</Text>
          <Text style={styles.originalPrice}>{item.originalPrice}</Text>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{item.discount}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Special Offers</Text>
        <View style={styles.headerSpacer} />
      </View>

      <FlatList
        data={DUMMY_OFFERS}
        renderItem={renderOfferItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default DiscountedOffersScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },
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
  headerSpacer: {
    width: 24,
  },
  listContent: { padding: 20 },
  offerCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  offerImage: {
    width: '100%',
    height: 150,
  },
  offerInfo: {
    padding: 15,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  offerDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  discountedPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F71E27",
  },
  originalPrice: {
    fontSize: 14,
    color: "#999",
    textDecorationLine: "line-through",
    marginLeft: 10,
  },
  discountBadge: {
    backgroundColor: "#E8F5E9",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 'auto',
  },
  discountText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#388E3C",
  },
});
