import { useNavigation } from "@react-navigation/native"
import { useMutation } from "@tanstack/react-query"
import { OTP_VERIFY } from "app/constants/Screens"
import { apiForgotPassword } from "app/manager/Network"
import { captureApiException } from "app/manager/Sentry"
import { showTempNetworkErrorAlert } from "app/utils/sosUtils"
import Toast from 'react-native-simple-toast';
const MUTATION_KEY = "forgotPassword"
const useForgotPassword = () => {
  const navigation = useNavigation<any>()

  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: apiForgotPassword,
    onError: (_error) => {
      captureApiException(_error, {
        type: "forgot_password",
      })
      showTempNetworkErrorAlert(
        "Failed to send reset password email",
        "Please try again later",
        () => {
          // @ts-ignore
          navigation.popToTop()
        },
      )
    },
    onSuccess: async (data:any,variables) => {
      console.log("login res", data)
      if (data?.code) {
        let error = data?.message
        showTempNetworkErrorAlert("Error", error ? error : "Please try again later", () => {
        })
      } else{
        if(data?.msg) Toast.show( data?.msg ? data?.msg : "OTP sent either on email or mobile number", Toast.LONG); 
        navigation.navigate(OTP_VERIFY, { token: data.token, otp: data.otp,fromScreen:'forgotPass',username:variables?.email })
      }
    },
  })
}
// const useForgotPassword = () => {
//   const navigation = useNavigation()

//   return useMutation({
//     mutationKey: [MUTATION_KEY],
//     mutationFn: apiForgotPassword,
//     onError: (_error) => {
//       captureApiException(_error, {
//         type: "forgot_password",
//       })
//       showTempNetworkErrorAlert(
//         "Failed to send reset password email",
//         "Please try again later",
//         () => {
//           // @ts-ignore
//           navigation.popToTop()
//         },
//       )
//     },
//     onSuccess: async (_data) => {
//       Alert.alert(
//         "Success",
//         translate("forgotPasswordScreen.successEmail", {
//           defaultValue: "Reset",
//         }),
//         [
//           {
//             text: "OK",
//             // @ts-ignore
//             onPress: () => navigation.popToTop(),
//           },
//         ],
//       )
//     },
//   })
// }

export default useForgotPassword
