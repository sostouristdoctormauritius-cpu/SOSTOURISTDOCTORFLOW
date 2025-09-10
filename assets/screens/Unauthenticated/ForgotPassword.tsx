
import { AutoImage } from "app/components"
import { Screen } from "app/components/Screen"
import { Text } from "app/components/Text"
import GreenButton from "app/components/greenButton"
import RoundedTextInput from "app/components/roundedTextInput"

import useForgotPassword from "app/hook/api/useForgotPassword"
import { translate } from "app/i18n"
import { relativeWidth } from "app/utils/design"
import { emailRegex } from "app/utils/sosUtils"
import React  from "react"
import { Controller, useForm } from "react-hook-form"
import {   ImageStyle, StyleProp, StyleSheet, View } from "react-native"
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
  textStyle: {
    marginBottom: 35,
  },
})
export default function ForgotPassword() {

  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const forgotPwdMutation = useForgotPassword()

  const onPressReset = (data: { email: string }) => {
    const email = data.email
    forgotPwdMutation.mutate({ email })
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
      <Text tx="forgotPasswordScreen.title" preset="heading" size="xl" style={styles.textStyle} />
      <View style={styles.content}>
        <Controller
          control={control}
          rules={{
            required: translate("formValidations.required"),
            pattern: {
              value: emailRegex,
              message: translate("formValidations.invalidEmail"),
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <RoundedTextInput
              placeholder="Email"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              leftImageSource={require("app/images/register/envelope.png")}
              keyboardType="email-address"
            />
          )}
          name="email"
        />
        {errors.email && <Text style={{
          width: "80%",
          top: -20,
          justifyContent: 'center',
          color: "red",
          alignItems: "center",
          fontSize: 15, letterSpacing: 1
        }}>{errors.email.message}</Text>}
      </View>
      <GreenButton
        isSecondary
        // onPress={()=>{navigation.navigate(OTP_VERIFY, { token:'asdasd', otp: 1222,fromScreen:'forgotPass' })}} 
        onPress={handleSubmit(onPressReset)} 
        buttonTitle={translate("forgotPasswordScreen.reset", {
          defaultValue: "Reset",
        })}
        isLoading={forgotPwdMutation.isPending}
      />
    </Screen>
  )
}
