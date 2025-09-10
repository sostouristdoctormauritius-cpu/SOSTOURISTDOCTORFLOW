import Link from "app/components/Link"
import CalendarReschedulingIcon from "app/components/SVG/CalendarReschedulingIcon"
import { Text } from "app/components/Text"
import { translate } from "app/i18n"
import { colors, typography } from "app/theme"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { Dimensions, StyleProp, TextStyle, View, ViewStyle } from "react-native"

export interface RescheduleDisclaimerProps {
  onPressLink: () => void
  style?: StyleProp<ViewStyle>
}

const RescheduleDisclaimer = observer(function RescheduleDisclaimer(
  props: RescheduleDisclaimerProps,
) {
  const { style, onPressLink } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <CalendarReschedulingIcon width={31} height={31} />
      <View>
        <Text text={translate("appointment.disclaimer")} style={$text} />
        <Link
          onPress={onPressLink}
          textContent={translate("appointment.disclaimerTnCs")}
          txtStyle={$linkText}
        />
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flexDirection: "row",
  backgroundColor: "#D3F9E6CC",
  height: 77,
  padding: 16,
  justifyContent: "space-between",
  width: Dimensions.get("window").width - 32,
  alignSelf: "center",
  borderRadius: 12,
  marginBottom: 16,
  alignItems: "center",
}

const $text: TextStyle = {
  fontSize: 12,
  lineHeight: 14,
  color: colors.descriptionText,
}

const $linkText: TextStyle = {
  fontSize: 12,
  lineHeight: 14,
  fontFamily: typography.primary.bold,
  textDecorationLine: "underline",
  color: colors.descriptionText,
}

export default RescheduleDisclaimer
