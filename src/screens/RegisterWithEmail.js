import React, { useCallback } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  content: {
    alignItems: "center",
    width: "100%", // Adjusted from relativeWidth
  },
  image: {
    height: 40,
    marginBottom: 70,
    marginTop: 15,
    width: 230,
  },
  link: {
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  textStyle: {
    marginBottom: 30,
  },
  tnCBottom: {
    marginBottom: 24,
  },
  // Styles for FormInputController placeholder
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
    marginTop: 20,
  },
  termsAndConditionsContainer: {
    marginTop: 20,
    marginBottom: 24,
    alignItems: "center",
  },
})

export default function RegisterWithEmail() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/images/logo.png")} />
      <Text
        style={styles.textStyle}
      >
        Register
      </Text>
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
        onPress={useCallback(() => navigation.navigate('CompleteProfile'), [navigation])}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Next</Text>
      </TouchableOpacity>
      <View style={styles.termsAndConditionsContainer}>
        <Text>By signing up, you agree to our</Text>
        <Text style={styles.link}>Terms and Conditions</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignInWithEmail')}
      >
        <Text style={styles.link}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  )
}
