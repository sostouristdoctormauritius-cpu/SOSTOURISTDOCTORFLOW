import { useNavigation } from "@react-navigation/native"
import { useMutation } from "@tanstack/react-query"
import { SCREENS_CONSULTATION_PAY } from "app/constants/Screens"
import { apiBookAppointment } from "app/manager/Network"
import { captureApiException } from "app/manager/Sentry"
import { showTempNetworkErrorAlert } from "app/utils/sosUtils"

const MUTATION_KEY = "bookAppointment"
const useBookAppointment = () => {
  const navigation = useNavigation<any>()

  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: apiBookAppointment,
    onError: (_error) => {
      console.log('_error_error',_error);
      captureApiException(_error, {
        type: "book_appointment",
      })
      showTempNetworkErrorAlert("Failed to book appointment", "Please try again later", () => {
        navigation.popToTop()
      })
    },
    onSuccess: async (data) => {

      console.log('SCREENS_CONSULTATION_PAY---',data);
      
      navigation.navigate(SCREENS_CONSULTATION_PAY, {
        paymentLink: data.paymentLink,
        appointment: data.appointment,
      })
    },
  })
}

export default useBookAppointment
