import { useNavigation, useRoute } from "@react-navigation/native"
import { Button } from "app/components/Button"
import BackButtonIcon from "app/components/SVG/BackButtonIcon"
import { Screen } from "app/components/Screen"
import { Text } from "app/components/Text"
import PricingFooter from "app/components/consultation/PricingFooter"
import SOSDatePicker from "app/components/datePicker"
import Colors from "app/constants/Colors"
import { ConsultationType } from "app/constants/GlobalTypes"
import { SCREENS_CONSULTATION_CONFIRM_ORDER } from "app/constants/Screens"
import { spacing } from "app/constants/spacing"
import useGetAllAvailableSlots from "app/hook/api/useGetAllAvailableSlots"
import { captureApiException } from "app/manager/Sentry"
import { typography } from "app/theme"
import { showTempNetworkErrorAlert } from "app/utils/sosUtils"
import dayjs from "dayjs"
import React, { useEffect, useState } from "react"
import { StyleSheet, TouchableOpacity, View, useWindowDimensions } from "react-native"
import { ActivityIndicator, useTheme } from "react-native-paper"

type RouteParams = {
  consultationType: ConsultationType
  symptoms: string[]
  additionalSymptom: string
  doctors: Doctor[]
}

interface TimeSlot {
  time: string
  isAvailable: boolean
}





const now = dayjs()
const today = dayjs().format("YYYY-MM-DD")
const EMPTY_ARR: never[] = []

function generateTimeSlots(slots: string[], selectedDate: string): TimeSlot[] {
  const currentTime = dayjs()
  const selectedDay = dayjs(selectedDate)
  const isToday = selectedDay.isSame(currentTime, "day")

  const uniqueTimes = new Set<string>()

  return slots
    .filter((time) => {
      if (uniqueTimes.has(time)) return false
      uniqueTimes.add(time)
      return true
    })
    .map((time) => {
      const slotTime = dayjs(selectedDate)
        .hour(parseInt(time.split(":")[0], 10))
        .minute(parseInt(time.split(":")[1], 10))

      return {
        time,
        isAvailable: !isToday || slotTime.isAfter(currentTime),
      }
    })
    .filter((slot) => slot.isAvailable)
    .sort((a, b) => {
      const timeA = dayjs(selectedDate + " " + a.time)
      const timeB = dayjs(selectedDate + " " + b.time)
      return timeA.valueOf() - timeB.valueOf()
    })
}

const chunkedTimeSlots = (
  slots: string[],
  selectedDate: string,
  chunkSize: number,
): TimeSlot[][] => {
  const availableSlots = generateTimeSlots(slots, selectedDate)
  const chunks: TimeSlot[][] = []

  for (let i = 0; i < availableSlots.length; i += chunkSize) {
    chunks.push(availableSlots.slice(i, i + chunkSize))
  }

  return chunks
}

