import { Text } from "app/components"
import CalendarIcon from "app/components/SVG/CalendarIcon"
import SlotTimeIcon from "app/components/SVG/SlotTimeIcon"
import Colors from "app/constants/Colors"
import { colors, typography } from "app/theme"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"

const AppointmentFollowUpDetails = () => (
  <View style={followUpContainer}>
    <Text text="Follow Up Appointment Date" style={followUpText} />
    <View style={$appointmentDetailsContainer}>
      <CalendarIcon width={40} height={40} />
      <View style={$appointmentDetailsMiddleSection}>
        <Text
          style={{
            ...$appointmentDetailsDateLabel,
            color: Colors.appointmentDetailsDateDark,
          }}
          preset="description"
          text="Today 24, December 2023"
        />
      </View>
      <View style={$timeSlotContainer}>
        <SlotTimeIcon style={slotTimeIcon} width={16} height={16} />
        <Text
          style={{
            ...$appointmentDetailsDateLabel,
            color: Colors.iconWarningTint,
            marginBottom: 0,
          }}
          preset="description"
          text="9:00 PM"
        />
      </View>
    </View>
  </View>
)

export default AppointmentFollowUpDetails

const $appointmentDetailsContainer: ViewStyle = {
  width: "100%",
  backgroundColor: Colors.aboutContainerBackground,
  paddingHorizontal: 8,
  paddingVertical: 16,
  borderRadius: 16,
  marginTop: 16,
  flexDirection: "row",
  alignItems: "center",
}

const $appointmentDetailsMiddleSection: ViewStyle = {
  flex: 1,
  marginLeft: 8,
  marginRight: 10,
}

const $timeSlotContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderRadius: 16,
  padding: 8,
  borderColor: Colors.pillWarningBorder,
  backgroundColor: Colors.pillWarningBackground,
}

const $appointmentDetailsDateLabel: TextStyle = {
  color: Colors.appointmentDetailsDate,
  marginBottom: 8,
  textAlign: "left",
}

const followUpContainer: ViewStyle = {
  borderBottomColor: colors.buttonGreyBackground,
  borderBottomWidth: 1,
  paddingBottom: 24,
}

const followUpText: TextStyle = {
  fontSize: 14,
  fontFamily: typography.primary.bold,
}

const slotTimeIcon: TextStyle = {
  color: Colors.iconWarningTint,
  marginRight: 4,
}
