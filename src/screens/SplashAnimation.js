import React from "react"
import { StyleSheet, View, Text } from "react-native"

const SplashAnimation = () => {
  return (
    <View style={styles.animationContainer}>
      <View style={styles.lottieStyle}>
        <Text>Splash Animation Placeholder</Text>
      </View>
    </View>
  )
}

export default SplashAnimation

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  lottieStyle: {
    height: 400,
    width: "90%",
    backgroundColor: "#f0f0f0", // Placeholder background
    justifyContent: "center",
    alignItems: "center",
  },
})
