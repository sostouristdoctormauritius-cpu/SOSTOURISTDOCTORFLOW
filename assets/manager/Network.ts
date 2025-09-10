import { STORE_ACCESS_TOKEN, STORE_CREATE_BOOKING, STORE_REFRESH_TOKEN } from "app/constants/Store"
import { extractFilenameAndExtension, storeTokens } from "app/utils/sosUtils"
import ImageResizer from "react-native-image-resizer"

import type { ConsultationType } from "app/constants/GlobalTypes"
import { emitLogout } from "app/hook/useLogout"
import EphemeralStore from "app/manager/EphemeralStore"
import axios from "axios"
import dayjs from "dayjs"
import RNBlobUtil from "react-native-blob-util"

const isDev = process.env.IS_DEV === "true"
const API_URL = isDev ? process.env.BASE_URL_DEV : process.env.BASE_URL;
// alert(API_URL)
const LOGIN_URL = "/v1/auth/login"
// const FORGOT_PASSWORD_URL = "/v1/auth/forgot-password"
const FORGOT_PASSWORD_URL = "/v1/auth/app/forgot-password"
const UPDATE_PASS_URL = "/v1/auth//change-password"
const RESEND_OTP = "/v1/users/resent-otp"
const VERIFY_OTP = "/v1/users/verify-otp"
const REGISTER_URL = "/v1/auth/register"
console.log('API_URL---', API_URL);

const apiClient = axios.create({
  baseURL: API_URL,
})

type APIRegisterUserArgs = {
  name: string
  email: string
  password: string
  image?: string
  phone: string | number
  country_code: string | number
  userProfile: {
    language: string
    nickname: string
    dob: string
    gender: string
    nationality: string;
    phoneNumber?: number | string
  }
}
export type APIUpdateUserProfileArgs = {
  name?: string,
  image?: string;
  userProfile: {
    language?: string
    nickname?: string
    dob?: string
    gender?: string
    nationality?: string
    phoneNumber?: string
  }
}



export const apiRegisterUser = async ({
  name,
  email,
  password,
  image,
  phone,
  country_code,
  userProfile: { language, nickname, dob, gender, nationality },
}: APIRegisterUserArgs) => {


  const formData: any = new FormData();
  if (image) {
    const { filename, extension } = extractFilenameAndExtension(image);
    formData.append("profilePicture", {
      uri: image,
      type: `image/${extension}`,
      name: `${filename}.${extension}`,
    })
  }

  formData.append('name', name)
  formData.append('password', password)
  formData.append('email', email)
  formData.append('phone', phone)
  formData.append('country_code', country_code)


  formData.append('userProfile', JSON.stringify({
    language,
    nickname,
    dob,
    gender,
    nationality,
  }))
  console.log('==formData==', JSON.stringify(formData));

  return new Promise((resolve, reject) => {
    fetch(API_URL + REGISTER_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        return resolve(data)
      })
      .catch(error => {
        reject(error)
      });
  })
}

// export const apiLoginUser = ({ country_code, phone, password }: { country_code: string | number, phone: string | number; password: string }) => {
//   console.log('phone, password,country_code ', phone, password, country_code);
//   return new Promise((resolve, reject) => {
//     fetch(API_URL + LOGIN_URL, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ phone, password, country_code})
//     })
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         return resolve(data)
//       })
//       .catch(error => {
//         reject(error)
//       });
//   })
// }
export const apiLoginUser = ({ username, password, isPasswordOrOtp }: { username: string; password?: any, isPasswordOrOtp?: any }) => {

  let requestData = isPasswordOrOtp === 'password' ? { username, password, "isPasswordOrOtp": "password" } : { username, "isPasswordOrOtp": "otp" };

  return new Promise((resolve, reject) => {
    fetch(API_URL + LOGIN_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData)
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        return resolve(data)
      })
      .catch(error => {
        reject(error)
      });
  })
}

