import { useQuery } from "@tanstack/react-query"
import { apiGetAllAppointments } from "app/manager/Network"
import dayjs from "dayjs"

const QUERY_KEY = "getAllAppointments"
const useGetAllAppointments = () => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const data = await apiGetAllAppointments()

      const completedAppts = [] as Appointment[]
      const pendingAppts = [] as Appointment[]

      const appointmentIds = new Set<string>()

      if (data?.length > 0) {
        data.forEach((appointment: Appointment) => {
          if (appointmentIds.has(appointment.id)) {
            return
          }
          appointmentIds.add(appointment.id)
          if (dayjs(appointment.date).isBefore(dayjs(), "day")) {
            completedAppts.push(appointment)
          } else {
            pendingAppts.push(appointment)
          }
        })
      }

      // Always return an object with both arrays, even if empty
      return { pendingAppts, completedAppts }
    },
  })
}

export default useGetAllAppointments
