import * as Location from "expo-location"
import { useEffect, useState } from "react"
import { Alert, Linking } from "react-native"

interface LocationState {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

export function useLocationRequest() {
  const [location, setLocation] = useState<LocationState | null>(null)

  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== "granted") {
        Alert.alert(
          "Permission Required",
          "This app needs location permissions to function. Open settings to grant permission.",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Open Settings",
              onPress: () => Linking.openSettings(),
            },
          ],
        )
        return
      }

      try {
        const locationResult = await Location.getCurrentPositionAsync({})
        const { latitude, longitude } = locationResult.coords

        setLocation({
          latitude,
          longitude,
          latitudeDelta: 0.0009,
          longitudeDelta: 0.0009,
        })
      } catch (e) {
        console.error("An error occurred while fetching current location", e)
      }
    })()
  }, [])

  return location
}
