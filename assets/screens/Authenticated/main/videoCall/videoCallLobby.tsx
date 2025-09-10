import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { Text } from "app/components"
import { SCREENS_VIDEO_CALL } from "app/constants/Screens"
import useGetAllAppointments from "app/hook/api/useGetAllAppointments"
import { translate } from "app/i18n"
import { captureApiException } from "app/manager/Sentry"
import { colors } from "app/theme"
import { useHeader } from "app/utils/useHeader"
import dayjs from "dayjs"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { ActivityIndicator, FlatList, SafeAreaView, TextStyle, View, ViewStyle } from "react-native"
import { AppointmentListItem } from "../../../../components/appointment"
import { VideoAppointment } from "./types"

// todo: to implement Reschedule/Cancel flow https://github.com/avinashlng1080/sos-tourist-doctor/issues/49

export enum AppointmentStatus {
  PENDING = "pending",
  COMPLETE = "complete",
  CANCELLED = "cancelled",
  PAYMENT_COMPLETED = "payment_completed",
}

const EmptyStateComponent = () => (
  <View style={$emptyState}>
    <Text>{translate("consultation.messaging.bookAppointment.noVideoAppointment")}</Text>
  </View>
)

const LoadingComponent = () => (
  <View style={$loadingState}>
    <ActivityIndicator size="large" color={colors.upcomingBackground} />
  </View>
)

const VideoCallLobby = observer(function VideoCallLobby() {
  const navigation = useNavigation()
  const { data: appointmentsData, isLoading,    isFetching, error: appointmentsError,refetch } = useGetAllAppointments()

  // useVideoClient()
  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [])
  )
  useEffect(() => {
    if (appointmentsError) {
      captureApiException(appointmentsError, {
        type: "get_all_appointments",
      })
    }
  }, [appointmentsError])

  useHeader({
    title: "Video Appointments",
  })

  const videoAppointments = useMemo(
    () =>
      (appointmentsData?.pendingAppts || [])
        // .concat(appointmentsData?.completedAppts || [])
        .filter(
          (appt) =>
            appt?.consultationType === "video" &&
            appt.status === AppointmentStatus.PAYMENT_COMPLETED,
        )
        .sort((a, b) => {
          if (!a.date || !b.date || !a.startTime || !b.startTime) {
            return 0
          }
          // Combine date and time for accurate comparison
          const dateTimeA = dayjs(`${a.date.split("T")[0]}T${a.startTime}:00.000Z`)
          const dateTimeB = dayjs(`${b.date.split("T")[0]}T${b.startTime}:00.000Z`)
          return dateTimeB.valueOf() - dateTimeA.valueOf()
        }),
    [appointmentsData?.pendingAppts, appointmentsData?.completedAppts],
  )

  const handleAppointmentPress = useCallback(
    (item: VideoAppointment) => {
      console.log("item", JSON.stringify(item, null, 2))
      // @ts-ignore
      navigation.navigate(SCREENS_VIDEO_CALL, {
        streamChannelId: item.streamChannelId,
        doctorName: item.doctor?.name,
      })
    },
    [navigation],
  )

  const renderAppointment = useCallback(
    ({ item }: { item: VideoAppointment }) => {
      return (
        <AppointmentListItem
          onPress={() => handleAppointmentPress(item)}
          doctorName={item?.doctor?.name}
          appointmentStatus={item?.status ?? "pending"}
          avatarSource={item.doctor?.userProfile?.profilePicture}
          consultationType={item?.consultationType ?? "video"}
          date={item?.date ? dayjs(item.date).format("YYYY-MM-DD") : undefined}
          time={item?.startTime}
        />
      )
    },
    [handleAppointmentPress],
  )

  if (isLoading || isFetching) {
    return <LoadingComponent />
  }
  

  return (
    <SafeAreaView style={$root}>
      {videoAppointments.length > 0 ? (
        <>
          <Text style={$headerText}>Your upcoming/current video appointments</Text>
          <FlatList
            data={videoAppointments}
            renderItem={renderAppointment}
            keyExtractor={(item) => item.id}
            contentContainerStyle={$listContent}
            showsVerticalScrollIndicator={false}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={5}
          />
        </>
      ) : (
        <EmptyStateComponent />
      )}
    </SafeAreaView>
  )
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $headerText: TextStyle = {
  fontSize: 12,
  alignSelf: "center",
  marginVertical: 16,
}

const $emptyState: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}

const $loadingState: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}

const $listContent: ViewStyle = {
  flexGrow: 1,
  paddingHorizontal: 16,
}

export default VideoCallLobby
