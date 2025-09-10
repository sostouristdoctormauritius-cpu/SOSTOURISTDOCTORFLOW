import React, { useEffect, useRef } from "react"
import { StyleSheet, View, Text, Image, Animated, Easing } from "react-native"

const SplashAnimation = ({ onSplashComplete }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const scaleAnim = useRef(new Animated.Value(0.8)).current
  
  useEffect(() => {
    // Fade in animation
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 5,
          tension: 50,
          useNativeDriver: true,
        })
      ]),
      Animated.delay(1500),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      })
    ]).start(() => {
      // Navigate to next screen after animation completes
      if (onSplashComplete) {
        onSplashComplete();
      }
    });
  }, [fadeAnim, scaleAnim, onSplashComplete])

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.content, 
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }]
          }
        ]}
      >
        <Image 
          source={require('../assets/images/logo.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
        <Text style={styles.title}>SOS Doctor</Text>
        <Text style={styles.subtitle}>Your Health, Our Priority</Text>
      </Animated.View>
    </View>
  )
}

export default SplashAnimation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666666",
    textAlign: "center",
  },
})
