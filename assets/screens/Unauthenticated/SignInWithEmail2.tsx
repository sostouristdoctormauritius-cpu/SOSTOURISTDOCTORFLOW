import { useNavigation, useRoute } from "@react-navigation/native"
import { AutoImage } from "app/components"
import { Screen } from "app/components/Screen"
import { Text } from "app/components/Text"
import GreenButton from "app/components/greenButton"
import RoundedTextInput from "app/components/roundedTextInput"
import useLoginUser from "app/hook/api/useLoginUser"
import useOtpResend from "app/hook/api/useOtpResend"
import useCountdown from "app/hook/useCountdown"
import { translate } from "app/i18n"
import { FontWeight, relativeWidth } from "app/utils/design"
import React, { useRef, useState } from "react"
import { ActivityIndicator, Image, ImageStyle, Keyboard, StyleProp, StyleSheet, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import OTPTextView from "react-native-otp-textinput"
import useOtpVerify from "app/hook/api/useOtpVerify"
import Toast from 'react-native-simple-toast';
import LoaderModal from "app/components/LoaderModal"
import useForgotPassword from "app/hook/api/useForgotPassword"
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
  },
  content: {
    alignItems: "center",
    // marginBottom: 32,
    paddingTop: 10,
    width: relativeWidth(384),
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
    fontWeight: FontWeight.semibold,
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
    alignItems: 'center'
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
    fontWeight: FontWeight.bold,
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
})

