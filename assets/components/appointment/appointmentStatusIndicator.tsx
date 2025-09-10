import { Text } from "app/components"
import { typography } from "app/theme"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"

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
      container,
      {
        backgroundColor,
        borderWidth: hasBorder ? 1 : 0,
        borderColor: hasBorder ? "#F98A8A" : "",
      },
    ]}
  >
    <Text
      text={status}
      style={[
        statusText,
        {
          color: textColor,
        },
      ]}
    />
  </View>
)

export default AppointmentStatusIndicator

const container: ViewStyle = {
  width: 71,
  height: 24,
  borderRadius: 6,
}

const statusText: TextStyle = {
  fontFamily: typography.primary.bold,
  alignSelf: "center",
  fontSize: 10,
  letterSpacing: 0.2,
}
