import { Alert, Linking } from "react-native"

import {
  STORE_ACCESS_TOKEN,
  STORE_EXPIRY_TIME,
  STORE_REFRESH_TOKEN,
  STORE_USER_INITIAL_MAP_ACCESS,
  STORE_USER_PROFILE,
} from "app/constants/Store"
import { Reactotron } from "app/devtools/ReactotronClient"
import { emitLogout } from "app/hook/useLogout"
import EphemeralStore from "app/manager/EphemeralStore"
import dayjs from "dayjs"

type TokenInfo = {
  token: string
  expires: string
}

type Tokens = {
  access: TokenInfo
  refresh: TokenInfo
}

export const saveTokens = async (data?: any) => {
  const accessToken = data?.tokens?.access
  const refreshToken = data?.tokens?.refresh

  if (!accessToken || !refreshToken) {
    throw new Error("Invalid token data received")
  }

  await storeTokens({ access: accessToken, refresh: refreshToken })
  await saveExpiryTime(accessToken.expires)
  await EphemeralStore.storeData(STORE_USER_PROFILE, data)

  await new Promise((resolve) => setTimeout(resolve, 100))
}

export const storeTokens = async (data: any) => {
  if (!data?.access?.token || !data?.refresh?.token) {
    throw new Error("Invalid token data received")
  }

  try {
    // Store tokens atomically to prevent race conditions
    await Promise.all([
      EphemeralStore.storeData(STORE_ACCESS_TOKEN, data.access.token),
      EphemeralStore.storeData(STORE_REFRESH_TOKEN, data.refresh.token),
    ])

    // Small delay to ensure tokens are stored
    await new Promise((resolve) => setTimeout(resolve, 100))
  } catch (error) {
    console.error("Error storing tokens:", error)
    throw error
  }
}

export const saveExpiryTime = async (expiresIn: number) => {
  const expiryTime = new Date().getTime() + expiresIn * 1000
  await EphemeralStore.storeData(STORE_EXPIRY_TIME, expiryTime.toString())
}

export const isTokenExpiring = async () => {
  const expiryTime = await EphemeralStore.getData(STORE_EXPIRY_TIME)
  const currentTime = new Date().getTime()
  const threshold = 5 * 60 * 1000
  const isExpired = Number(expiryTime) - currentTime < threshold

  return isExpired
}

export const showNetworkErrorAlert = (title: string, message: string, error?: any) => {
  Alert.alert(title, message, [
    {
      text: "Cancel",
      style: "cancel",
      onPress: emitLogout,
    },
    {
      text: "Call",
      onPress: () => Linking.openURL("tel:${+23057287110}"),
    },
    {
      text: "Email",
      onPress: () => Linking.openURL("mailto:admin@sostouristdoctor.com"),
    },
  ])
}

export const showTempNetworkErrorAlert = (
  title: string,
  message: string,
  callback?: () => void,
) => {
  Alert.alert(title, message, [
    {
      text: "Ok",
      onPress: callback,
    },
  ])
}

export const saveInitialMapAccess = async (hasAccessedMapBefore: boolean) => {
  await EphemeralStore.storeData(STORE_USER_INITIAL_MAP_ACCESS, hasAccessedMapBefore)
}

export const retrieveInitialMapAccess = async () => {
  const hasAccessedMapBefore = await EphemeralStore.getData(STORE_USER_INITIAL_MAP_ACCESS)

  if (hasAccessedMapBefore === undefined) {
    await EphemeralStore.storeData(STORE_USER_INITIAL_MAP_ACCESS, false)
  }

  return hasAccessedMapBefore
}

// export const summarizeWorkingHours = (availabilities: DoctorAvailabilityResource[]) => {
//   // Sort availabilities by day
//   const sortedAvailabilities = [...availabilities].sort((a, b) => a.day - b.day)

//   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

//   const summarizedWorkingHours = []
//   let currentRange = null

//   for (const availability of sortedAvailabilities) {
//     const day = daysOfWeek[availability.day]
//     const time = `${availability.start_time} to ${availability.end_time}`

//     if (!currentRange || currentRange.time !== time) {
//       // Start a new range
//       currentRange = { startDay: day, endDay: day, time }
//       summarizedWorkingHours.push(currentRange)
//     } else {
//       // Extend the current range
//       currentRange.endDay = day
//     }
//   }

//   // Convert the summarized working hours to a string
//   return summarizedWorkingHours
//     .map(
//       (range) =>
//         `${range.startDay}${range.startDay !== range.endDay ? "-" + range.endDay : ""} (${
//           range.time
//         })`,
//     )
//     .join("\n")
// }

export const prt = (message: string, data: any) => {
  if (!__DEV__) {
    return
  }

  // console.debug(`${message}`, JSON.stringify(data, null, 2))
  Reactotron.log(`${message}`, data)
}

export const formatDateForApptBooking = (selectedDate: string, appointmentTime: string) => {
  // Convert selectedDate to a dayjs object
  const date = dayjs(selectedDate, "dddd, D MMMM YYYY")

  // Split the appointmentTime into hours and minutes
  const [hours, minutes] = appointmentTime.split(":")
  const period = minutes.split(" ")[1]

  // Convert 12-hour time to 24-hour time
  let hours24 = parseInt(hours)
  if (period === "PM" && hours24 !== 12) {
    hours24 += 12
  } else if (period === "AM" && hours24 === 12) {
    hours24 = 0
  }

  // Set the time on the date
  const dateTime = date.hour(hours24).minute(parseInt(minutes))

  // Format the date and time as a string
  const dateTimeString = dateTime.format("YYYY-MM-DD HH:mm")

  return dateTimeString
}

/**
 * Extracts the filename and its extension from a given URI.
 * @param {string} uri - The URI from which to extract the filename and extension.
 * @returns {{ filename: string, extension: string }} An object containing the filename and its extension.
 */
export const extractFilenameAndExtension = (
  uri: string,
): { filename: string; extension: string } => {
  const matches = uri.match(/\/([^\/]+)\.([^\.]+)$/)
  if (!matches) {
    throw new Error("Invalid URI or URI does not contain a filename and extension")
  }
  const [, filename, extension] = matches
  return { filename, extension }
}

export const handleRequestError = (error: any) => {
  const errorResponse = error?.response?.data
  const errorMsg = errorResponse?.message || "An unexpected error occurred"
  const errorCode = errorResponse?.code || "XXX"
  if (errorResponse) {
    Alert.alert(
      `Request failed`,
      `
        Reason: ${errorMsg}
        
        Error Code: ${errorCode}
        `,
      [
        {
          text: "OK",
          onPress: () => {
            emitLogout()
          },
        },
      ],
    )
  }
}

export const emailRegex = /^\w+([-.]?\w+)*@\w+([-.]?\w+)*(\.\w{2,3})+$/
