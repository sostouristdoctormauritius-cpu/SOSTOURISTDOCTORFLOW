import { AutoImage, Header } from "app/components"
import { Screen } from "app/components/Screen"
import { Text } from "app/components/Text"
import GreenButton from "app/components/greenButton"
import { translate } from "app/i18n"
import { relativeWidth } from "app/utils/design"
import React, { useEffect, useRef, useState } from "react"
import OTPTextView from 'react-native-otp-textinput'
import { ImageStyle, StyleProp, StyleSheet, View, ActivityIndicator, Keyboard } from "react-native"
import useCountdown from "app/hook/useCountdown"
import { useNavigation, useRoute } from "@react-navigation/native"
import useOtpVerify from "app/hook/api/useOtpVerify"
import useOtpResend from "app/hook/api/useOtpResend"

import { getHash, startOtpListener, removeListener } from 'react-native-otp-verify';

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    content: {
        alignItems: "center",
        marginBottom: 32,
        paddingTop: 10,
        width: relativeWidth(384),
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
    otpLoader: {
        marginTop: 8,
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

})



export default function OtpVerify() {

    const { time, startCountdown, resetCountdown, status, formatTime } = useCountdown();
    useEffect(() => {
        startCountdown(60);
    }, [startCountdown]);
    const navigation = useNavigation<any>()
    const route = useRoute<any>()
    const otpInputRef = useRef<any>(null);
    const [otp, setOtp] = useState<string | undefined>('');
    const [token, setToken] = useState<string | number>(route?.params?.token);
    const [otpLoader, setOtpLoader] = useState<boolean>(false);
    const [isLoading, setIsloading] = useState<boolean>(false);
    let fromScreen = route?.params?.fromScreen
    
    useEffect(() => {
        console.log('route?.params?.tokenroute?.params?.token',route?.params?.token);
        if(route?.params?.token){
            setToken(route?.params?.token)
        }
        setOtp(route?.params?.otp)
        if (otpInputRef.current) {
            otpInputRef?.current?.setValue(route?.params?.otp); // This fills the input fields
        }
        // Keyboard.dismiss()
    }, [route?.params,route?.params?.token])
    
    const otpVerifyMtx = useOtpVerify();
    const onPressVerfyOtp = () => {
        setIsloading(true)
        otpVerifyMtx.mutate({ otp, token,fromScreen,username:route?.params?.username }, {
            onSuccess: (data) => {
                setOtp('')
                setToken('')
                resetCountdown();
                if (otpInputRef.current) {
                    otpInputRef?.current?.setValue(''); // This fills the input fields
                }
                setIsloading(false)
                console.log('Data from server:123', data); // ✅ you get the response here
            },
            onError: (error) => {
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
        otpResendMtx.mutate({ token }, {
            onSuccess: (data) => {
                setOtpLoader(false)
                setToken(data.token)
                resetCountdown();
                startCountdown(60);
                // setOtp(data?.otp)
                // if (otpInputRef.current) {
                //     otpInputRef?.current?.setValue(data?.otp); // This fills the input fields
                // }
                Keyboard.dismiss()
                console.log('Data from server:123', data); // ✅ you get the response here
            },
            onError: (error) => {
                console.error('Error registering user:', error);
                setOtpLoader(false)
            },
        })
    }


    useEffect(() => {
        getHash()
            .then(hash => {
                console.log('App Hash:', hash);
                if (hash && hash.length > 0) {
                    hash[0] !== "QOFyIjAZIif" && console.log('hash:', hash[0])
                }
                // 
                // Send this hash to your backend to include in the SMS message
            })
            .catch(error => console.log('Error getting hash:', error));
    }, [])

    useEffect(() => {
        startOtpListener(message => {
            if (message) {
                console.log('messagemessage-', message);
                // Example: Extract 4-digit OTP using regex
                const otpMatch = /(\d{4})/g.exec(message);
                console.log('otpMatch[1]--', otpMatch);

                if (otpMatch && otpMatch[1]) {
                    if (otpInputRef.current) {
                        otpInputRef?.current?.setValue(otpMatch[1]); // This fills the input fields
                    }
                    setOtp(otpMatch[1]); // Set the OTP in state
                    Keyboard.dismiss(); // Optional: Hide keyboard
                }
            }else{
                console.log('else part---'+JSON.stringify(message))
            }
        }).catch((error)=>{
            console.log('error otp getting',JSON.stringify(error))
        });

        // Cleanup listener on component unmount
        return () => removeListener();
    }, []);

    return (
        <Screen
            preset="auto"
            contentContainerStyle={styles.container}
            safeAreaEdges={["top", "bottom"]}
        >
            <Header
                leftIcon={'back'}
                leftIconColor={'#000'}
                onLeftPress={() => navigation.goBack()}
            />
            <AutoImage
                style={styles.image as StyleProp<ImageStyle>}
                source={require("app/images/logo/logo.png")}
            />
            <Text preset="heading" size="xl" style={styles.textStyle} >
                {translate('otpVerify.verification')}
            </Text>
            <Text preset="heading" size="sm" style={styles.textStyledes} >
                {/* {translate('otpVerify.verificationdes')} */}
                Please enter the code sent to {route?.params?.username}
            </Text>
            <View style={styles.content}>
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
                {otpLoader ? (
                    <ActivityIndicator color={'#30B549'} style={styles.otpLoader} />
                ) : (
                    <Text
                        onPress={() => {
                            status !== 'running' && onPressResend();
                        }}
                        style={styles.resendButtonText}>
                        {status === 'running' ? formatTime(time) : translate('otpVerify.resendOtp')}
                    </Text>
                )}
            </View>
            <GreenButton
                isSecondary
                isLoading={isLoading}
                onPress={() => { onPressVerfyOtp() }}
                buttonTitle={translate("otpVerify.verify", {
                    defaultValue: "Reset",
                })}
            />
        </Screen>
    )
}
