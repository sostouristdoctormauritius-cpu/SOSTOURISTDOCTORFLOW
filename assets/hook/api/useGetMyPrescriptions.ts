import { useQuery } from "@tanstack/react-query"
import { apiGetMyPrescriptions } from "app/manager/Network"

const QUERY_KEY = "getMyPrescriptions"

const useGetMyPrescriptions = (params?: { sortBy?: string; limit?: number; page?: number }) => {
  return useQuery({
    queryKey: [QUERY_KEY, params],
    queryFn: async () => {
      const data = await apiGetMyPrescriptions(params)
      return data.results
    },
    // onError: (error) => {
    //   captureApiException(error, {
    //     type: "get_my_prescriptions",
    //   })
    // },
  })
}

export default useGetMyPrescriptions
