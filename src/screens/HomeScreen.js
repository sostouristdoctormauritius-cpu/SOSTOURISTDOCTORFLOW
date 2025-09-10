import React from "react"
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native"
import { useNavigation } from '@react-navigation/native';
import { Button, Header } from '../components';

const { width } = Dimensions.get("screen")

const $size = {
  borderRadius: 24,
  height: 48,
  width: 48,
}

const $center = {
  alignItems: "center",
  justifyContent: "center",
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
  header: { backgroundColor: "#ffffff" }, // Placeholder color
  image: {
    height: 33,
    width: 131,
  },
  logoutIcon: {
    ...$size,
    ...$center,
    marginHorizontal: 8,
  },
  headerAvatarContainer: {
    marginHorizontal: 8,
    ...$size,
    ...$center,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#000"
  },
  homeBlock: {
    width: "90%",
    height: 150,
    backgroundColor: "#f0f0f0",
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerModal: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width * 0.8, // Example width for drawer
    height: "100%",
    backgroundColor: "white",
    padding: 20,
    zIndex: 1000,
  },
  buttonContainer: {
    width: '90%',
    marginVertical: 10,
  }
})

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={styles.container}
    >
      <Header title="Home" />
      
      <View style={styles.header}>
        <View style={styles.headerAvatarContainer}>
          <Image source={require("../../assets/images/profile.png")} style={{ width: "100%", height: "100%" }} />
        </View>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../../assets/images/smallLogo.png")}
        />
        <TouchableOpacity style={styles.logoutIcon} onPress={() => navigation.navigate('Welcome')}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.homeBlock}>
        <Image
          resizeMode="contain"
          source={require("../../assets/images/instantOnline.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      
      <View style={styles.homeBlock}>
        <Image
          resizeMode="contain"
          source={require("../../assets/images/ePrescription.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      
      <View style={styles.homeBlock}>
        <Image
          resizeMode="contain"
          source={require("../../assets/images/homeVisit.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Go to Consultation" 
          onPress={() => navigation.navigate('ConsultationChatOnboarding')} 
        />
      </View>
      
      <View style={styles.homeBlock}>
        <Image
          resizeMode="contain"
          source={require("../../assets/images/homeConsultation.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Home Visit" 
          onPress={() => navigation.navigate('HomeVisit')} 
        />
      </View>

      {/* DrawerModal Placeholder */}
      {/* <View style={styles.drawerModal}>
        <Text>Drawer Modal Content</Text>
      </View> */}
    </View>
  )
}