export const apiUpdateUserProfile = async ({ name, image, userProfile: { language, nickname, dob, gender, nationality, phoneNumber } }: APIUpdateUserProfileArgs) => {
  const updateURL = `/v1/users/current`
  const token = await EphemeralStore.getData(STORE_ACCESS_TOKEN)

  const formData: any = new FormData();

  console.log('imageimage', image);

  if (image) {
    const { filename, extension } = extractFilenameAndExtension(image);
    formData.append("profilePicture", {
      uri: image,
      type: `image/${extension}`,
      name: `${filename}.${extension}`,
    })
  }

  formData.append('name', name)

  formData.append('userProfile', JSON.stringify({
    language,
    nickname,
    dob,
    gender,
    nationality,
    phoneNumber
  }))
  console.log('for-update', JSON.stringify(formData));

  const response = await apiClient.patch(updateURL, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  })
  return response.data
}


export const apiRegisterUser123 = async ({
  name,
  email,
  password,
  userProfile: { language, nickname, dob, gender, nationality, phoneNumber },
}: APIRegisterUserArgs) => {
  const response = await apiClient.post(REGISTER_URL, {
    name,
    email,
    password,
    userProfile: {
      language,
      nickname,
      dob,
      gender,
      nationality,
      phoneNumber
    },
  })
  return response.data
}
export const apiRegisterdataUser = async ({

  email,
  password,

}: APIRegisterUserArgs) => {
  const response = await apiClient.post(REGISTER_URL, {

    email,
    password,

  })
  return response.data
}



export const apiUploadProfilePicture = async (token: string, fileUri: string) => {
  const uploadURL = `/v1/users/current/profilePicture/upload`
  const { filename, extension } = extractFilenameAndExtension(fileUri)
  const compressedImage = await ImageResizer.createResizedImage(
    fileUri,
    150,
    150,
    "JPEG",
    80,
    0,
    undefined,
  )
  const formData: any = new FormData()
  formData.append("profilePicture", {
    uri: compressedImage.uri,
    type: `image/${extension}`,
    name: `${filename}${extension}`,
  })

  const response = await apiClient.post(uploadURL, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  })
  return response.data
}


type APIPatchUserArgs = {
  name?: string | null
  profile?: {
    nickname?: string | null
    date_of_birth?: string | null
    gender?: string | null
    nationality?: string | null
    device_language?: string | null
  }
}

