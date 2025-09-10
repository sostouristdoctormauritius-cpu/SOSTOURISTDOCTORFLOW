import { useQuery } from "@tanstack/react-query"
import { apiGetMobileConfig } from "app/manager/Network"
import { useStores } from "app/models"

const QUERY_KEY = "appMobileConfig"
const useGetConfig = () => {
  const {
    appConfigStore: { setFees, setEmergencyContacts },
  } = useStores()

  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const response = await apiGetMobileConfig()
      const emergencyContacts = response?.configs?.emergency_contacts ?? []
      setEmergencyContacts(emergencyContacts)

      const consultations = response?.configs?.consultations ?? []
      setFees(consultations)

      return response
    },
    staleTime: 60 * 60 * 1000, // 1 hour
  })
}

export default useGetConfig
