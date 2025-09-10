import { useNavigation } from "@react-navigation/native"
import { useMutation } from "@tanstack/react-query"
import {
  SCREENS_FORGOT_PASSWORD,
} from "app/constants/Screens"
import { translate } from "app/i18n"
import { apiResendOtp } from "app/manager/Network"
import { captureApiException } from "app/manager/Sentry"

import { showNetworkErrorAlert } from "app/utils/sosUtils"
import { Alert } from "react-native"

const MUTATION_KEY = "registerUser"
const useOtpResend = () => {
  const navigation = useNavigation()
  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: apiResendOtp,
    onError: (error) => {
      captureApiException(error, {
        type: "register_user",
      })
      // @ts-ignore
      const errorResponse = error?.response?.data
      const errorMsg = errorResponse?.message || "An unexpected error occurred"
      const errorCode = errorResponse?.code || "XXX"

      if (errorMsg === "Email already taken" && errorCode === 400) {
        Alert.alert(
          translate("forgotPasswordScreen.emailTakenTitle"),
          translate("forgotPasswordScreen.emailTakenDesc"),
          [
            {
              text: "No",
              style: "cancel",
            },
            { text: "Yes", onPress: () => navigation.navigate(SCREENS_FORGOT_PASSWORD) },
          ],
        )
      } else {
        showNetworkErrorAlert(
          "Network Error",
          "An error occurred while registering your account. Please try again later.",
        )
      }
    },
    onSuccess: async (_data, _variables) => {
     
    },
  })
}

export default useOtpResend
