import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"

import React, { useEffect, useState } from "react"
import { TextStyle, TouchableOpacity, ViewStyle } from "react-native"

import BackButtonIcon from "app/components/SVG/BackButtonIcon"
import { Screen } from "app/components/Screen"
import { Text } from "app/components/Text"
import PricingFooter from "app/components/consultation/PricingFooter"
import Symptoms from "app/components/symptoms"
import Colors from "app/constants/Colors"
import { ConsultationType } from "app/constants/GlobalTypes"
import {
  SCREENS_CONSULTATION_BOOK_APPT,
  SCREENS_CONSULTATION_MODAL_SYMPTOM,
} from "app/constants/Screens"
import { spacing } from "app/constants/spacing"

type ConsultationStackParamList = {
  ConsultationSymptomSelection: {
    consultationType: ConsultationType.Video | ConsultationType.Chat | ConsultationType.Home
    doctors: Doctor[]
    location: { latitude: number; longitude: number }
  }
}

type RouteParams = RouteProp<ConsultationStackParamList, "ConsultationSymptomSelection">

export default function ConsultationSymtomSelection() {
  const route = useRoute<RouteParams>()
  const { consultationType, location, doctors } = route.params

  console.log('route.paramsroute.params',route.params);
  
  const navigation = useNavigation<any>()
  const [symptoms, setSymptoms] = useState([])
  const [additionalSymptom, setAdditionalSymptom] = useState("")

  const onBackPressed = () => {
    navigation.goBack()
  }

  const onSymptomPressed = (symptom: never) => {
    setSymptoms((prevSymptoms) => {
      const newSymptoms = new Set(prevSymptoms)
      if (newSymptoms.has(symptom)) {
        newSymptoms.delete(symptom)
      } else {
        newSymptoms.add(symptom)
      }
      return Array.from(newSymptoms)
    })
  }

  useEffect(() => {
    //@ts-ignore
    const { additionalSymptoms = null } = route.params
    if (additionalSymptoms) {
      setAdditionalSymptom(additionalSymptoms)
    }
  }, [route.params])

  const onAddSymptomPressed = () => {
    navigation.navigate(SCREENS_CONSULTATION_MODAL_SYMPTOM)
  }

  const onContinuePressed = () => {

    navigation.navigate(SCREENS_CONSULTATION_BOOK_APPT, {
      consultationType,
      symptoms,
      additionalSymptom,
      doctors,
      location,
    })
  }

  return (
    <Screen
      preset="auto"
      keyboardOffset={150}
      safeAreaEdges={["top"]}
      KeyboardAvoidingViewProps={{ enabled: false }}
      contentContainerStyle={$screenContentContainerStyle}
    >
      <TouchableOpacity style={[$backButtonStyle,{zIndex:99999}]} onPress={onBackPressed}>
        <BackButtonIcon width="28" height="28" />
      </TouchableOpacity>
      <Text
        style={$titleStyle}
        preset="screenHeader"
        tx="consultation.messaging.symptomSelection.title"
      />
      <Symptoms onSymptomPressed={onSymptomPressed} />
      <Text
        style={$additionalSymptomTitleStyle}
        preset="subSectionTitle"
        tx="consultation.messaging.symptomSelection.additionalSymptomTitle"
      />
      <TouchableOpacity style={$additionalSymptomNoteStyle} onPress={onAddSymptomPressed}>
        {additionalSymptom && additionalSymptom.trim() !== "" ? (
          <Text preset="textInputField" text={additionalSymptom} />
        ) : (
          <Text
            preset="textInputField"
            tx="consultation.messaging.symptomSelection.additionalSymptomPlaceholder"
          />
        )}
      </TouchableOpacity>

      <PricingFooter onContinuePressed={onContinuePressed}
        consultationType={consultationType} />
    </Screen>
  )
}

const $screenContentContainerStyle: ViewStyle = {
  // alignItems: "center",
  paddingVertical: spacing.lg,
  paddingHorizontal: spacing.lg,
}

const $backButtonStyle: ViewStyle = {
  alignSelf: "flex-start",
}

const $titleStyle: TextStyle = {
  marginTop: -28,
}

const $additionalSymptomTitleStyle: TextStyle = {
  marginTop: 12,
  alignSelf: "flex-start",
  color: Colors.screenTitleText,
}

const $additionalSymptomNoteStyle: TextStyle = {
  width: "100%",
  marginTop: 16,
}
