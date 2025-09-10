import { useNavigation } from "@react-navigation/native"
import { useMutation } from "@tanstack/react-query"
import {
  SCREEN_UPDATE_PASS,
  SCREENS_COMPLETE_PROFILE,
  SCREENS_FORGOT_PASSWORD,
} from "app/constants/Screens"
import { translate } from "app/i18n"
import { apiVerifyOtp } from "app/manager/Network"
import { captureApiException } from "app/manager/Sentry"
import { useStores } from "app/models"
import { saveTokens, showNetworkErrorAlert, showTempNetworkErrorAlert } from "app/utils/sosUtils"
import { Alert } from "react-native"

const MUTATION_KEY = "registerUser"
const useOtpVerify = () => {

  const { authenticationStore: { setAuthEmail, setAuthToken, setProfilePic, setAuthCountryCode, setAuthPhone } } = useStores();
  const navigation = useNavigation<any>()
  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: apiVerifyOtp,
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
    onSuccess: async (data, variables) => {
      console.log('variables.username',variables);
      
      if (data?.code) {
        let error = data?.message
        showTempNetworkErrorAlert("Error", error ? error : "Please try again later", () => {
        })
        return false;
      }
      if (variables?.fromScreen === 'forgotPass') {
        showTempNetworkErrorAlert(
          "Success",
          data?.message ? data?.message : 'OTP verified successfully', () => { }
        )
        navigation.navigate(SCREEN_UPDATE_PASS, { token: variables.token })
      }else if (variables?.fromScreen === 'email-verify') {
        navigation.navigate(SCREENS_COMPLETE_PROFILE, { token: variables.token,email:variables.username })
      } else {
        saveTokens(data)
        setAuthEmail(data.user.email)
        setAuthToken(data.tokens.access.token)
        setProfilePic(data.user.profilePicture)
        setAuthCountryCode(data.user.country_code)
        setAuthPhone(data.user.phone)
      }
    },
  })
}

export default useOtpVerify
