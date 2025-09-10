import React from "react"
import { Dimensions, Modal, StyleSheet, Text, View } from "react-native"

import LottieView from "lottie-react-native"
import animation from "../components/AnimationConstants"

export const WIDTH = Dimensions.get("window").width
export const HEIGHT = Dimensions.get("window").height



const NoInternetModal = ({ shouldShow = false }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={shouldShow}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <LottieView
            source={animation.noInternet}
            style={styles.lottieView}
            autoPlay
            loop
          />

          <Text style={styles.titleText}>
            No Internet Connection!
          </Text>
          <Text style={styles.subtitleText}>
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
  lottieView: {
    height: HEIGHT / 4,
    width: HEIGHT / 4,
  },
  titleText: {
    fontSize: 18,
    color: "red",
  },
  subtitleText: {
    fontSize: 10,
    color: "gray",
    textAlign: "center",
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
