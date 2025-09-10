import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  blackColor: {
    color: "#000000",
  },
  btnForgot: {
    marginBottom: 25,
    marginTop: 21,
  },
  container: {
    alignItems: "center",
    flex: 1,
  },
  content: {
    alignItems: "center",
    marginBottom: 32,
    paddingTop: 10,
    width: "100%", // Adjusted from relativeWidth
  },
  flexRow: {
    flexDirection: "row",
    marginTop: 20
  },
  image: {
    height: 40,
    marginBottom: 70,
    marginTop: 15,
    width: 230,
  },
  noAccText: {
    fontSize: 18,
  },
  textForgot: {
    fontSize: 16,
    fontWeight: "bold", // Simplified from FontWeight.semibold
  },
  textStyle: {
    marginBottom: 35,
  },
  roundedView: {
    borderColor: "#c8c8c8",
    borderRadius: 50,
    borderWidth: 1,
    overflow: "hidden",
  },
  errorText: {
    width: "80%",
    top: -20,
    justifyContent: "center",
    color: "red",
    alignItems: "center",
    fontSize: 15,
    letterSpacing: 1,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "55%",
    marginTop: 20,
  },
  radioOption: {
    flexDirection: "row",
  },
  radioImage: {
    height: 20,
    width: 20,
  },
  radioText: {
    marginLeft: 5,
  },
  signUpText: {
    fontWeight: "bold",
  },
  // Styles for RoundedTextInput placeholder
  textInputContainer: {
    width: "80%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
  },
  envelopeIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  logo: {
    height: 50,
    width: 250,
    marginBottom: 70,
    marginTop: 15,
  },
  greenButton: {
    backgroundColor: "lightgreen", // Placeholder color
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    width: "80%",
  },
})

export default function SignInWithEmail() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <Text style={styles.textStyle}>Sign In</Text>
      <View style={styles.content}>
        <View style={styles.textInputContainer}>
          <Image
            source={require("../../assets/images/envelope.png")}
            style={styles.envelopeIcon}
          />
          <TextInput
            placeholder="Email/Mobile Number"
            style={styles.textInput}
            keyboardType="email-address"
          />
        </View>
        {/* {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>} */}
      </View>

      <TouchableOpacity
        style={styles.greenButton}
        onPress={() => navigation.navigate('SignInWithEmail2')}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Sign In</Text>
      </TouchableOpacity>
 

      <TouchableOpacity
        style={styles.flexRow}
        onPress={() => navigation.navigate('RegisterWithEmail')}
      >
        <Text style={styles.noAccText}>Don't have an account? </Text>
        <Text style={[{ color: "blue" }, styles.signUpText]}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  )
}
