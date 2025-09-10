import { useNavigation } from "@react-navigation/native"
import { useMutation } from "@tanstack/react-query"
import {
  OTP_VERIFY,
} from "app/constants/Screens"
import { apiVerifyEmail } from "app/manager/Network"
import { captureApiException } from "app/manager/Sentry"
import Toast from 'react-native-simple-toast';

const MUTATION_KEY = "registerUser"
const useEmailVerify = () => {

  const navigation = useNavigation<any>()
  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: apiVerifyEmail,
    onError: (error, variables) => {
      captureApiException(error, {
        type: "register_user",
      })
      // @ts-ignore
      const errorResponse = error?.response?.data
      const errorMsg = errorResponse?.message || "An error occurred while registering your account. Please try again later."
      const errorCode = errorResponse?.code || "XXX"
      Toast.show(errorMsg, Toast.LONG,);
    },
    onSuccess: async (data, variables) => {
      if (data?.code) {
        let error = data?.message
        Toast.show(error ? error : "Please try again later", Toast.LONG,);
        return false;
      } else {
        if (data?.msg) {
          Toast.show(data?.msg, Toast.LONG,);
        }
        navigation.navigate(OTP_VERIFY, { emai: variables.email, token: data.token, fromScreen: 'email-verify', username: variables.email })
      }
    },
  })
}

export default useEmailVerify
