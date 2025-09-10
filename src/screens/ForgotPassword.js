import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  content: {
    alignItems: "center",
    marginBottom: 32,
    paddingTop: 10,
    width: "100%",
  },
  image: {
    height: 40,
    marginBottom: 70,
    marginTop: 15,
    width: 230,
  },
  textStyle: {
    marginBottom: 35,
  },
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
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  greenButton: {
    backgroundColor: "lightgreen", // Placeholder color
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    width: "80%",
  },
})

export default function ForgotPassword() {
  const navigation = useNavigation()
  return (
    <View
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={require("../../assets/images/logo.png")}
      />
      <Text style={styles.textStyle}>Forgot Password</Text>
      <View style={styles.content}>
        <View style={styles.textInputContainer}>
          <Image source={require("../../assets/images/envelope.png")} style={styles.envelopeIcon} />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            keyboardType="email-address"
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.greenButton}
        onPress={() => navigation.navigate('OtpVerify')}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Reset</Text>
      </TouchableOpacity>
    </View>
  )
}
