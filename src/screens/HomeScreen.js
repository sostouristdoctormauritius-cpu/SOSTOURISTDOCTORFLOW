import React from "react"
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
} from "react-native"
import { useNavigation } from '@react-navigation/native';
import { Button, Header } from '../components';
import { navigation } from '../utils';

const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
  header: { 
    backgroundColor: "#ffffff" 
  },
  image: {
    height: 33,
    width: 131,
  },
  logoutIcon: {
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  headerAvatarContainer: {
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#000",
    marginHorizontal: 8,
  },
  homeBlock: {
    width: "90%",
    height: 150,
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerModal: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width * 0.8,
    height: "100%",
    backgroundColor: "white",
    padding: 20,
    zIndex: 1000,
  },
  buttonContainer: {
    width: '90%',
    marginVertical: 10,
  },
  fullSize: {
    width: "100%",
    height: "100%",
  },
})

export default function HomeScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header implementation would go here */}
      <Header title="Home" style={styles.header} />
      
      {/* Home blocks */}
      <View style={styles.homeBlock}>
        <Text>Home Block 1</Text>
      </View>
      
      <View style={styles.homeBlock}>
        <Text>Home Block 2</Text>
      </View>
      
      <View style={styles.homeBlock}>
        <Text>Home Block 3</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Start Consultation" onPress={() => navigation.navigateToConsultation(nav)} />
        <Button title="Logout" onPress={() => navigation.navigateToAuth(nav)} />
      </View>
    </View>
  );
}