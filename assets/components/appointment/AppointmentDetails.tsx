import { Icon } from "app/components/Icon"
import { Text } from "app/components/Text"
import { ConsultationType } from "app/constants/GlobalTypes"
import { AppointmentStatus } from "app/screens/Authenticated/appointment"
import { withSOSErrorBoundary } from "app/screens/ErrorScreen/ErrorBoundary"
import { colors, typography } from "app/theme"
import { formatDate } from "app/utils/formatDate"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { useState } from "react"
import {
  ImageStyle,
  Modal,
  ScrollView,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import {
  AppointmentDoctorDetails,
  AppointmentFollowUpDetails,
  AppointmentListItem,
  AppointmentViewPrescription,
} from "./"

export interface AppointmentDetailsProps {
  appointment: Appointment | null
  isUpcomingAppts: boolean
  isVisible: boolean
  onClose: () => void
  onPressCancel: () => void
  onPressReschedule: () => void
  style?: StyleProp<ViewStyle>
}

const AppointmentDetails = observer(function AppointmentDetails(props: AppointmentDetailsProps) {
  const { appointment, isVisible, onClose, onPressCancel, onPressReschedule, isUpcomingAppts } =
    props

  if (!appointment) {
    return null
  }

  const [isModalVisible, setIsModalVisible] = useState(isVisible)
  const handleClose = () => {
    console.log("Modal closing...")
    setIsModalVisible(false)
    onClose?.()
  }

  return (
    <Modal
      visible={isModalVisible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
      statusBarTranslucent
    >
      {/* Overlay TouchableOpacity */}
      <TouchableOpacity style={modalOverlay} onPress={handleClose} activeOpacity={1}>
        {/* Modal Content */}
        <View style={modalContent}>
          <ScrollView contentContainerStyle={modalContentContainer}>
            <View style={modalContentTopContainer}>
              <View style={modalSwipeIndicator} />
              <Text text="Summary" style={summaryText} />
              <AppointmentListItem
                style={appointmentListItem}
                doctorName={appointment.doctor?.name}
                appointmentStatus={appointment?.status}
                avatarSource={appointment.doctor?.userProfile?.profilePicture}
                consultationType={ConsultationType.Video}
                date={formatDate(appointment.date, "MMMM dd yyyy")}
                time={appointment.date}
              />
            </View>
            <View>
              <Text text="Appointment date" style={appointmentDateText} />
              <View style={appointmentDetailsContainer}>
                <Icon icon="clock" size={16} color={colors.text} style={clockIcon} />
                <Text text={formatDate(appointment.date, "MMMM dd yyyy")} style={dateText} />
                <Text text="|" style={generalText} />
                <Text text={appointment.startTime} style={apptStartTime} />
              </View>
            </View>
            {appointment.status === AppointmentStatus.COMPLETE && <AppointmentFollowUpDetails />}
            <AppointmentDoctorDetails symptoms="Stomach Pain" />
            {appointment.status === AppointmentStatus.COMPLETE && <AppointmentViewPrescription />}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  )
})

const modalOverlay: ViewStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  flex: 1,
  justifyContent: "flex-end",
}

const modalContent: ViewStyle = {
  backgroundColor: colors.background,
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  maxHeight: "90%",
  width: "100%",
}

const modalContentContainer: ViewStyle = {
  paddingVertical: 16,
  paddingHorizontal: 24,
}

const modalContentTopContainer: ViewStyle = {
  borderBottomColor: colors.buttonGreyBackground,
  borderBottomWidth: 1,
}

const cancelButtonContainer: TextStyle = {
  color: colors.headerCancelButtonText,
  fontFamily: typography.primary.bold,
}

const cancelTouchable: ViewStyle = {
  position: "absolute",
  right: 8,
}

const modalSwipeIndicator: ViewStyle = {
  width: 64,
  height: 4,
  borderRadius: 8,
  opacity: 0.7,
  alignSelf: "center",
  backgroundColor: colors.modalHeaderSwipeIndicator,
}

const summaryText: TextStyle = {
  fontSize: 20,
  fontFamily: typography.primary.bold,
  alignSelf: "center",
  marginTop: 8,
}

const appointmentDateText: TextStyle = {
  fontSize: 10,
  color: colors.aboutDescription,
  marginLeft: 8,
  marginTop: 8,
  fontFamily: typography.primary.bold,
}

const appointmentDetailsContainer: ViewStyle = {
  flexDirection: "row",
  borderBottomWidth: 1,
  borderBottomColor: colors.buttonGreyBackground,
  marginBottom: 8,
  paddingBottom: 8,
  height: 40,
}

const appointmentListItem: ViewStyle = {
  height: 100,
}

const clockIcon: ImageStyle = {
  marginHorizontal: 8,
  marginTop: 4,
}

const dateText: TextStyle = {
  marginRight: 8,
  fontSize: 12,
}

const generalText: TextStyle = {
  fontSize: 12,
}

const apptStartTime: TextStyle = {
  marginLeft: 8,
  fontSize: 12,
}

export default withSOSErrorBoundary(AppointmentDetails)