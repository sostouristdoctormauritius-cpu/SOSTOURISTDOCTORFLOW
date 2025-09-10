import React from "react"
import { Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"

import { useNavigation } from "@react-navigation/native"
import { AutoImage } from "app/components"
import { Text } from "app/components/Text"
import { ConsultationType } from "app/constants/GlobalTypes"
import {
  FontWeight,
  FontWeightType,
  relativeHeightToParent,
  relativeWidthToParent,
} from "app/utils/design"
import { SCREENS_CONSULTATION_SYMPTOM_SELECTION } from "app/constants/Screens"

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: "100%",
  },
  bloc: {
    borderRadius: 18,
    marginBottom: 16,
    overflow: "hidden" as "hidden" | "visible",
    width: "100%",
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  blockContainer: {
    width: "100%",
  },
  bookNowImg: {
    height: 16,
    marginLeft: 8,
    width: 16,
  },
  bookNowText: {
    fontWeight: FontWeight.bold,
    marginLeft: 20,
  },
  bookNowView: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 12,
    marginBottom: 17
  },
  content: {
    alignSelf: "center",
    width: Dimensions.get("screen").width - 15,
  },
  desc: {
    fontWeight: FontWeight.medium as FontWeightType,
    marginLeft: 20,
  },
  doc: {
    height: relativeHeightToParent(145),
    width: relativeWidthToParent(90),
    position: 'absolute',
    zIndex: 9999,
    right: 0,
    bottom: 0,
  },
  left: {
    width: '76%',
  },
  textStyle: {
    fontWeight: FontWeight.black,
    marginBottom: 18,
    marginLeft: 10,
  },
  title: {
    marginBottom: 4,
    marginLeft: 20,
    marginTop: 14,
  },
})

const OnlineConsultation = () => {
  const navigation = useNavigation<any>()
  const onNavigateToChatConsultation = () => {
    // navigation.navigate("ConsultationChatOnboardingScreen", {
    //   consultationType: ConsultationType.Chat,
    // })
     navigation.navigate(SCREENS_CONSULTATION_SYMPTOM_SELECTION, {
       consultationType: ConsultationType.Chat,
    })
  }

  const onNavigateToVideoConsultation = () => {
    // navigation.navigate("ConsultationChatOnboardingScreen", {
    //   consultationType: ConsultationType.Video,
    // })
    // navigation.navigate(SCREENS_CONSULTATION_ELIGIBLE_DOCTORS, {
    //   consultationType:ConsultationType.Video,
    // })
    navigation.navigate(SCREENS_CONSULTATION_SYMPTOM_SELECTION, {
      consultationType: ConsultationType.Video,
    })
  }

  return (
    <View style={styles.blockContainer}>
      <View style={{display: 'none'}}><Text tx="homeScreen.title" size="lg" weight="bold" style={styles.textStyle} /></View>
      <View style={styles.content}>
        <TouchableOpacity onPress={onNavigateToVideoConsultation}>
          <ImageBackground source={require("app/images/home/videoBackground.png")} style={styles.bloc}>
            <View style={styles.left}>
              <Text size="sm" weight="bold" tx="homeScreen.videoConsulation" style={styles.title} />
              <Text size="xxs" tx="homeScreen.videoConsulationDesc" style={styles.desc} />
              <View style={styles.bookNowView}>
                <Text size="xxs" tx="homeScreen.bookNow" style={styles.bookNowText} />
                <AutoImage
                  style={styles.bookNowImg}
                  source={require("app/images/home/bookNow.png")}
                />
              </View>
            </View>
            <View style={{display: 'none'}}><AutoImage style={[styles.doc, { top: 2 }]} source={require("app/images/home/docVideo.png")} /></View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={onNavigateToChatConsultation}>
          <ImageBackground source={require("app/images/home/chatBackground.png")} style={styles.bloc}>
            <View style={styles.left}>
              <Text
                size="sm"
                weight="bold"
                tx="homeScreen.messageConsultation"
                style={styles.title}
              />
              <Text size="xxs" tx="homeScreen.messageConsultationDesc" style={styles.desc} />
              <View style={styles.bookNowView}>
                <Text size="xxs" tx="homeScreen.bookNow" style={styles.bookNowText} />
                <AutoImage
                  style={styles.bookNowImg}
                  source={require("app/images/home/bookNow.png")}
                />
              </View>
            </View>
            <View style={{display: 'none'}}><AutoImage
              resizeMode="cover"
              style={[styles.doc, { bottom: -15 }]}
              source={require("app/images/home/docChat.png")}
            /></View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnlineConsultation
