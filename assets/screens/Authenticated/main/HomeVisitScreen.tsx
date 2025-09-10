import React, { useCallback, useEffect, useState } from "react"
import { fromLatLng, setKey, setLanguage, setLocationType, setRegion } from "react-geocode"
import { ActivityIndicator, Alert, Platform, StyleSheet, View } from "react-native"
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete"
import MapView, { MapPressEvent, Marker, PROVIDER_GOOGLE, Region } from "react-native-maps"
import { MarkerDragStartEndEvent } from "react-native-maps/lib/sharedTypes"
import 'react-native-get-random-values';

import { useNavigation } from "@react-navigation/native"
import HeaderBackButton from "app/components/headerBackButton"
import ModalChooseLocation from "app/components/modalChooseLocation"
import Colors from "app/constants/Colors"
import { ConsultationType } from "app/constants/GlobalTypes"
import { GoogleSOS } from "app/constants/Google"
import { SCREENS_CONSULTATION_SYMPTOM_SELECTION } from "app/constants/Screens"
import { useLocationRequest } from "app/hook/useLocationRequest"
import { translate } from "app/i18n"
import { relativeHeightToParent, relativeWidthToParent } from "app/utils/design"
import { retrieveInitialMapAccess, saveInitialMapAccess } from "app/utils/sosUtils"
import { useHeader } from "app/utils/useHeader"

const ZOOM_DELTA = GoogleSOS.MAPS.ZOOM_LEVEL
const LOCATION = {
  latitude: -20.1616237,
  longitude: 57.5921068,
  latitudeDelta: 0.0009,
  longitudeDelta: 0.0009,
}

setLocationType("ROOFTOP")
setKey("AIzaSyAAq8RDC_bTQdKOB3-gfjrugIJ3aFS-je8")
setLanguage("en")
setRegion("mu")

