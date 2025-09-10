import { colors } from "app/theme"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { AppointmentStatusIndicator } from "./"

export interface AppointmentStatusProps {
  appointmentStatus: string
  style?: StyleProp<ViewStyle>
}

enum Status {
  completed = "complete",
  pending = "pending",
  cancelled = "cancelled",
}

const Config = {
  [Status.pending]: {
    status: "Upcoming",
    textColor: colors.buttonPrimaryText,
    backgroundColor: colors.upcomingBackground,
    hasBorder: false,
  },
  [Status.completed]: {
    status: "Completed",
    textColor: colors.buttonPrimaryText,
    backgroundColor: colors.buttonPrimaryBackground,
    hasBorder: false,
  },
  [Status.cancelled]: {
    status: "Cancelled",
    textColor: colors.cancelled,
    backgroundColor: colors.cancelledBackground,
    hasBorder: true,
  },
}

const AppointmentStatus = observer(function AppointmentStatus(props: AppointmentStatusProps) {
  const { style, appointmentStatus } = props

  const renderStatusIndicator = (appointmentStatus: string) => {
    const config = Config[appointmentStatus as Status]
    if (config) {
      return <AppointmentStatusIndicator {...config} />
    }
    return null
  }

  return <View style={style}>{renderStatusIndicator(appointmentStatus)}</View>
})

export default AppointmentStatus
