import { Text } from "app/components"
import { colors, typography } from "app/theme"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"

const RenderCancellationOptions = ({
  title,
  caption,
  refundText,
}: {
  title: string
  caption: string
  refundText: string
}) => {
  return (
    <View style={cancellationConditionsContainer}>
      <View style={margin}>
        <Text text={title} style={cancellationTitle} />
        <Text text={caption} style={captionText} />
      </View>
      <Text text={refundText} style={$refundText} />
    </View>
  )
}

export default RenderCancellationOptions

const captionText: TextStyle = {
  color: "#585858",
  lineHeight: 14,
  fontSize: 12,
}

const $refundText: TextStyle = {
  ...captionText,
  fontSize: 14,
}

const margin: ViewStyle = {
  marginRight: 24,
}

const cancellationConditionsContainer: ViewStyle = {
  flexDirection: "row",
  borderBottomWidth: 1,
  borderBottomColor: colors.buttonGreyBackground,
  paddingVertical: 32,
}

const cancellationTitle: TextStyle = {
  fontSize: 14,
  lineHeight: 14,
  color: "#585858",
  fontFamily: typography.primary.bold,
}
