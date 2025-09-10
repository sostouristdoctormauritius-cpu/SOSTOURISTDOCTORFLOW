import React, { useState } from "react"
import { StyleSheet } from "react-native"

import { useNavigation } from "@react-navigation/native"
import { AutoImage } from "app/components"
import { Screen } from "app/components/Screen"
import { Text } from "app/components/Text"
import GreenButton from "app/components/greenButton"
import LanguageBox from "app/components/languageBox"
import { SCREENS_ABOUT } from "app/constants/Screens"
import EphemeralStore from "app/manager/EphemeralStore"

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    height: 62,
    width: "90%",
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  descStyle: {
    marginBottom: 41,
    paddingLeft: 61,
    paddingRight: 47,
    textAlign: "center",
  },
  image: {
    height: 40,
    marginBottom: 41.5,
    marginTop: 20,
    width: 230,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
  },
  textStyle: {
    marginBottom: 9,
  },
})
export default function LanguageSelection() {
  const [userLang, setUserLang] = useState("en")
  const navigation = useNavigation()

  React.useEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [navigation])

  const onPress = () => {
    EphemeralStore.set("language", userLang)
    navigation.navigate(SCREENS_ABOUT)
  }

  const onPressLang = (lang: string) => {
    setUserLang(lang)
    EphemeralStore.set("language", lang)
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={styles.container}
      safeAreaEdges={["top", "bottom"]}
    >
      <AutoImage style={styles.image} source={require("../../images/smallLogo/logo.png")} />
      <Text tx="selectLanguageScreen.title" preset="heading" size="xl" style={styles.textStyle} />
      <Text
        tx="selectLanguageScreen.description"
        preset="default"
        size="xs"
        style={styles.descStyle}
      />
      <LanguageBox onPressLang={onPressLang} />
      <GreenButton
        onPress={onPress}
        isSecondary
        buttonStyle={styles.button}
        labelStyle={styles.labelStyle}
      />
    </Screen>
  )
}
