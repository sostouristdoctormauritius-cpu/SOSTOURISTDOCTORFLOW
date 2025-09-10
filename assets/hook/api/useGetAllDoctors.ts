import { useNavigation } from "@react-navigation/native"
import { useMutation } from "@tanstack/react-query"

import { apiGetAllDoctors } from "app/manager/Network"
import { captureApiException } from "app/manager/Sentry"
import { showTempNetworkErrorAlert } from "app/utils/sosUtils"

const MUTATION_KEY = "getAllDoctors"
const useGetAllDoctors = () => {
  const navigation = useNavigation()

  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: apiGetAllDoctors,
    onError: (_error) => {
      captureApiException(_error, {
        type: "get_all_doctors",
      })
      showTempNetworkErrorAlert(
        "Network Error",
        "An unexpected error occurred. Please try again later.",
        () => {
          navigation.goBack()
        },
      )
    },
    onSuccess: async (_data, _variables) => {
      // @ts-ignore
      // const { consultationType, location } = variables
      // console.log('doctors--', JSON.stringify(data));

      // @ts-ignore
      // navigation.navigate(SCREENS_CONSULTATION_ELIGIBLE_DOCTORS, {
      //   consultationType,
      //   doctors: data.results,
      //   location,
      // })
    },
  })
}

export default useGetAllDoctors
