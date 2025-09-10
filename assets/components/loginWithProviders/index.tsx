import React from "react"
import { StyleSheet, View } from "react-native"

import { Text } from "app/components/Text"
import ProviderButton from "app/components/loginWithProviders/providerButton"
import { FontWeight, relativeWidth } from "app/utils/design"

const styles = StyleSheet.create({
  continueContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderColor: "#757575",
    width: 96,
  },
  providerContainer: {
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 20,
    width: relativeWidth(380),
  },
  textStyle: {
    color: "#757575",
    fontWeight: FontWeight.semibold,
    marginHorizontal: 10,
  },
})
const LoginProviders = () => {
  return (
    <>
      <View style={styles.continueContainer}>
        <View style={styles.horizontalLine} />
        <Text
          tx="signInWithEmailScreen.continueWith"
          preset="default"
          size="md"
          style={styles.textStyle}
        />
        <View style={styles.horizontalLine} />
      </View>
      <View style={styles.providerContainer}>
        <ProviderButton source={require("app/images/register/fb.png")} />
        <ProviderButton source={require("app/images/register/google.png")} />
        <ProviderButton source={require("app/images/register/apple.png")} />
      </View>
    </>
  )
}

export default LoginProviders
