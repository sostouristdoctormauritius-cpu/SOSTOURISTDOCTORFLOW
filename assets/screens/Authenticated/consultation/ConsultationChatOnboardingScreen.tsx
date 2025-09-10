import { useNavigation, useRoute } from "@react-navigation/native"
import BackButtonIcon from "app/components/SVG/BackButtonIcon"
import ChatVisitSVG from "app/components/SVG/chatVisitSVG"
import HomeVisitSVG from "app/components/SVG/homeVisitSVG"
import VideoVisitSVG from "app/components/SVG/videoVisitSVG"
import { Screen } from "app/components/Screen"
import { Text } from "app/components/Text"
import GreenButton from "app/components/greenButton"
import { ConsultationType } from "app/constants/GlobalTypes"
import { SCREENS_CONSULTATION_SYMPTOM_SELECTION } from "app/constants/Screens"
import { spacing } from "app/constants/spacing"
import useGetAllDoctors from "app/hook/api/useGetAllDoctors"
import { TxKeyPath, translate } from "app/i18n"
import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"

const Config = {
  [ConsultationType.Chat]: {
    title: "consultation.messaging.onboarding.titleChat",
    desc: "consultation.messaging.onboarding.descriptionChat",
  },
  [ConsultationType.Video]: {
    title: "consultation.messaging.onboarding.titleVideo",
    desc: "consultation.messaging.onboarding.descriptionVideo",
  },
  [ConsultationType.Home]: {
    title: "consultation.messaging.onboarding.titleHome",
    desc: "consultation.messaging.onboarding.descriptionHome",
  },
}

type RouteParams = {
  consultationType: ConsultationType
  location: { latitude: number; longitude: number },
  doctors?: Doctor[]
}

export default function ConsultationChatOnboardingScreen() {
  const route = useRoute()
  const { consultationType, location, doctors } = route.params as RouteParams
  const navigation = useNavigation()
  const getAllDocsMtx = useGetAllDoctors()

  const onBookNowPressed = () => {
    // @ts-ignore
    // getAllDocsMtx.mutate({ consultationType, location })
    navigation.navigate(SCREENS_CONSULTATION_SYMPTOM_SELECTION, {
      consultationType,
      doctors,
      location,
    })
  }

  const onBackPressed = () => {
    navigation.goBack()
  }

  return (
    <Screen
      preset="fixed"
      keyboardOffset={150}
      safeAreaEdges={["top"]}
      contentContainerStyle={styles.$screenContentContainerStyle}
    >
      <TouchableOpacity style={styles.$backButtonStyle} onPress={onBackPressed}>
        <BackButtonIcon width="28" height="28" />
      </TouchableOpacity>
      <View style={styles.$svgContainer}>
        {consultationType === ConsultationType.Home && <HomeVisitSVG />}
        {consultationType === ConsultationType.Chat && <ChatVisitSVG />}
        {consultationType === ConsultationType.Video && <VideoVisitSVG />}
      </View>
      <Text
        style={styles.$titleStyle}
        preset="screenTitle"
        tx={Config[consultationType].title as TxKeyPath}
      />
      <Text
        style={styles.$descriptionStyle}
        preset="description"
        tx={Config[consultationType].desc as TxKeyPath}
      />

      <GreenButton
        onPress={onBookNowPressed}
        buttonTitle={translate("consultation.messaging.onboarding.action")}
        buttonStyle={styles.$buttonStyle}
        isSecondary={true}
        isLoading={getAllDocsMtx.isPending}
      />
    </Screen>
  )
}
const styles = StyleSheet.create({
  $backButtonStyle: {
    alignSelf: "flex-start",
  },
  $buttonStyle: {
    marginTop: 57,
    width: "100%",
  },
  $descriptionStyle: {
    marginTop: 8,
  },
  $screenContentContainerStyle: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  $svgContainer: {
    marginTop: 114,
  },
  $titleStyle: {
    marginTop: 26,
  },
})
