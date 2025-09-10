import { useNavigation } from "@react-navigation/native"
import { translate } from "app/i18n"
import { relativeWidth } from "app/utils/design"
import React from "react"
import { Text as RNText, StyleProp, StyleSheet, ViewStyle } from "react-native"
import { typography } from "app/theme"

const styles = StyleSheet.create({
  tcContainer: {
    marginBottom: 115,
    marginTop: 45,
    textAlign: "center",
    width: relativeWidth(339),
  },
  tcLink: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 18,
  },
  textStyle: {
    textDecorationLine: "underline",
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 20,
  },
})

type TermsAndConditionsProps = {
  containerStyle?: StyleProp<ViewStyle>
}
const TermsAndConditions = ({ containerStyle }: TermsAndConditionsProps) => {
  const navigation = useNavigation<any>()

  const onPress = () => navigation.navigate("ViewPdf")

  return (
    <RNText style={[styles.tcContainer, containerStyle]} key="texts">
      <RNText style={{ fontFamily: typography.secondary?.normal }}>{translate("registerScreen.policy1", {})}</RNText>
      <RNText onPress={onPress}
        style={styles.textStyle}>
        {translate("registerScreen.policy2", {})}
      </RNText>

      <RNText style={{ fontFamily: typography.secondary?.normal }}>{translate("registerScreen.policy3", {})}</RNText>

      <RNText onPress={onPress}
        style={styles.textStyle}>
        {`${translate("registerScreen.policy4", {})}\n`}
      </RNText>

      <RNText>{translate("registerScreen.policy3", {})}</RNText>
      <RNText
        onPress={onPress}
        style={styles.textStyle}>
        {translate("registerScreen.policy5", {})}
      </RNText>
    </RNText>
  )
}

export default TermsAndConditions
