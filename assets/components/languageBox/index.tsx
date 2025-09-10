import i18n from "i18n-js"
import React, { useCallback, useState } from "react"
import { Platform, StyleSheet, View } from "react-native"
import { RadioButton } from "react-native-paper"

import { AutoImage } from "app/components"
import { Text } from "app/components/Text"
import { translate } from "app/i18n"
import { relativeHeight, relativeWidthToParent } from "app/utils/design"

const ENFlag = require("../../images/flags/en.png")
const FRFlag = require("../../images/flags/fr.png")

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    borderColor: "#c8c8c8",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: relativeWidthToParent(395),
  },
  image: {
    height: 32,
    marginRight: 24,
    width: 46,
  },
  languageBox: {
    borderColor: "#c8c8c8",
    borderRadius: 10,
    borderWidth: 1,
    flex: 1,
    height: relativeHeight(200),
    marginBottom: 87,
  },
  roundedView: {
    borderColor: "#c8c8c8",
    borderRadius: 50,
    borderWidth: 1,
    overflow: "hidden",
  },
  separator: {
    borderColor: "#c8c8c8",
    borderWidth: 1,
    height: StyleSheet.hairlineWidth,
  },
  textBox: {
    flexDirection: "column",
    width: relativeWidthToParent(197),
  },
})

type LanguageRowProps = {
  lang: "en" | "fr"
  onPress: (lang: string) => void
  checked: string
}

const LangConfig = {
  en: {
    image: ENFlag,
    title: "selectLanguageScreen.langTitle",
    desc: "selectLanguageScreen.langDesc",
  },
  fr: {
    image: FRFlag,
    title: "selectLanguageScreen.langTitleFr",
    desc: "selectLanguageScreen.langDescFr",
  },
}

const LanguageRow = ({ lang, onPress, checked }: LanguageRowProps) => {
  const config = LangConfig[lang]
  const isiOS = Platform.OS === "ios"

  const renderRadioBtn = () => {
    const radioBttnProps = {
      value: lang,
      status: checked === lang ? "checked" : "unchecked",
      onPress: () => onPress(lang),
    }

    if (isiOS) {
      return (
        <View style={styles.roundedView}>
          <RadioButton {...radioBttnProps} />
        </View>
      )
    }
    return <RadioButton {...radioBttnProps} />
  }

  return (
    <View style={styles.container}>
      <AutoImage style={styles.image} source={config.image} />
      <View style={styles.textBox}>
        <Text preset="heading" size="xs">
          {translate(config.title, {})}
        </Text>
        <Text preset="default" size="xs">
          {translate(config.desc, {})}
        </Text>
      </View>
      {renderRadioBtn()}
    </View>
  )
}

const LanguageBox = ({ onPressLang }) => {
  const [checked, setChecked] = useState("en")

  const onPress = useCallback(
    (lang: string) => {
      setChecked(lang)
      i18n.locale = lang
      onPressLang?.(lang)
    },
    [onPressLang],
  )

  return (
    <View style={styles.languageBox}>
      <LanguageRow lang="en" onPress={onPress} checked={checked} />
      <View style={styles.separator} />
      <LanguageRow lang="fr" onPress={onPress} checked={checked} />
    </View>
  )
}

export default LanguageBox
