import { Platform } from "react-native"
import * as AddCalendarEvent from "react-native-add-calendar-event"
import RNCalendarEvents from "react-native-calendar-events"
import { dateParser } from "./dateParser"

export const addToCalendar = async (appointment: Appointment) => {
  if (!appointment || !appointment.date || !appointment.startTime || !appointment.endTime) {
    return
  }

  const appointmentStartDate = dateParser(appointment?.date, appointment?.startTime).toString()

  const appointmentEndDate = dateParser(appointment?.date, appointment?.endTime).toString()
  const title = `${appointment.consultationType} Appointment with SOS-Tourist-Doctor`

  const eventConfig = {
    startDate: new Date(appointmentStartDate).toISOString(),
    endDate: new Date(appointmentEndDate).toISOString(),
    location: appointment?.consultationType,
  }

  if (Platform.OS === "ios") {
    await RNCalendarEvents.saveEvent(title, eventConfig)
  } else if (Platform.OS === "android") {
    await AddCalendarEvent.presentEventCreatingDialog({ title, ...eventConfig })
  }
}