export default function SignInWithEmail() {
  const [securePassword, setSecurePassword] = useState(true)
  const [isPasswordOrOtp, setIsPasswordOrOtp] = useState('password')
  const route = useRoute<any>()
  const { time, startCountdown, resetCountdown, status, formatTime } = useCountdown();
  const [otpLoader, setOtpLoader] = useState<boolean>(false);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [token, setToken] = useState<string | number>(route?.params?.token);
  const otpInputRef = useRef<any>(null);
  const [otp, setOtp] = useState<any>('');
  const [password, setPassword] = useState<any>('');


  // useEffect(() => {
  //     startCountdown(60);
  // }, []);




  const otpVerifyMtx = useOtpVerify();

  const onPressVerfyOtp = () => {
    console.log('onPressVerfyOtponPressVerfyOtp', token, otp);
    if (otp && otp?.length <= 0) {
      Toast.show('Enter otp', Toast.LONG,);
      return false
    }
    if (!/^[0-9]+$/.test(otp)) {
      Toast.show('Enter valid otp', Toast.LONG,);
      return false
    }
    setIsloading(true)
    otpVerifyMtx.mutate({ otp: otp, token, fromScreen: 'fromScreen' }, {
      onSuccess: (data: any) => {
        setIsloading(false)
        console.log('Data from server:123', data); // ✅ you get the response here
      },
      onError: (error: any) => {
        setIsloading(false)
        console.error('Error registering user:', error);
      },
    })
  }

  const otpResendMtx = useOtpResend();

  const onPressResend = () => {
    setOtpLoader(true)
    setOtp('')
    if (otpInputRef.current) {
      otpInputRef?.current?.setValue(''); // This fills the input fields
    }
    otpResendMtx.mutate({ token: token }, {
      onSuccess: (data) => {
        setOtpLoader(false)
        setToken(data.token)
        resetCountdown();
        startCountdown(60);
        Keyboard.dismiss()
        console.log('Data from server:123', data); // ✅ you get the response here
      },
      onError: (error) => {
        console.error('Error registering user:', error);
        setOtpLoader(false)
      },
    })
  }

  const loginMutation = useLoginUser()
  const onPressSignIn = () => {
    if (!route?.params?.username) {
      Toast.show('Username is missing. Please go back and try again.', Toast.LONG);
      return false;
    }
    if (!password) {
      Toast.show('Please enter password', Toast.LONG);
      return false;
    }
    if (password.length <= 7) {
      Toast.show(translate("formValidations.minLengthPassword"), Toast.LONG);
      return false;
    }

    setIsloading(true);
    loginMutation.mutate({ username: route?.params?.username, password, isPasswordOrOtp }, {
      onSuccess: (data: any) => {
        setIsloading(false);
        console.log('Data from onPressSignIn server:123', data); // ✅ you get the response here
      },
      onError: (error: any) => {
        setIsloading(false);
        console.error('Error onPressSignIn registering user:', error);
      },
    });
  };

  const btnGetOtp = () => {
    let username = route?.params?.username;
    if (!username) {
      Toast.show('Username is missing. Please go back and try again.', Toast.LONG);
      return false;
    }
    setIsloading(true);
    loginMutation.mutate({ username: username, isPasswordOrOtp: 'otp' }, {
      onSuccess: (data: any) => {
        setIsloading(false);
        setToken(data.token);
        console.log('Data from btnGetOtp server:123', data); // ✅ you get the response here
      },
      onError: (error: any) => {
        setIsloading(false);
        console.error('Error registering user:', error);
      },
    });
  };

  const forgotPwdMutation = useForgotPassword()

  const btnForgot = () => {
    const email = route?.params?.username
    setIsloading(true);
    forgotPwdMutation.mutate({ email }, {
      onSuccess: (data: any) => {
        setIsloading(false)
        console.log('Data from btnGetOtp server:123', data); // ✅ you get the response here
      },
      onError: (error: any) => {
        setIsloading(false)
        console.error('Error registering user:', error);
      },
    })
  }

  const renderRadioBtn = () => {
    const passwordImg = isPasswordOrOtp === 'password'
      ? require('../../../assets/images/radio_check.png')
      : require('../../../assets/images/radio_uncheck.png')
    const otpImg = isPasswordOrOtp === 'otp'
      ? require('../../../assets/images/radio_check.png')
      : require('../../../assets/images/radio_uncheck.png')

    return (
      <View style={styles.radioContainer}>
        <TouchableOpacity disabled={ isPasswordOrOtp === 'password'} onPress={() => setIsPasswordOrOtp('password')} style={styles.radioOption}>
          <Image source={passwordImg} style={styles.radioImage} />
          <Text style={styles.radioText}>{"Password"}</Text>
        </TouchableOpacity>

        <TouchableOpacity disabled={ isPasswordOrOtp === 'otp'} onPress={() => { setIsPasswordOrOtp('otp'); btnGetOtp() }} style={styles.radioOption}>
          <Image source={otpImg} style={styles.radioImage} />
          <Text style={styles.radioText}>{"OTP"}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={styles.container}
      safeAreaEdges={["top", "bottom"]}
    >
      <LoaderModal
        visible={isLoading}
      />
      <AutoImage
        style={styles.image as StyleProp<ImageStyle>}
        source={require("app/images/logo/logo.png")}
      />
      <Text tx="signInWithEmailScreen.title" preset="heading" size="xl" style={styles.textStyle} />
      <View style={styles.content}>
        {route?.params?.type == 'mobile' ? <Text style={{ textAlign: 'center', marginBottom: 15 }}>{translate("signInWithEmailScreen.phoneNumber")} {'\n'} {route?.params?.username}</Text> :
          <Text style={{ textAlign: 'center', marginBottom: 15 }}>{translate("signInWithEmailScreen.emailAddress")} {'\n'} {route?.params?.username}</Text>}

        {
          isPasswordOrOtp === 'password' ?
            <>
              <RoundedTextInput
                placeholder="Password"
                value={password}
                onChangeText={(tx) => { setPassword(tx) }}
                secureTextEntry={securePassword}
                rightImageSource={
                  !securePassword
                    ? require("app/images/register/eye_open.png")
                    : require("app/images/register/eye_close.png")
                }
                onRightIconPress={() => setSecurePassword(!securePassword)}
                leftImageSource={require("app/images/register/lock.png")}
              />
            </>
            :
            <>
              <OTPTextView
                ref={otpInputRef}
                textInputStyle={styles.inputBox}
                handleTextChange={val => {
                  setOtp(val);
                }}
                inputCount={4}
                keyboardType="numeric"
                tintColor={'#30B549'}
                autoFocus
                defaultValue={otp}
              />
            </>
        }
      </View>
      <View style={{ width: '78%', flexDirection: "row", justifyContent: "space-between",marginTop:isPasswordOrOtp !== 'password'?15:0 }}>
        {renderRadioBtn()}
        {isPasswordOrOtp === 'password' ?
          <Text
            onPress={() => btnForgot()}
            style={styles.resendButtonText}>
            {translate("signInWithEmailScreen.forgotPassword")}
          </Text>
          :
          <>
            {otpLoader ? (
              <ActivityIndicator color={'#30B549'}  />
            ) : (
              <Text
                onPress={() => {
                  status !== 'running' && onPressResend();
                }}
                style={styles.resendButtonText}>
                {status === 'running' ? formatTime(time) : translate('signInWithEmailScreen.resendOtp')}
              </Text>
            )}
          </>
        }
      </View>
      <GreenButton
        isSecondary
        buttonStyle={{width:'80%',marginTop:50}}
        onPress={() => { isPasswordOrOtp == 'password' ? onPressSignIn() : onPressVerfyOtp() }}
        buttonTitle={translate("signInWithEmailScreen.login", { defaultValue: "Sign up" })}
      />
 
    </Screen>
  )
}
