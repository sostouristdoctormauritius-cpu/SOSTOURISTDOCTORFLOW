import { useNavigation } from "@react-navigation/native"
import { useMutation } from "@tanstack/react-query"
import {SCREENS_SIGNIN_WITH_EMAIL} from "app/constants/Screens"
import { apiUpdatePassword } from "app/manager/Network"
import {  showNetworkErrorAlert, showTempNetworkErrorAlert } from "app/utils/sosUtils"
import { Alert } from "react-native"

const MUTATION_KEY = "registerUser"
const useUpdatePassword = () => {

  const navigation = useNavigation<any>()
  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: apiUpdatePassword,
    onError: (error) => {
      // @ts-ignore
      const errorResponse = error?.response?.data
      const errorMsg = errorResponse?.message || "An unexpected error occurred"
      showNetworkErrorAlert("Network Error", errorMsg ? errorMsg : "An error occurred while registering your account. Please try again later.", () => { })
    },
    onSuccess: async (data:any, variables) => {
      console.log('update data successfully',data);
      if (data?.code) {
        let error = data?.message
        showTempNetworkErrorAlert("Error", error ? error : "Please try again later", () => {
        })
      }else{
        Alert.alert('Success', data?.message ? data?.message : 'Password changed successfully', [
          {
            text:'OK',
            onPress:()=>{}
          }
        ])
        navigation.navigate(SCREENS_SIGNIN_WITH_EMAIL)
      }
    },
  })
}

export default useUpdatePassword
