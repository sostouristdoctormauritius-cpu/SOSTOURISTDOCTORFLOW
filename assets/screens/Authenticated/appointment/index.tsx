import { useFocusEffect, useNavigation } from "@react-navigation/native"
import {
  SCREENS_APPOINTMENT_CANCELLATION,
  SCREENS_HOME,
  SCREENS_VIEW_PDF,
} from "app/constants/Screens"
import useGetAllAppointments from "app/hook/api/useGetAllAppointments"
import { captureApiException } from "app/manager/Sentry"
import { colors } from "app/theme"
import dayjs from "dayjs"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useState } from "react"
import { ActivityIndicator, FlatList, View, ViewStyle } from "react-native"
import {
  AppointmentDetails,
  AppointmentListItem,
  AppointmentTabView,
  RescheduleDisclaimer,
} from "../../../components/appointment"

// todo: to implement Reschedule/Cancel flow https://github.com/avinashlng1080/sos-tourist-doctor/issues/49

export enum AppointmentStatus {
  PENDING = "pending",
  COMPLETE = "complete",
  CANCELLED = "cancelled",
}

const AppointmentsScreen = observer(function AppointmentsScreen() {
  const navigation = useNavigation()

  const [apptState, setApptState] = useState<AppointmentStatus>(AppointmentStatus.PENDING)

  const { data: appointmentsData, error: appointmentsError,refetch, isFetching } = useGetAllAppointments()

    useFocusEffect(
            useCallback(() => {
        refetch()
      }, [refetch])
    )

  useEffect(() => {
    if (appointmentsError) {
      captureApiException(appointmentsError, {
        type: "get_all_appointments",
      })
    }
  }, [appointmentsError])

  const [displayAppointmentDetails, setDisplayAppointmentDetails] = useState(false)
  const [curAppt, setCurrentAppt] = useState<Appointment | null>(null)

  const onPressCancel = () => {
    setDisplayAppointmentDetails(false)
    navigation.navigate(SCREENS_APPOINTMENT_CANCELLATION as never)
  }

  const onPressReschedule = () => {
    setDisplayAppointmentDetails(false)
    navigation.navigate(SCREENS_HOME)
  }

  const toggleAppointmentDetails = (item: Appointment) => {
    setCurrentAppt(item)
    setDisplayAppointmentDetails(!displayAppointmentDetails)
  }
  if (isFetching) {
    return (
      <View style={$loadingContainer}>
        <ActivityIndicator size="large" color={colors.upcomingBackground} />
      </View>
    )
  }
  return [
    <View style={$root} key="key-appointment-filter">
      {/*  */}
      <AppointmentTabView apptState={apptState} onPress={setApptState} />
      {appointmentsData?.pendingAppts && (
        <RescheduleDisclaimer onPressLink={() => navigation.navigate(SCREENS_VIEW_PDF)} />
      )}
      <FlatList
        data={
          apptState === AppointmentStatus.PENDING
            ? appointmentsData?.pendingAppts?.sort((a, b) => {
              if (!a.date || !b.date || !a.startTime || !b.startTime) {
                return 0
              }
              // Combine date and time for accurate comparison
              const dateTimeA = dayjs(`${a.date.split("T")[0]}T${a.startTime}:00.000Z`)
              const dateTimeB = dayjs(`${b.date.split("T")[0]}T${b.startTime}:00.000Z`)
              return dateTimeB.valueOf() - dateTimeA.valueOf()
            })
            : appointmentsData?.completedAppts.sort((a, b) => {
              if (!a.date || !b.date || !a.startTime || !b.startTime) {
                return 0
              }
              // Combine date and time for accurate comparison
              const dateTimeA = dayjs(`${a.date.split("T")[0]}T${a.startTime}:00.000Z`)
              const dateTimeB = dayjs(`${b.date.split("T")[0]}T${b.startTime}:00.000Z`)
              return dateTimeB.valueOf() - dateTimeA.valueOf()
            })
        }
        renderItem={({ item }) => {
          const formattedDate = dayjs(item.date).format("YYYY-MM-DD")

          return (
            <AppointmentListItem
              onPress={() => toggleAppointmentDetails(item)}
              doctorName={item?.doctor?.name}
              appointmentStatus={item?.status}
              avatarSource={item?.doctor?.userProfile?.profilePicture}
              consultationType={item?.consultationType}
              date={formattedDate}
              time={item?.startTime}
            />
          )
        }}
      />
    </View>,
    <AppointmentDetails
      appointment={curAppt}
      isUpcomingAppts={apptState === AppointmentStatus.PENDING}
      isVisible={displayAppointmentDetails}
      key="key-appointment-details"
      onClose={() => setDisplayAppointmentDetails(false)}
      onPressCancel={onPressCancel}
      onPressReschedule={onPressReschedule}
    />,
  ]
})

export default AppointmentsScreen

const $root: ViewStyle = {
  flex: 1,
  paddingTop: 30,
  backgroundColor: colors.background,
}

const $loadingContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: '#ffffff',
}
