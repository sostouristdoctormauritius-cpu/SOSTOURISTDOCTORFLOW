import { useNavigation } from "@react-navigation/native"
import { useMutation } from "@tanstack/react-query"
import {
  OTP_VERIFY,
} from "app/constants/Screens"
import { apiRegisterUser } from "app/manager/Network"
import { showTempNetworkErrorAlert } from "app/utils/sosUtils"

const MUTATION_KEY = "registerUser"
const useRegisterUser = () => {
  const navigation = useNavigation<any>()
  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: apiRegisterUser,
    onError: (error:any) => {
      console.log('error register--', error);
      const errorResponse = error?.response?.data
      const errorMsg = errorResponse?.message || "An unexpected error occurred"
      const errorCode = errorResponse?.code || "XXX"
      showTempNetworkErrorAlert('Error ' + errorCode, errorMsg ? errorMsg : "An error occurred while registering your account. Please try again later.", () => { })
    },
    onSuccess: async (data:any, variables) => {
      console.log("register dataresponse=-=", JSON.stringify(data))
      if(data?.code){
        let errmsg = data?.message;
        showTempNetworkErrorAlert('Error '+data?.code, errmsg ? errmsg : "An error occurred while registering your account. Please try again later.", () => { })
      }else{
        navigation.navigate(OTP_VERIFY, { token: data.token, otp: data.otp,username:variables.phone,fromScreen:'register' })
      }
    },
  })
}

export default useRegisterUser