export const apiPatchUser = async (patchUserData: APIPatchUserArgs, token: string) => {
  const patchURL = "/accounts/me"

  const response = await apiClient.patch(patchURL, patchUserData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const apiCreateAppointment = async () => {
  const url = "/appointments/book-chat"

  const token = await EphemeralStore.getData(STORE_ACCESS_TOKEN)
  const response = await apiClient.post(
    url,
    {},
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  )

  return response.data
}

export const apiUpdateAppointment = async ({ appointmentId, date, symptoms }: any) => {
  const url = `/appointments/${appointmentId}/update-chat`

  const token = await EphemeralStore.getData(STORE_ACCESS_TOKEN)
  const response = await apiClient.put(
    url,
    {
      date,
      symptoms,
    },
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  )

  return response.data
}

export const apiPayAppointment = async () => {
  const pendingAppt = EphemeralStore.get(STORE_CREATE_BOOKING)
  const appointmentId = pendingAppt?.selected_appointment?.id

  const token = await EphemeralStore.getData(STORE_ACCESS_TOKEN)
  const url = `/appointments/${appointmentId}/pay`

  const response = await apiClient.post(
    url,
    {},
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  )

  return response.data
}

export const apiGetCurrentUser = async () => {
  const currentUserURL = "/v1/users/current"
  const token = await EphemeralStore.getData(STORE_ACCESS_TOKEN)

  const response = await apiClient.get(currentUserURL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const apiGetAllAppointments = async () => {
  const appointmentsURL = "/v1/appointments"
  const token = await EphemeralStore.getData(STORE_ACCESS_TOKEN)

  const response = await apiClient.get(appointmentsURL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data || []
}

export const apiGetMobileConfig = async () => {
  const configURL = "/v1/config/MOBILE_CONFIG_V1"

  const response = await apiClient.get(configURL)
  return response.data
}

export const apiGetAllDoctors = async () => {
  const doctorsURL = "/v1/users/doctors"
  const token = await EphemeralStore.getData(STORE_ACCESS_TOKEN)

  const response = await apiClient.get(doctorsURL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const apiGetAvailableSlots = async (consultationType: ConsultationType): Promise<any> => {
  const endpoint = "/v1/availability/available-slots"

  const params = new URLSearchParams({
    start: dayjs().format("YYYY-MM-DD"),
    end: `${dayjs().year()}-12-31`,
    consultationType,
  })

  const token = await EphemeralStore.getData(STORE_ACCESS_TOKEN)

  const response = await apiClient.get(`${endpoint}?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

type BookAppointment = {
  doctorId?: string
  date: string
  startTime: string
  consultationType: string
  symptoms: string[]
  additionalNote: string
  visitLocation?: {
    latitude: number
    longitude: number
  }
}

export const apiBookAppointment = async (appointmentData: BookAppointment): Promise<any> => {
  const url = "/v1/appointments"
  const token = await EphemeralStore.getData(STORE_ACCESS_TOKEN)

  const response = await apiClient.post(url, appointmentData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

/**
 * Fetches details for a specific appointment.
 * @param appointmentId The ID of the appointment to fetch details for.
 * @returns The appointment details.
 */
export const apiGetAppointmentDetailsById = async (appointmentId: string): Promise<any> => {
  const url = `/v1/appointments/${appointmentId}`
  const token = await EphemeralStore.getData(STORE_ACCESS_TOKEN)

  const response = await apiClient.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

// export const apiForgotPassword = async ({ email }: { email: string }) => {
//   const response = await apiClient.post(FORGOT_PASSWORD_URL, {
//     email, change-paasword
//   })
//   return response.data
// }

export const apiForgotPassword = async ({ email }: { email: string }) => {
  return new Promise((resolve, reject) => {
    fetch(API_URL + FORGOT_PASSWORD_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email })
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        return resolve(data)
      })
      .catch(error => {
        reject(error)
      });
  })
}
export const apiUpdatePassword = async ({ password, token }: { password: string, token: any }) => {
  return new Promise((resolve, reject) => {
    fetch(API_URL + UPDATE_PASS_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ newPassword: password })
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        return resolve(data)
      })
      .catch(error => {
        reject(error)
      });
  })
}


export const apiVerifyOtp = async ({ token, otp, fromScreen, username }: { token: any, otp: any, fromScreen: any, username?: any }) => {

  console.log(token, otp, fromScreen, username, 'token, otp,fromScreen,username');

  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,

  };
  console.log('headersheadersheaders', headers);

  let endpoint = VERIFY_OTP;
  if (fromScreen === "email-verify") {
    endpoint = "/v1/users/verify-otp-app";
  }
  console.log('endpointendpoint', endpoint);

  const response = await axios.post(API_URL + endpoint, { otp: otp }, {
    headers: headers,
  })
  return response.data
}

export const apiVerifyEmail = async ({ email }: { email: any }) => {
  console.log(email, 'responseresponseresponseresponse');

  let headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.post(API_URL + '/v1/auth/verify-email-app', { email }, {
    headers: headers,
  })

  return response.data
}

export const apiResendOtp = async ({ token }: { token: string | number }) => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,

  };
  console.log('headersheadersheaders', headers);
  const response = await axios.post(API_URL + RESEND_OTP, {}, {
    headers: headers,
  })
  return response.data
}



type GetPrescriptionsParams = {
  sortBy?: string
  limit?: number
  page?: number
}

export const apiGetMyPrescriptions = async (params: GetPrescriptionsParams = {}) => {
  const prescriptionsURL = "/v1/prescriptions/my-prescriptions"
  const token = await EphemeralStore.getData(STORE_ACCESS_TOKEN)

  // Build query parameters
  const queryParams = new URLSearchParams({
    sortBy: params.sortBy || "dateCreated:asc",
    limit: String(params.limit || 10),
    page: String(params.page || 1),
  })

  const response = await apiClient.get(`${prescriptionsURL}?${queryParams.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data || []
}

export const apiDownloadPrescriptionPDF = async (prescriptionId: string) => {
  const url = `/v1/prescriptions/my-prescriptions/${prescriptionId}/pdf`
  const token = await EphemeralStore.getData(STORE_ACCESS_TOKEN)
  const fullUrl = `${API_URL}${url}`

  const response = await RNBlobUtil.config({
    fileCache: true,
  }).fetch("GET", fullUrl, {
    Authorization: `Bearer ${token}`,
  })

  return response.base64()
}

let isRefreshing = false
let refreshSubscribers: ((token: string) => void)[] = []

function onRefreshed(token: string) {
  refreshSubscribers.forEach((callback) => callback(token))
  refreshSubscribers = []
}

export const apiRefreshTokens = async () => {
  const refreshURL = "/v1/auth/refresh-tokens"

  try {
    // Return existing refresh promise if one is in progress
    if (isRefreshing) {
      return new Promise((resolve) => {
        refreshSubscribers.push((token) => {
          resolve({ access: { token } })
        })
      })
    }

    isRefreshing = true
    const refreshToken = await EphemeralStore.getData(STORE_REFRESH_TOKEN)

    if (!refreshToken) {
      throw new Error("No refresh token available")
    }

    const response = await apiClient.post(refreshURL, {
      refreshToken,
    })

    const { data } = response

    // Store tokens before notifying subscribers
    await storeTokens(data)

    isRefreshing = false
    onRefreshed(data.access.token)

    return data
  } catch (error) {
    isRefreshing = false
    refreshSubscribers = []

    // Clear tokens on refresh failure
    await EphemeralStore.removeData(STORE_ACCESS_TOKEN)
    await EphemeralStore.removeData(STORE_REFRESH_TOKEN)

    throw error
  }
}

apiClient.interceptors.request.use(
  async (request) => {
    const excludedRoutes = [LOGIN_URL, REGISTER_URL, FORGOT_PASSWORD_URL] // Routes that shouldn't have tokens

    // Skip adding Authorization header for login or register requests
    if (excludedRoutes.some((route) => request.url?.includes(route))) {
      return request
    }

    const currentToken = await EphemeralStore.getData(STORE_ACCESS_TOKEN)
    if (currentToken && !request.headers.Authorization) {
      request.headers.Authorization = `Bearer ${currentToken}`
    }

    return request
  },
  (error) => Promise.reject(error),
)

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/v1/auth/refresh-tokens")
    ) {
      originalRequest._retry = true

      try {
        // If refresh in progress, wait for new token
        if (isRefreshing) {
          return new Promise((resolve) => {
            refreshSubscribers.push((token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`
              resolve(apiClient(originalRequest))
            })
          })
        }

        const refreshedTokens = await apiRefreshTokens()
        originalRequest.headers.Authorization = `Bearer ${refreshedTokens.access.token}`
        return apiClient(originalRequest)
      } catch (e) {
        // Handle failed refresh - clear tokens and redirect to login
        await EphemeralStore.removeData(STORE_ACCESS_TOKEN)
        await EphemeralStore.removeData(STORE_REFRESH_TOKEN)
        // showNetworkErrorAlert("Session Expired", "Please login again")
        emitLogout()
        return Promise.reject(error)
      }
    } else if (error.response?.status === 403) {
      // showNetworkErrorAlert("Network Access Denied", "Let's get in touch")
      emitLogout()
    }

    return Promise.reject(error)
  },
)
