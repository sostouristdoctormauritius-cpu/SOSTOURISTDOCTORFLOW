import { useQuery } from "@tanstack/react-query"
import { ConsultationType } from "app/constants/GlobalTypes"
import { apiGetAvailableSlots } from "app/manager/Network"

const QUERY_KEY = "getAllAvailableSlots"
const useGetAllAvailableSlots = (consultationType: ConsultationType) => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const data = await apiGetAvailableSlots(consultationType)
      return data
    },
    // staleTime: 30 * 1000,
  })
}

export default useGetAllAvailableSlots
