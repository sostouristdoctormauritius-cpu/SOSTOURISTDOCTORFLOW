import LottieView from "lottie-react-native"
import React from "react"
import { StyleSheet, View } from "react-native"

type SplashAnimationProps = {
  onAnimationFinish?: () => void
}

const SplashAnimation: React.FC<SplashAnimationProps> = ({
  onAnimationFinish = () => undefined,
}) => {
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        loop={false}
        style={styles.lottieStyle}
        speed={3}
        onAnimationFinish={onAnimationFinish}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("assets/lottie/splash.json")}
      />
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
  },
})