export default function ConsultationBookAppointmentScreen() {
  const route = useRoute()
  // @ts-ignore
  const { consultationType, symptoms, additionalSymptom, doctors, location } =
    route.params as RouteParams
  const navigation = useNavigation()
  const [selectedDate, setSelectedDate] = useState<string>(today)
  const [appointmentTime, setAppointmentTime] = useState("")
  const [isSlotMorning, setIsSlotMorning] = useState(() => {
    const isToday = dayjs(selectedDate).isSame(now, "day")
    const isPastNoon = now.hour() >= 12
    return !(isToday && isPastNoon)
  })

  const {
    isLoading,
    data: slotsData = EMPTY_ARR,
    isError: isGetSlotsError,
  } = useGetAllAvailableSlots(consultationType)

  useEffect(() => {
    if (isGetSlotsError) {
      showTempNetworkErrorAlert(
        "Failed to retrieve available slots",
        "Please try again later",
        () => {
          // @ts-ignore
          navigation.popToTop()
        },
      )
      captureApiException(isGetSlotsError, {
        type: "get_all_available_slots",
      })
    }
  }, [isGetSlotsError, navigation])

  const { width } = useWindowDimensions()

  const [timeSlotsMorning, setTimeSlotsMorning] = useState<string[]>(EMPTY_ARR)
  const [timeSlotsAfternoon, setTimeSlotsAfternoon] = useState<string[]>(EMPTY_ARR)

  const onBackPressed = () => {
    navigation.goBack()
  }

  const onContinuePressed = () => {
    // @ts-ignore
    navigation.navigate(SCREENS_CONSULTATION_CONFIRM_ORDER, {
      consultationType,
      selectedDate,
      appointmentTime,
      isSlotMorning,
      symptoms,
      additionalSymptom,
      doctors,
      location,
    })
  }

  const theme = useTheme()

  useEffect(() => {
    const dayX = slotsData[selectedDate]
    if (dayX) {
      setTimeSlotsMorning(dayX.morning)
      setTimeSlotsAfternoon(dayX.afternoon)
    }
  }, [selectedDate, slotsData])

  const emptySlots = !timeSlotsMorning?.length && !timeSlotsAfternoon?.length

  const isMorningSlotDisabled = () => {
    const isToday = dayjs(selectedDate).isSame(now, "day")
    const isPastNoon = now.hour() >= 12
    return !timeSlotsMorning || timeSlotsMorning.length === 0 || (isToday && isPastNoon)
  }

  return (
    <Screen
      preset="auto"
      keyboardOffset={150}
      safeAreaEdges={["top"]}
      KeyboardAvoidingViewProps={{ enabled: false }}
      contentContainerStyle={styles.screenContentContainerStyle}
    >
      <TouchableOpacity style={styles.backButtonStyle} onPress={onBackPressed}>
        <BackButtonIcon width="28" height="28" />
      </TouchableOpacity>

      <Text style={styles.titleStyle} preset="screenHeader" tx="consultation.messaging.bookAppointment.title" />

      <View style={styles.datePickerContainer}>
        <SOSDatePicker
          date={selectedDate}
          onChange={(params) => {
            const selectedDay = dayjs(params.date).format("YYYY-MM-DD")
            setSelectedDate(selectedDay)
            setAppointmentTime("")
          }}
        />
      </View>

      <Text style={styles.subTitleStyle} preset="subSectionTitle" tx="consultation.messaging.bookAppointment.chooseSlot" />

      <View style={styles.slotPartOfDayContainer}>
        <Button
          style={[
            styles.slotPartOfDayButton,
            styles.marginRight,
            isMorningSlotDisabled() && styles.disabledButton,
          ]}
          preset={isSlotMorning ? "selectorSelected" : "selectorUnselected"}
          tx="consultation.messaging.bookAppointment.slotMorning"
          onPress={() => setIsSlotMorning(true)}
          disabled={isMorningSlotDisabled()}
        />
        <Button
          style={[styles.slotPartOfDayButton, styles.marginLeft]}
          preset={!isSlotMorning ? "selectorSelected" : "selectorUnselected"}
          tx="consultation.messaging.bookAppointment.slotEvening"
          onPress={() => setIsSlotMorning(false)}
        />
      </View>

      <View style={styles.slotTimeContainer}>
        {isLoading && <ActivityIndicator size="large" color={theme.colors.primary} />}
        {emptySlots && !isLoading && (
          <View style={[styles.disabledBox, { width: width - 48 }]}>
            <Text style={styles.disabledText} preset="subSectionTitle" tx="consultation.common.na" />
          </View>
        )}
        {chunkedTimeSlots(
          isSlotMorning ? timeSlotsMorning : timeSlotsAfternoon,
          selectedDate,
          3,
        ).map((row, rowIndex) => (
          <View key={`timeslot-row-${rowIndex}`} style={styles.slotTimeRow}>
            {row.map((slot) => (
              <TouchableOpacity
                key={`slot-${slot.time}`}
                disabled={!slot.isAvailable}
                onPress={() => setAppointmentTime(slot.time)}
                style={[
                  styles.slotButton,
                  {
                    backgroundColor: appointmentTime === slot.time ? theme.colors.secondary : "#FFF",
                    borderColor: theme.colors.secondary,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.slotButtonText,
                    {
                      color: appointmentTime === slot.time ? "#FFF" : theme.colors.secondary,
                      fontFamily: typography.fonts.spaceGrotesk.bold,
                    },
                  ]}
                >
                  {slot.time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <PricingFooter
        consultationType={consultationType}
        onContinuePressed={onContinuePressed}
        disabled={!appointmentTime || isLoading}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  backButtonStyle: {
    alignSelf: "flex-start",
    zIndex: 9999,
  },
  titleStyle: {
    marginTop: -28,
  },
  datePickerContainer: {
    marginTop: 24,
  },
  subTitleStyle: {
    alignSelf: "flex-start",
    color: Colors.screenTitleText,
    marginTop: 10,
  },
  slotPartOfDayContainer: {
    flexDirection: "row",
    marginTop: 20,
    width: "100%",
  },
  slotPartOfDayButton: {
    flex: 1,
  },
  marginRight: {
    marginRight: 9,
  },
  marginLeft: {
    marginLeft: 9,
  },
  disabledButton: {
    opacity: 0.5,
  },
  slotTimeContainer: {
    flexDirection: "column",
    marginTop: 16,
  },
  slotTimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  slotButton: {
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 22,
    borderWidth: 1,
  },
  slotButtonText: {
    fontSize: 14,
    fontWeight: "700",
  },
  disabledBox: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#191015",
    height: 100,
    justifyContent: "center",
  },
  disabledText: {
    alignSelf: "center",
    color: "#FFF",
    marginTop: 24,
  },
  screenContentContainerStyle: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
})
