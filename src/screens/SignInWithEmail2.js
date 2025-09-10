import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
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
  noAccText: {
    fontSize: 18,
  },
  textForgot: {
    fontSize: 16,
    fontWeight: "bold",
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
    alignItems: 'center',
  },
  radioOption: {
    flexDirection: "row",
    alignItems: 'center',
    marginHorizontal: 5
  },
  radioImage: {
    height: 20,
    width: 20,
  },
  radioText: {
    color: '#000000',
    fontSize: 12,
    marginLeft:2,
    fontWeight: '700',
  },
  signUpText: {
    fontWeight: "bold",
  },
  inputBox: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1.2,
    borderRadius: 10,
    borderWidth: 1,
    color: '#000000',
    fontSize: 14,
    height: 45,
    width: 65,
  },
  resendButtonText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'right',
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
  greenButton: {
    backgroundColor: "lightgreen", // Placeholder color
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    width: "80%",
    marginTop: 50,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    textAlign: "center",
    fontSize: 20,
  },
})

export default function SignInWithEmail2() {
  const isPasswordOrOtp = "password" // Static for visual recreation
  const username = "example@example.com" // Static for visual recreation
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/logo.png")}
      />
      <Text style={styles.textStyle}>Sign In</Text>
      <View style={styles.content}>
        <View style={styles.textInputContainer}>
          <Image source={require("../../assets/images/envelope.png")} style={{ width: 20, height: 20 }} />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {isPasswordOrOtp === 'password' ? (
          <View style={styles.textInputContainer}>
            <Image source={require("../../assets/images/lock.png")} style={styles.lockIcon} />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => { /* No action */ }}>
              <Image source={require("../../assets/images/eye_close.png")} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.otpInputContainer}>
            <TextInput style={styles.otpInput} keyboardType="numeric" maxLength={1} />
            <TextInput style={styles.otpInput} keyboardType="numeric" maxLength={1} />
            <TextInput style={styles.otpInput} keyboardType="numeric" maxLength={1} />
            <TextInput style={styles.otpInput} keyboardType="numeric" maxLength={1} />
          </View>
        )}
      </View>
      <View style={{ width: '78%', flexDirection: "row", justifyContent: "space-between",marginTop:isPasswordOrOtp !== 'password'?15:0 }}>
        <View style={styles.radioContainer}>
          <TouchableOpacity style={styles.radioOption} disabled={true}>
            <Image source={require('../../assets/images/radio_check.png')} style={styles.radioImage} />
            <Text style={styles.radioText}>{"Password"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.radioOption} disabled={true}>
            <Image source={require('../../assets/images/radio_uncheck.png')} style={styles.radioImage} />
            <Text style={styles.radioText}>{"OTP"}</Text>
          </TouchableOpacity>
        </View>
        {
          isPasswordOrOtp === 'password' ?
            <Text
              style={styles.resendButtonText}
              onPress={() => navigation.navigate('OtpVerify')}>              Forgot Password?
            </Text>
            :
            <Text
              style={styles.resendButtonText}
              onPress={() => navigation.navigate('OtpVerify')}>              Resend OTP
            </Text>
        }
      </View>
      <TouchableOpacity
        style={styles.greenButton}
        onPress={() => navigation.navigate('AuthenticatedStack')}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Sign In</Text>
      </TouchableOpacity>
 
    </View>
  )
}

