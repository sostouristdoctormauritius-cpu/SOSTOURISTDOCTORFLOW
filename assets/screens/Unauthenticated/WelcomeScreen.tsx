import React from "react"
import { Image, StyleSheet } from "react-native"

import { useNavigation } from "@react-navigation/native"

import { Screen } from "app/components/Screen"
import GreenButton from "app/components/greenButton"
import { SCREENS_HOME, SCREENS_LANG_SELECTION } from "app/constants/Screens"
import useGetConfig from "app/hook/api/useGetConfig"
import { useStores } from "app/models"

export default function WelcomeScreen() {
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()

  useGetConfig()

  const navigation = useNavigation()

  const onPress = () => {
    const nextScreen = isAuthenticated ? SCREENS_HOME : SCREENS_LANG_SELECTION
    navigation.navigate(nextScreen)
  }

  return (
    <Screen preset="fixed" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <Image
        style={styles.imageFull}
        source={require("../../images/welcome/welcome-doc.png")}
        resizeMode="cover"
      />
      <GreenButton onPress={onPress} buttonStyle={styles.button} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 25,
    width: "90%",
    bottom: 40
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imageFull: {
    height: "100%",
    width: "100%",
  },
})
