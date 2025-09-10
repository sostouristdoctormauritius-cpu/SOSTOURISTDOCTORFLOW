import { Text } from "app/components"
import { colors, typography } from "app/theme"
import { currency } from "app/utils/currency"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"

const AppointmentPaymentDetails = ({
  amount,
  type,
  description,
  paymentStatus,
}: {
  amount: number
  type: string
  description: string
  paymentStatus: string
}) => {
  return (
    <View style={paymentDetailsContainer}>
      <View>
        <Text text={`${type} Consultation`} style={consultationReason} />
        <Text text={`${description} with doctor`} style={consultationDoctor} />
      </View>
      <View>
        <Text text={currency(amount)} style={amountText} />
        <Text text={paymentStatus.toUpperCase()} style={paymentStatusText} />
      </View>
    </View>
  )
}

export default AppointmentPaymentDetails

const paymentDetailsContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  height: 93,
  borderBottomColor: colors.buttonGreyBackground,
  borderBottomWidth: 1,
}

const consultationReason: TextStyle = {
  fontFamily: typography.primary.bold,
  fontSize: 14,
  marginTop: 24,
}

const consultationDoctor: TextStyle = {
  fontSize: 10,
  color: colors.descriptionText,
  fontFamily: typography.primary.normal,
}

const amountText: TextStyle = {
  fontFamily: typography.primary.bold,
  color: colors.iconPrimaryTint,
  fontSize: 18,
  marginTop: 24,
}

const paymentStatusText: TextStyle = {
  color: colors.descriptionText,
  fontFamily: typography.primary.bold,
  fontSize: 13,
}
