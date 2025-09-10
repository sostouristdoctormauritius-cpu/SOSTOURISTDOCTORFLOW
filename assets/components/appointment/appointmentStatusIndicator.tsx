import { Text } from "app/components"
import { typography } from "app/theme"
import React from "react"
import { StyleSheet, View } from "react-native"

const AppointmentStatusIndicator = ({
  status,
  textColor,
  backgroundColor,
  hasBorder,
}: {
  status: string
  textColor: string
  backgroundColor: string
  hasBorder?: boolean
}) => (
  <View
    style={[
      styles.container,
      { backgroundColor },
      hasBorder ? styles.border : styles.noBorder,
    ]}
  >
    <Text
      text={status}
      style={[
        styles.statusText,
        { color: textColor },
      ]}
    />
  </View>
)

export default AppointmentStatusIndicator

const styles = StyleSheet.create({
  container: {
    width: 71,
    height: 24,
    borderRadius: 6,
  },
  border: {
    borderWidth: 1,
    borderColor: "#F98A8A",
  },
  noBorder: {
    borderWidth: 0,
  },
  statusText: {
    fontFamily: typography.primary.bold,
    alignSelf: "center",
    fontSize: 10,
    letterSpacing: 0.2,
  },
})
