import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

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
    width: "100%",
  },
  flexRow: {
    flexDirection: "row",
  },
  image: {
    height: 40,
    marginBottom: 70,
    marginTop: 15,
    width: 230,
  },
  noAccText: { fontSize: 18 },
  textForgot: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textStyle: {
    marginBottom: 35,
  },
  inputContainer: {
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
  lockIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  eyeIconContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  greenButton: {
    backgroundColor: "lightgreen",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
})

export default function UpdatePassword() {
  const navigation = useNavigation()
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [securePassword1, setSecurePassword1] = useState(true);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/logo.png")}
      />
      <Text style={styles.textStyle}>Update Password</Text>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Image source={require("../../assets/images/lock.png")} style={styles.lockIcon} />
          <TextInput
            placeholder="New Password"
            style={styles.textInput}
            secureTextEntry={securePassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPress={() => setSecurePassword(!securePassword)}
          >
            <Image source={require("../../assets/images/eye-crossed.png")} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Image source={require("../../assets/images/lock.png")} style={styles.lockIcon} />
          <TextInput
            placeholder="Confirm Password"
            style={styles.textInput}
            secureTextEntry={securePassword1}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPress={() => setSecurePassword1(!securePassword1)}
          >
            <Image source={require("../../assets/images/eye-crossed.png")} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.greenButton}
        onPress={() => {
          if (password === confirmPassword) {
            Alert.alert("Success", "Password updated successfully");
            navigation.navigate('SignInWithEmail');
          } else {
            Alert.alert("Error", "Passwords do not match");
          }
        }}
      >
        <Text style={styles.buttonText}>Update Password</Text>
      </TouchableOpacity>
    </View>
  );
}