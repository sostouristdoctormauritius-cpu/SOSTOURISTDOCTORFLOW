import { useForm } from "react-hook-form"
import { StyleSheet, View, StatusBar } from "react-native"

import { useNavigation } from "@react-navigation/native"
import { AutoImage } from "app/components"
import Link from "app/components/Link"
import { Screen } from "app/components/Screen"
import { Text } from "app/components/Text"
import FormInputController from "app/components/formInput"
import renderField from "app/components/formInput/renderField"
import GreenButton from "app/components/greenButton"
import TermsAndConditions from "app/components/termsAndConditions"
import { SCREENS_SIGNIN_WITH_EMAIL } from "app/constants/Screens"
import { translate } from "app/i18n"
import { relativeWidth } from "app/utils/design"
import { emailRegex } from "app/utils/sosUtils"
import React from "react"

import useEmailVerify from "app/hook/api/useEmailVerify"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    width: relativeWidth(384),
  },
  image: {
    height: 40,
    marginBottom: 70,
    marginTop: 15,
    width: 230,
  },
  link: {
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  textStyle: {
    marginBottom: 30,
  },
  tnCBottom: {
    marginBottom: 24,
  },
})

const LogoPNG = require("app/images/logo/logo.png")



export default function RegisterWithEmail() {
  const navigation = useNavigation<any>()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  })
  const emailVerifyMutation = useEmailVerify()
  const onPressSignUp = (data: { email: string; }) => {
    const email = data.email

    console.log('emailemail',email);
    emailVerifyMutation.mutate({ email:email }, {
      onSuccess: (data) => {
        console.log('emailVerifyMutation Data from server:123', data); // ✅ you get the response here
      },
      onError: (error) => {
        console.error('emailVerifyMutation Error registering user:', error);
      },
    })
    // navigation.navigate(SCREENS_COMPLETE_PROFILE, { email })
  }



  return (
    <Screen preset="auto" contentContainerStyle={styles.container} safeAreaEdges={["bottom"]}>
      {LogoPNG && <AutoImage style={styles.image} source={LogoPNG} />}
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Text
        tx="registerWithEmailScreen.title"
        preset="heading"
        size="xl"
        style={styles.textStyle}
      />
      <View style={styles.content}>
        <FormInputController
          control={control}
          rules={{
            required: translate("formValidations.required"),
            pattern: {
              value: emailRegex,
              message: translate("formValidations.invalidEmail"),
            },
          }}
          render={({ field }: { field: any }) =>
            renderField({
              field,
              placeholder: "Email",
              leftImageSource: require("app/images/register/envelope.png"),
              keyboardType: "email-address",
              securedText: false,
            })
          }
          name={"email"}
        />

        {errors.email && <Text style={{
          width: "80%",
          top: -20,
          justifyContent: 'center',
          color: "red",
          alignItems: "center",
          fontSize: 15,
          letterSpacing: 1
        }}>{errors.email.message}</Text>}
        {/* <FormInputController
          control={control}
          rules={minLengthRule}
          render={({ field }: { field: any }) =>
            renderField({
              field,
              placeholder: "Password",
              includeLeftImage: true,
              leftImageSource: require("app/images/register/lock.png"), // Use the correct left image
              keyboardType: "default", // Correct keyboardType for text
              securedText: !toggle, // Use the toggle state for secure text entry
              rightImageSource: !toggle
                ? require("app/images/register/eye_close.png") // Icon for visible password
                : require("app/images/register/eye_open.png"), // Icon for hidden password
              onRightIconPress: () => {
                setToggle(!toggle)
              }
            })
          }
          name={"password"}
        />
        {errors.password && <Text style={{
          width: "80%",
          top: -20,
          justifyContent: 'center',
          color: "red",
          alignItems: "center",
          fontSize: 15, letterSpacing: 1
        }}>{errors.password.message}</Text>} */}
      </View>
      <GreenButton
        isSecondary
        buttonStyle={{ height: 50, padding: 0, width: '80%', marginTop: 20 }}
        onPress={handleSubmit(onPressSignUp)}
        isLoading={emailVerifyMutation.isPending}
        buttonTitle={translate("registerWithEmailScreen.nexttxt", {
          defaultValue: "Sign up",
        })}
      />
      <TermsAndConditions containerStyle={styles.tnCBottom} />
      <Link
        textContent={translate("registerWithEmailScreen.alreadyAccount", {})}
        txtStyle={styles.link}
        onPress={() => navigation.navigate(SCREENS_SIGNIN_WITH_EMAIL)}
      />
    </Screen>
  )
}

