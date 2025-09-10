import { useMutation } from "@tanstack/react-query"
import { SCREENS_CONSULTATION_PAY } from "app/constants/Screens"
import { apiUpdateAppointment } from "app/manager/Network"
import { captureApiException } from "app/manager/Sentry"
import { handleRequestError } from "app/utils/sosUtils"

const MUTATION_KEY = "updateAppointment"
const useUpdateAppointment = (navigation: any) => {
  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: apiUpdateAppointment,
    onSuccess: async () => {
      navigation.navigate(SCREENS_CONSULTATION_PAY)
    },
    onError: (error) => {
      handleRequestError(error)
      captureApiException(error, {
        type: "update_appointment",
      })
    },
  })
}

export default useUpdateAppointment
