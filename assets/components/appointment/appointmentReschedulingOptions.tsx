import { Text } from "app/components"
import GreenButton from "app/components/greenButton"
import { colors, typography } from "app/theme"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"

const AppointmentReschedulingOptions = ({
  onPressCancel,
  onPressReschedule,
}: {
  onPressCancel: () => void
  onPressReschedule: () => void
}) => {
  return (
    <View style={container}>
      <Text text="Do you Reschedule or Cancel" style={textStyles} />
      {/* <Text text={`${appointmentType} with doctor`} style={appointmentTypeText} /> */}
      <View style={buttonContainer}>
        <GreenButton
          onPress={onPressCancel}
          buttonColor={colors.buttonGreyBackground}
          labelStyle={{ color: colors.text }}
          buttonStyle={buttonViewStyle}
          buttonTitle="Cancel"
        />
        <GreenButton
          onPress={onPressReschedule}
          buttonColor={colors.buttonPrimaryBackground}
          labelStyle={{ color: colors.tabBackground }}
          buttonStyle={buttonViewStyle}
          buttonTitle="Reschedule"
        />
      </View>
    </View>
  )
}

export default AppointmentReschedulingOptions

const container: ViewStyle = {
  paddingTop: 24,
}

const buttonContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  marginTop: 24,
}

const textStyles: TextStyle = {
  fontSize: 17,
  fontFamily: typography.primary.bold,
}

// const appointmentTypeText: TextStyle = {
//   fontSize: 10,
//   color: colors.descriptionText,
// }

const buttonViewStyle: ViewStyle = {
  width: 172,
  marginLeft: 4,
}
