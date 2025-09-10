import { useNavigation } from "@react-navigation/native"
import { AutoImage } from "app/components"
import { Screen } from "app/components/Screen"
import { Text } from "app/components/Text"
import GreenButton from "app/components/greenButton"
import RoundedTextInput from "app/components/roundedTextInput"
import { SCREENS_REGISTER_WITH_EMAIL, SCREENS_SIGNIN_WITH_EMAIL2 } from "app/constants/Screens"
import useLoginUser from "app/hook/api/useLoginUser"
import { translate } from "app/i18n"
import { FontWeight, relativeWidth } from "app/utils/design"
import { emailRegex } from "app/utils/sosUtils"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { ImageStyle, StyleProp, StyleSheet, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

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
    marginBottom: 32,
    paddingTop: 10,
    width: relativeWidth(384),
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
  flexRow: {
    flexDirection: "row",
    marginTop: 20
  },
  greenButton: {
    width: '80%',
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
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "55%",
    marginTop: 20,
  },
  radioImage: {
    height: 20,
    width: 20,
  },
  radioOption: {
    flexDirection: "row",
  },
  radioText: {
    marginLeft: 5,
  },
  roundedView: {
    borderColor: "#c8c8c8",
    borderRadius: 50,
    borderWidth: 1,
    overflow: "hidden",
  },
  secondaryColor: {
    color: "#30B549", // theme.colors.secondary
  },
  signUpText: {
    fontWeight: FontWeight.bold,
  },
  textForgot: {
    fontSize: 16,
    fontWeight: FontWeight.semibold,
  },
  textStyle: {
    marginBottom: 35,
  },
})


const emailRegex1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const mobileRegex = /^[0-9]{8,16}$/

export default function SignInWithEmail() {
  const navigation = useNavigation<any>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
    },
  })

  const loginMutation = useLoginUser()

  const onPressSignIn = (data: { username: string; }) => {
    const input = data.username
    if (emailRegex.test(input)) {
      navigation.navigate(SCREENS_SIGNIN_WITH_EMAIL2, { username: input, type: 'email' })
      console.log("Email login with", input)
    } else if (mobileRegex.test(input)) {
      navigation.navigate(SCREENS_SIGNIN_WITH_EMAIL2, { username: input, type: 'mobile' })
      console.log("Mobile login with", input)
    }
  }
 

  return (
    <Screen
      preset="auto"
      contentContainerStyle={styles.container}
      safeAreaEdges={["top", "bottom"]}
    >
      <AutoImage
        style={styles.image as StyleProp<ImageStyle>}
        source={require("app/images/logo/logo.png")}
      />
      <Text tx="signInWithEmailScreen.title" preset="heading" size="xl" style={styles.textStyle} />
      <View style={styles.content}>
        <Controller
          control={control}
          rules={{
            required: translate('formValidations.required'),
            validate: (val) =>
              emailRegex1.test(val) || mobileRegex.test(val) ? true : translate('formValidations.emailandpassword'),

          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <RoundedTextInput
              placeholder="Email/Mobile Number"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              leftImageSource={require("app/images/register/envelope.png")}
              keyboardType="email-address"
            />
          )}
          name="username"
        />
        {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
       
      </View>

      <GreenButton
        isSecondary
        onPress={handleSubmit(onPressSignIn)}
        buttonStyle={styles.greenButton}
        buttonTitle={translate("signInWithEmailScreen.login", { defaultValue: "Sign up" })}
        isLoading={loginMutation.isPending}
      />
 

      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS_REGISTER_WITH_EMAIL)}
        style={styles.flexRow}
      >
        <Text style={styles.noAccText}>{translate("signInWithEmailScreen.noAccount")} </Text>
        <Text style={[styles.signUpText, styles.secondaryColor]}>
          {translate("signInWithEmailScreen.noAccount2")}
        </Text>
      </TouchableOpacity>
    </Screen>
  )
}
