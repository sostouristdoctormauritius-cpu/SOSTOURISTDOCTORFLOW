import { useNavigation } from "@react-navigation/native"
import { Screen, Text } from "app/components"
import Link from "app/components/Link"
import { RenderCancellationOptions } from "app/components/appointment"
import { SCREENS_VIEW_PDF } from "app/constants/Screens"
import { translate } from "app/i18n"
import { AppStackScreenProps } from "app/navigators"
import { colors, typography } from "app/theme"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

interface AppointmentCancellationScreenProps
  extends AppStackScreenProps<"AppointmentCancellation"> {}

const AppointmentCancellationScreen: FC<AppointmentCancellationScreenProps> = observer(
  function AppointmentCancellationScreen() {
    const navigation = useNavigation()

    const navigateToViewPdf = () => navigation.navigate(SCREENS_VIEW_PDF as never)

    return (
      <Screen style={$root} preset="scroll">
        <View style={$mar24}>
          <Text text={translate("appointment.disclaimer")} style={$text} />
          <Link
            onPress={navigateToViewPdf}
            textContent={translate("appointment.disclaimerTnCs")}
            txtStyle={$linkText}
          />
          <Text text={translate("appointment.cancelBy")} style={$cancelBy} />
          <RenderCancellationOptions
            title={translate("appointment.refundDuration")}
            caption={translate("appointment.afterBooking")}
            refundText={translate("appointment.refundPolicy")}
          />
          <RenderCancellationOptions
            title={translate("appointment.refundDuration")}
            caption={translate("appointment.afterBooking")}
            refundText={translate("appointment.refundPolicy")}
          />
          <Link
            btnStyle={$marginTop48}
            onPress={() => navigation.navigate(SCREENS_VIEW_PDF as never)}
            textContent={translate("appointment.cancellationPolicies")}
            txtStyle={[$linkText, $fontSize16]}
          />
        </View>
      </Screen>
    )
  },
)

const $marginTop48 = {
  marginTop: 48,
}

const $cancelBy = {
  marginTop: 64,
  fontSize: 20,
  fontFamily: typography.primary.bold,
}

const $mar24 = {
  marginTop: 24,
}

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: 24,
}

const $text: TextStyle = {
  fontSize: 14,
  lineHeight: 16,
  color: colors.descriptionText,
}

const $linkText: TextStyle = {
  fontSize: 14,
  lineHeight: 16,
  fontFamily: typography.primary.bold,
  textDecorationLine: "underline",
  color: colors.descriptionText,
}

const $fontSize16: TextStyle = {
  fontSize: 16,
}

export default AppointmentCancellationScreen
