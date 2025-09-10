import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
    marginHorizontal: 30,
  },
  formContainer: {
    width: '85%',
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: "#DDDDDD",
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    textAlign: "center",
    fontSize: 24,
    color: '#333333',
    fontWeight: 'bold',
  },
  activeOtpInput: {
    borderColor: "#F71E27",
    borderWidth: 2,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  timerText: {
    fontSize: 16,
    color: '#666666',
  },
  resendContainer: {
    alignItems: "center",
  },
  resendText: {
    color: '#666666',
    fontSize: 16,
  },
  resendLink: {
    color: "#F71E27",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 10,
  },
  infoContainer: {
    backgroundColor: '#FFF8E1',
    borderRadius: 12,
    padding: 20,
    marginVertical: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    lineHeight: 20,
  },
  backButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#F71E27',
    fontWeight: '600',
  },
})

export default function OtpVerify() {
  const firstInput = useRef(null)
  const secondInput = useRef(null)
  const thirdInput = useRef(null)
  const fourthInput = useRef(null)
  const navigation = useNavigation()
  const [otp, setOtp] = useState(['', '', '', ''])
  
  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    
    // Move to next input if text is entered
    if (text && index < 3) {
      switch(index) {
        case 0: secondInput.current.focus(); break;
        case 1: thirdInput.current.focus(); break;
        case 2: fourthInput.current.focus(); break;
      }
    }
    
    // Move to previous input if text is deleted
    if (!text && index > 0) {
      switch(index) {
        case 1: firstInput.current.focus(); break;
        case 2: secondInput.current.focus(); break;
        case 3: thirdInput.current.focus(); break;
      }
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo.png")}
          />
          <Text style={styles.appName}>SOS Doctor</Text>
        </View>
        
        <View style={styles.formContainer}>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.subtitle}>
            Enter the 4-digit code sent to your mobile number
          </Text>
          
          <View style={styles.otpContainer}>
            <TextInput
              style={[styles.otpInput, otp[0] !== '' && styles.activeOtpInput]}
              keyboardType="numeric"
              maxLength={1}
              ref={firstInput}
              value={otp[0]}
              onChangeText={(text) => handleOtpChange(text, 0)}
            />
            <TextInput
              style={[styles.otpInput, otp[1] !== '' && styles.activeOtpInput]}
              keyboardType="numeric"
              maxLength={1}
              ref={secondInput}
              value={otp[1]}
              onChangeText={(text) => handleOtpChange(text, 1)}
            />
            <TextInput
              style={[styles.otpInput, otp[2] !== '' && styles.activeOtpInput]}
              keyboardType="numeric"
              maxLength={1}
              ref={thirdInput}
              value={otp[2]}
              onChangeText={(text) => handleOtpChange(text, 2)}
            />
            <TextInput
              style={[styles.otpInput, otp[3] !== '' && styles.activeOtpInput]}
              keyboardType="numeric"
              maxLength={1}
              ref={fourthInput}
              value={otp[3]}
              onChangeText={(text) => handleOtpChange(text, 3)}
            />
          </View>
          
          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>Resend code in 02:59</Text>
          </View>
          
          <Button
            title="Verify OTP"
            onPress={() => navigation.navigate('UpdatePassword')}
            disabled={otp.some(digit => digit === '')}
          />
          
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't receive OTP?</Text>
            <TouchableOpacity>
              <Text style={styles.resendLink}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              If you're having trouble receiving the OTP, please check your spam folder or contact support.
            </Text>
          </View>
          
          <View style={styles.backButtonContainer}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>Back to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}