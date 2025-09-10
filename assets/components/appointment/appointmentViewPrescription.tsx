import { Text } from "app/components"
import { colors, typography } from "app/theme"
import React from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"

const AppointmentViewPrescription = () => {
  return (
    <View style={container}>
      <Text text="Prescription" style={prescriptionText} />
      <Text text="Chat messages with doctor" style={consultationText} />
      <Image
        resizeMode="contain"
        source={require("../../../assets/images/pdfIcon.png")}
        style={pdfIcon}
      />
    </View>
  )
}

export default AppointmentViewPrescription

const container: ViewStyle = {
  paddingTop: 8,
}

const prescriptionText: TextStyle = {
  fontSize: 14,
  fontFamily: typography.primary.bold,
}

const consultationText: TextStyle = {
  fontSize: 10,
  color: colors.descriptionText,
}

const pdfIcon: ImageStyle = {
  width: 30,
  height: 40,
}
