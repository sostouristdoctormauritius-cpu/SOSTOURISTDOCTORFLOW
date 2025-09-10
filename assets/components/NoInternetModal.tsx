import React from "react"
import { Alert, Dimensions, Linking, Modal, Platform, StyleSheet, Text, View } from "react-native"

import LottieView from "lottie-react-native"
import animation from "../components/AnimationConstants"

export const WIDTH = Dimensions.get("window").width
export const HEIGHT = Dimensions.get("window").height

const openWifiSettings = async () => {
  try {
    if (Platform.OS === "android") {
      // Open general settings on Android
      await Linking.openURL("android.settings.SETTINGS")
    } else if (Platform.OS === "ios") {
      // Open general settings on iOS
      await Linking.openURL("app-settings:")
    }
  } catch (error) {
    console.log("Error", error)
    Alert.alert("Error", "Unable to open settings. Please try again.")
  }
}

const NoInternetModal = ({ shouldShow = false }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={shouldShow}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <LottieView
            source={animation.noInternet}
            style={{
              height: HEIGHT / 4,
              width: HEIGHT / 4,
            }}
            autoPlay
            loop
          />

          <Text
            style={{
              fontSize: 18,
              color: "red",
            }}
          >
            No Internet Connection!
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: "gray",
              textAlign: "center",
            }}
          >
            Please check your connection and try again.
          </Text>

          {/* <Pressable style={styles.openSettingsButton} onPress={openWifiSettings}>
                        <Text style={styles.openSettingsButtonText}>Open Wi-Fi Settings</Text>
                    </Pressable> */}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    // shadowOffset: {
    //     width: 0,
    //     height: 2,
    // },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openSettingsButton: {
    alignItems: "center",
    backgroundColor: "#007AFF",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    width: WIDTH * 0.6,
  },
  openSettingsButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default NoInternetModal