export default function HomeVisitScreen() {
  const [location, setLocation] = useState<Region | null>(null)
  const [markerCoordinate, setMarkerCoordinate] = useState<Region | null>(null)
  const [reversedAddress, setReversedAddress] = useState("")
  const [name, setName] = useState("")
  const navigation = useNavigation()

  const currentLocation = useLocationRequest()

  useHeader({
    title: translate("homeConsultation.pickLocation"),
    LeftActionComponent: <HeaderBackButton />,
  })

  useEffect(() => {
    const fetchInitialMapAccess = async () => {
      const mapAccess = await retrieveInitialMapAccess()

      if (!mapAccess) {
        Alert.alert(
          translate("homeConsultation.mapView.alertTitle"),
          translate("homeConsultation.mapView.alertDescription"),
          [
            {
              text: translate("homeConsultation.mapView.alertOkay"),
              onPress: () => updateMapAccess(),
            },
          ],
        )
      }
    }

    fetchInitialMapAccess()
  }, [])

    useEffect(() => {
    // gets the current location of the user right when the screen is loaded
    if (currentLocation) {
      setLocation(currentLocation)
      updateAddressDetails(currentLocation)
    }
  }, [currentLocation, updateAddressDetails])

  const updateMapAccess = async () => {
    await saveInitialMapAccess(true)
  }

    const updateMarkerCoordinate = useCallback(
    (lat: number, lon: number) => {
      const newLocation = {
        ...location,
        latitude: lat,
        longitude: lon,
      }
      setMarkerCoordinate(newLocation)
      updateAddressDetails(newLocation)
      return newLocation
    },
    [location, updateAddressDetails],
  )

  const updateAddressDetails = useCallback(async (addresses: any) => {
    try {
      const { latitude, longitude } = addresses
      const response = await fromLatLng(latitude.toString(), longitude.toString())
      const address = response?.results[0]?.formatted_address
      if (address) {
        const fullAddress = address.split(", ")
        setName(fullAddress[0] || "")
        setReversedAddress(address)
      }
    } catch (error) {
      console.error("Error updating address:", error)
      // Handle error appropriately
    }
  }, [])

  const onPressRegion = useCallback(async (mapPressEvent: MapPressEvent) => {
    const { latitude, longitude } = mapPressEvent.nativeEvent.coordinate
    const newLocation = updateMarkerCoordinate(latitude, longitude)
    await updateAddressDetails(newLocation)
  }, [updateAddressDetails, updateMarkerCoordinate])

  const onChooseLocation = useCallback(() => {
        navigation.navigate(SCREENS_CONSULTATION_SYMPTOM_SELECTION, {
      location: markerCoordinate ?? location,
      name,
      reversedAddress,
      consultationType: ConsultationType.Home,
    })
  }, [markerCoordinate, name, navigation, reversedAddress, location])

  const onDragEnd = useCallback((e: MarkerDragStartEndEvent) => {
    const { latitude, longitude } = e.nativeEvent.coordinate
    updateMarkerCoordinate(latitude, longitude)
  }, [updateMarkerCoordinate])

  const onPressPlaceSuggestion = useCallback(
    (data: GooglePlaceData, details: GooglePlaceDetail | null) => {
      if (details?.geometry?.location) {
        const { lat, lng } = details.geometry.location

        const newLocation = {
          latitude: lat,
          longitude: lng,
          latitudeDelta: ZOOM_DELTA,
          longitudeDelta: ZOOM_DELTA,
        }

        setLocation(newLocation)
        setMarkerCoordinate(newLocation)
        updateAddressDetails(newLocation)
      } 
    },
    [updateAddressDetails],
  )

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation
        region={location ?? LOCATION}
        style={styles.map}
        onPress={onPressRegion}
        {...(Platform.OS === "android" && {
          customMapStyle: SOSMapsx,
          provider: PROVIDER_GOOGLE,
        })}
      >
        {markerCoordinate && (
          <Marker
            draggable
            coordinate={markerCoordinate}
            onDragEnd={onDragEnd}
            title="Home Visit"
          />
        )}
      </MapView>
      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          debounce={30}
          fetchDetails
          onPress={onPressPlaceSuggestion}
          placeholder={translate("homeConsultation.mapView.addressFormPlaceholder")}
          query={{
            key: "AIzaSyAAq8RDC_bTQdKOB3-gfjrugIJ3aFS-je8",
            language: "en",
            components: "country:MU",
          }}
          onFail={(error) => console.error(error)}
          returnKeyType="default"
          styles={PlacesStyles}
          listLoaderComponent={
            <View style={styles.center}>
              <ActivityIndicator color={Colors.buttonPrimaryBackground} size={"small"} />
            </View>
          }
        />
      </View>
      <ModalChooseLocation
        name={name}
        onChooseLocation={onChooseLocation}
        reversedAddress={reversedAddress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  searchContainer: {
    height: 200,
    marginTop: 25,
  },
})

const PlacesStyles = {
  textInputContainer: {
    borderRadius: 5,
    padding: 5,
    width: relativeWidthToParent(384),
    alignSelf: "center",
  },
  textInput: {
    height: relativeHeightToParent(64),
    color: "#5d5d5d",
    fontSize: 16,
    borderRadius: 32,
    paddingLeft: 18,
  },
  predefinedPlacesDescription: {
    color: "#1faadb",
  },
}

const SOSMapsx = [
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#d6e2e6",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#cfd4d5",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#7492a8",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels.text.fill",
    stylers: [
      {
        lightness: 25,
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#cfd4d5",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#24a5bf",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#dde2e3",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#228B22",
      },
    ],
  },
  {
    featureType: "landscape.natural.terrain",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#dde2e3",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.icon",
    stylers: [
      {
        saturation: -100,
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#588ca4",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#a9de83",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#bae6a1",
      },
    ],
  },
  {
    featureType: "poi.sports_complex",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#c6e8b3",
      },
    ],
  },
  {
    featureType: "poi.sports_complex",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#bae6a1",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        saturation: -45,
      },
      {
        lightness: 10,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#41626b",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#c1d1d6",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#a6b5bb",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#9fb6bd",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.icon",
    stylers: [
      {
        saturation: -70,
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#b4cbd4",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#588ca4",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#008cb5",
      },
    ],
  },
  {
    featureType: "transit.station.airport",
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#a6cbe3",
      },
    ],
  },
]
