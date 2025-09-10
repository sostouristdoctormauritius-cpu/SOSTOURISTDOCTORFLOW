import { useNavigation } from "@react-navigation/native"
import { useMutation } from "@tanstack/react-query"
import { OTP_VERIFY } from "app/constants/Screens"
import { STORE_STREAM_TOKEN, STORE_USER_PROFILE } from "app/constants/Store"
import EphemeralStore from "app/manager/EphemeralStore"
import { apiLoginUser } from "app/manager/Network"
import { captureApiException } from "app/manager/Sentry"
import { useStores } from "app/models"
import { saveTokens, showTempNetworkErrorAlert } from "app/utils/sosUtils"

const useLoginUser = () => {
  const {
    authenticationStore: { setAuthEmail, setAuthToken, setStreamToken, setUserProfile, setProfilePic, setAuthCountryCode, setAuthPhone },
  } = useStores()

  const navigation = useNavigation()

  return useMutation({
    mutationFn: apiLoginUser,
    onError: (_error) => {
      captureApiException(_error, {
        type: "login_user",
      })
      console.log('_error_error', _error);
      showTempNetworkErrorAlert("Failed to login", "Please try again later", () => {})
    },
    onSuccess: async (data: any,variables) => {
      console.log("login res", data)
      if (data?.code) {
        let error = data?.message
        showTempNetworkErrorAlert("Failed to login", error ? error : "Please try again later", () => {
        })
        return false
      } 

      if(variables?.isPasswordOrOtp=='otp'){
        let msg = data.msg||'otp send';
        showTempNetworkErrorAlert("Success",msg, () => {
        })
      }else {
        const { user, tokens, streamToken } = data
        if (user?.isStatus === 'pending') {
          if(data?.msg){
            showTempNetworkErrorAlert("Verify OTP", data?.msg ? data?.msg : "Please try again later", () => {
          })
          }
          //@ts-ignore
          navigation.navigate(OTP_VERIFY, { token: data.token, otp: data.otp })
        } else {

          EphemeralStore.storeData(STORE_STREAM_TOKEN, streamToken)
          EphemeralStore.storeData(STORE_USER_PROFILE, user)
          await saveTokens(data)
          setProfilePic(user.profilePicture)
          setAuthEmail(user.email)
          setAuthToken(tokens.access.token)
          setStreamToken(streamToken)
          setUserProfile(user)
          setAuthCountryCode(user.country_code)
          setAuthPhone(user.phone)
          
        }
      }
    },
  })
}

export default useLoginUser
