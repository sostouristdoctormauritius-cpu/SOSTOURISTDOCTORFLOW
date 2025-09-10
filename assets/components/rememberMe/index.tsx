import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { Checkbox } from "react-native-paper"

import { Text } from "app/components/Text"

const styles = StyleSheet.create({
  checkboxContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  checkboxLabel: {
    fontWeight: "normal",
  },
})

const RememberMe = () => {
  const [checked, setChecked] = useState(false)

  return (
    <View style={styles.checkboxContainer}>
      <Checkbox.Android
        focusable
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked)
        }}
      />
      <Text
        tx="signInWithEmailScreen.rememberMe"
        preset="default"
        size="sm"
        style={styles.checkboxLabel}
      />
    </View>
  )
}

export default RememberMe
