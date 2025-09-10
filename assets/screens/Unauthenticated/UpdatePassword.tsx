import {  useRoute } from "@react-navigation/native"
import { AutoImage } from "app/components"
import { Screen } from "app/components/Screen"
import { Text } from "app/components/Text"
import GreenButton from "app/components/greenButton"
import RoundedTextInput from "app/components/roundedTextInput"
import useUpdatePassword from "app/hook/api/useUpdatePassword"
import { translate } from "app/i18n"
import { FontWeight, relativeWidth } from "app/utils/design"
import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { ImageStyle, StyleProp, StyleSheet, View } from "react-native"

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
    fontWeight: FontWeight.semibold,
  },
  textStyle: {
    marginBottom: 35,
  },
})
export default function UpdatePassword() {
  const [securePassword, setSecurePassword] = useState(true)
  const [securePassword1, setSecurePassword1] = useState(true)
  
  const route = useRoute<any>()
  let token = route?.params?.token;

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      password: "",
      cpassword: "dasdasdasdasd",
    },
  })

  const updatePasswordMutation = useUpdatePassword()
  const password = watch("password");
  const onPressSignIn = (data: { cpassword: string; password: string }) => {
    console.log('datadata',data);
    updatePasswordMutation.mutate({ password:data.password, token })
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
            required: translate("formValidations.required"),
            minLength: {
              value: 8,
              message: translate("formValidations.minLengthPassword"),
            },
            validate: (value: any) => {
              if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                return translate("formValidations.passwordLetterNumber")
              }
              return true
            },
          }}
          render={({ field: { onChange, onBlur, _value } }) => (
            <RoundedTextInput
              placeholder="Password"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry={securePassword}
              rightImageSource={!securePassword ? require("app/images/register/eye_open.png") : require("app/images/register/eye_close.png")}
              onRightIconPress={() => { setSecurePassword(!securePassword) }}
              leftImageSource={require("app/images/register/lock.png")}
            />
          )}
          name="password"
        />
        {errors.password && <Text style={{
          width: "80%",
          top: -20,
          justifyContent: 'center',
          color: "red",
          alignItems: "center",
          fontSize: 15, letterSpacing: 1
        }}>{errors.password.message}</Text>}

       <Controller
          control={control}
          rules={{
            required: translate("formValidations.required"),
            validate: value =>
              value === password || translate("formValidations.passwordMismatch"),
          }}
          render={({ field: { onChange, onBlur, _value } }) => (
            <RoundedTextInput
              placeholder="Confirm Password"
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry={securePassword1}
              rightImageSource={!securePassword1 ? require("app/images/register/eye_open.png") : require("app/images/register/eye_close.png")}
              onRightIconPress={() => { setSecurePassword1(!securePassword1) }}
              leftImageSource={require("app/images/register/lock.png")}
            />
          )}
          name="cpassword"
        />
        {errors.cpassword && <Text style={{
          width: "80%",
          top: -20,
          justifyContent: 'center',
          color: "red",
          alignItems: "center",
          fontSize: 15, letterSpacing: 1
        }}>{errors.cpassword.message}</Text>}
      </View>
      <GreenButton
        isSecondary
        onPress={handleSubmit(onPressSignIn)}
        buttonTitle={translate("updatepassword.btnTxt", {
          defaultValue: "Sign up",
        })}
        isLoading={updatePasswordMutation.isPending}
      />
      {/* <Button
        mode="text"
        style={styles.btnForgot}
        labelStyle={[styles.textForgot, styles.blackColor]}
        onPress={() => {
          navigation.navigate(SCREENS_FORGOT_PASSWORD)
        }}
      >
        {translate("signInWithEmailScreen.forgotPassword", {})}
      </Button> */}
      {/* <LoginProviders /> */}
      {/* <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS_REGISTER_WITH_EMAIL)}
        style={styles.flexRow}
      >
        <Text style={styles.noAccText}>{translate("signInWithEmailScreen.noAccount", {})} </Text>
        <Text style={{ color: theme.colors.secondary, fontWeight: FontWeight.bold }}>
          {translate("signInWithEmailScreen.noAccount2", {})}
        </Text>
      </TouchableOpacity> */}
    </Screen>
  )
}
