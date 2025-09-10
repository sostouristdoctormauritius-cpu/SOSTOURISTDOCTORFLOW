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
    backgroundColor: '#ffffff',
    paddingTop: 40,
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
    marginBottom: 50,
    marginTop: 20,
    width: 200,
  },
  noAccText: {
    fontSize: 16,
    color: '#888888',
  },
  textForgot: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#F71E27', // Changed from green to consistent red color
  },
  textStyle: {
    marginBottom: 35,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
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
    color: '#F71E27', // Changed from green to consistent red color
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
    height: 55,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: '#FAFAFA',
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333333',
  },
  lockIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#888888',
  },
  eyeIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    tintColor: '#888888',
  },
  radioContainerView: {
    width: '78%',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioContainerViewWithMargin: {
    width: '78%',
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },
  redButton: {
    backgroundColor: "#F71E27", // Consistent red color
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: "center",
    borderRadius: 10,
    width: "80%",
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
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
  envelopeIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#888888',
  },
})

export default function SignInWithEmail2() {
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
          <Image source={require("../../assets/images/envelope.png")} style={styles.envelopeIcon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#888888"
            style={styles.textInput}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.textInputContainer}>
          <Image source={require("../../assets/images/lock.png")} style={styles.lockIcon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888888"
            style={styles.textInput}
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <Image source={require("../../assets/images/eye-crossed.png")} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnForgot}
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text style={[styles.blackColor, styles.textForgot]}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.redButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.flexRow}>
        <Text style={styles.noAccText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterWithEmail')}>
          <Text style={styles.signUpText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}