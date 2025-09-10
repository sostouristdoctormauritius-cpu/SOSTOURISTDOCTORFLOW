import React, { useRef } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

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
        fontSize: 14,
        marginTop: 8,
        textAlign: 'right',
    },
    textStyle: {
        marginBottom: 20,
    },
    textStyledes: {
        marginBottom: 50,
        marginHorizontal: 30,
        textAlign: "center"
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
    greenButton: {
        backgroundColor: "lightgreen", // Placeholder color
        padding: 15,
        alignItems: "center",
        borderRadius: 5,
        width: "80%",
    },
    headerContainer: {
        width: "100%",
        padding: 10,
        alignItems: "flex-start",
    },
    backButton: {
        fontSize: 18,
        color: "#000",
    },
})

export default function OtpVerify() {
  const firstInput = useRef(null)
  const secondInput = useRef(null)
  const thirdInput = useRef(null)
  const fourthInput = useRef(null)
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/logo.png")}
      />
      <Text style={styles.textStyle}>OTP Verification</Text>
      <View style={styles.content}>
        <Text style={styles.otpDescription}>
          Enter the OTP sent to your mobile number
        </Text>
        <View style={styles.otpContainer}>
          <TextInput
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            ref={firstInput}
            onChangeText={(text) => {
              if (text) {
                secondInput.current.focus()
              }
            }}
          />
          <TextInput
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            ref={secondInput}
            onChangeText={(text) => {
              if (text) {
                thirdInput.current.focus()
              } else {
                firstInput.current.focus()
              }
            }}
          />
          <TextInput
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            ref={thirdInput}
            onChangeText={(text) => {
              if (text) {
                fourthInput.current.focus()
              } else {
                secondInput.current.focus()
              }
            }}
          />
          <TextInput
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            ref={fourthInput}
            onChangeText={(text) => {
              if (!text) {
                thirdInput.current.focus()
              }
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.greenButton} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn't receive OTP?</Text>
        <TouchableOpacity>
          <Text style={styles.resendLink}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
