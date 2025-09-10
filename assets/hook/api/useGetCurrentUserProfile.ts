import { useQuery } from "@tanstack/react-query"
import { apiGetCurrentUser } from "app/manager/Network"
import { useStores } from "app/models"

const QUERY_KEY = "curUserProfile"
export const useGetCurrentUserProfile = () => {
  const {
    authenticationStore: { setUserProfile },
  } = useStores()

  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const curUserResponse = await apiGetCurrentUser();
      console.log('curUserResponsecurUserResponse',curUserResponse);
      
      setUserProfile(curUserResponse)
      return curUserResponse
    },
  })
}
