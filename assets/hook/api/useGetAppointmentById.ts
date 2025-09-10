import { useQuery } from "@tanstack/react-query"
import { apiGetAppointmentDetailsById } from "app/manager/Network"

const QUERY_KEY = "getAppointmentById"
const useGetAppointmentById = (appointmentId: string) => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const data = await apiGetAppointmentDetailsById(appointmentId)
      return data
    },
    refetchInterval: 1000,
  })
}

export default useGetAppointmentById
