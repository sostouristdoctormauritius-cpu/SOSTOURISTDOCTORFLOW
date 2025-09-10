import React from "react"
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native"
import { Button, useTheme } from "react-native-paper"

import { translate } from "app/i18n"

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    height: 62,
    width: "90%",
  },
  labelStyle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
  },
  loadingButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  loadingLabel: {
    opacity: 0.5,
  },
})

type GreenButtonProps = {
  onPress: () => void
  labelStyle?: StyleProp<TextStyle>
  buttonStyle?: StyleProp<ViewStyle>
  buttonColor?: string
  isLoading?: boolean
  buttonTitle?: string
  isSecondary?: boolean
}

const GreenButton = ({
  buttonStyle,
  buttonTitle,
  isLoading = false,
  isSecondary,
  labelStyle,
  onPress,
  ...rest
}: GreenButtonProps) => {
  const theme = useTheme()
  const defaultBgColor = isSecondary ? theme.colors.secondary : theme.colors.primary
  const buttonColor = theme.colors.secondary
  return (
    <Button
      mode="contained"
      dark={true}
      style={[
        styles.button,
        buttonStyle,
        isLoading && styles.loadingButton,
        isLoading && { backgroundColor: defaultBgColor },
      ]}
      labelStyle={[
        styles.labelStyle,
        labelStyle,
        isLoading && styles.loadingLabel,
      ]}
      onPress={onPress}
      loading={isLoading}
      disabled={isLoading}
      {...(isSecondary && { buttonColor })}
      {...rest}
    >
      {buttonTitle ?? translate("common.getStarted", { defaultValue: "Get Started" })}
    </Button>
  )
}

export default GreenButton
