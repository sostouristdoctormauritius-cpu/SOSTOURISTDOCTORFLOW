import { useNavigation } from "@react-navigation/native"
import { useMutation } from "@tanstack/react-query"
import { SCREENS_FORGOT_PASSWORD, SCREENS_HOME } from "app/constants/Screens"
import { translate } from "app/i18n"
import { apiUpdateUserProfile, } from "app/manager/Network"
import { captureApiException } from "app/manager/Sentry"
import { useStores } from "app/models"
import { showNetworkErrorAlert } from "app/utils/sosUtils"
import { Alert } from "react-native"

const MUTATION_KEY = "updateUserProfile"
const useUpdateUserProfile = () => {
  const { authenticationStore: { setProfilePic }} = useStores()

  const navigation = useNavigation<any>()
  const {authenticationStore: {  setUserProfile }} = useStores()
  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: (variables) => {
      // @ts-ignore
      const { name, image,userProfile } = variables

      return apiUpdateUserProfile({
        name,
        image,
        userProfile,
      })
    },
    onError: (error) => {
      captureApiException(error, {
        type: "update_user_profile",
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
          "An error occurred while updating your profile. Please try again later.",
        )
      }
    },
    onSuccess: async (data, _variables) => {
      if (data) setUserProfile(data);
      if (data && data?.profilePicture) setProfilePic(data?.profilePicture);
      navigation.reset({
        index: 0,  // The home screen will be the first screen
        routes: [{ name: SCREENS_HOME }],  // Replace 'Home' with your actual home screen name
      });
    },
  })
}

export default useUpdateUserProfile
