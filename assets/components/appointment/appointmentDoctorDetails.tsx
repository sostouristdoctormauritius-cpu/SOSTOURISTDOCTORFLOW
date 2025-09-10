import { Text } from "app/components"
import { colors, typography } from "app/theme"
import React from "react"
import { Dimensions, View, ViewStyle } from "react-native"

const AppointmentDoctorDetails = ({ symptoms }: { symptoms: string }) => (
  <View style={doctorDetailsContainer}>
    <Text text="Appointment Details" style={appointmentDetailsText} />
    <View style={appointmentDetailsGreenContainer}>
      <Text
        text={`Symptoms: `}
        style={{ color: colors.tabBarActiveBackgroundColor, fontFamily: typography.primary.bold }}
      />
      <Text
        text={`${symptoms}`}
        style={{ color: colors.consultationReasonDescription, fontSize: 14 }}
      />
    </View>
  </View>
)

export default AppointmentDoctorDetails

const doctorDetailsContainer = {
  height: 130,
  borderBottomColor: colors.buttonGreyBackground,
  borderBottomWidth: 1,
  marginTop: 16,
}

const appointmentDetailsText = {
  fontFamily: typography.primary.bold,
  marginBottom: 12,
  fontSize: 14,
}

const appointmentDetailsGreenContainer: ViewStyle = {
  width: Dimensions.get("window").width - 32,
  height: 74,
  backgroundColor: "#E0FFE64D",
  padding: 16,
  alignSelf: "center",
  borderRadius: 16,
}
