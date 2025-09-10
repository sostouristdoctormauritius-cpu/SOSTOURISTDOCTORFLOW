import { useNavigation, useRoute } from "@react-navigation/native"
import { FlashList } from "@shopify/flash-list"
import React, { useEffect, useState } from "react"
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from "react-native"

import { Button } from "app/components/Button"
import BackButtonIcon from "app/components/SVG/BackButtonIcon"
import { Screen } from "app/components/Screen"
import { Text } from "app/components/Text"
import EligibleDoctorRow from "app/components/consultation/EligibleDoctorRow"
import PrivacyWarningModal from "app/components/consultation/PrivacyWarningModal"
import Colors from "app/constants/Colors"
import { ConsultationType } from "app/constants/GlobalTypes"
import { SCREENS_CONSULTATION_SYMPTOM_SELECTION } from "app/constants/Screens"
import { spacing } from "app/constants/spacing"
import { TxKeyPath } from "app/i18n"
import { useMutation } from "@tanstack/react-query"
import useGetAllDoctors from "app/hook/api/useGetAllDoctors"

type RouteParams = {
  consultationType: ConsultationType
  doctors: Doctor[]
  location: { latitude: number; longitude: number }
}

const Config = {
  [ConsultationType.Chat]: {
    title: "consultation.messaging.eligibleDoctors.titleChat",
  },
  [ConsultationType.Video]: {
    title: "consultation.messaging.eligibleDoctors.titleVideo",
  },
  [ConsultationType.Home]: {
    title: "consultation.messaging.eligibleDoctors.titleHome",
  },
}
export default function ConsultationEligibleDoctorsScreen() {
  const route = useRoute()
  const navigation = useNavigation()
  const { consultationType, location } = route.params as RouteParams
  const [modalVisible, setModalVisible] = useState(false)
  const [doctors, setDoctors] = useState<Doctor[]>([])

  const getAllDocsMtx = useGetAllDoctors() // or however you're defining your mutation
  useEffect(() => {
    // Somewhere in your function
    getAllDocsMtx.mutateAsync()
      .then((response) => {
        console.log('Response:', response);
        if (response && response?.results) {
          setDoctors(response?.results)
        }
        // Use your response here
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])

  const onContinuePressed = () => {
    // @ts-ignore
    // navigation.navigate(SCREENS_CONSULTATION_SYMPTOM_SELECTION, {
    //   consultationType,
    //   doctors,
    //   location,
    // })
    navigation.navigate('ConsultationChatOnboardingScreen', {
      consultationType,
      doctors,
      location,
    })
  }

  // const onDoctorRowPressed = (doctor: Doctor) => {
  //   // @ts-ignore
  //   navigation.navigate(SCREENS_CONSULTATION_MODAL_DOCTOR, {
  //     profilePicture: doctor.userProfile?.profilePicture,
  //     name: doctor.name,
  //     specialisation: doctor.doctorProfile.specialisation,
  //     // rating: doctor.ratings,
  //     // ratingCount: doctor.ratings_count,
  //     address: doctor.doctorProfile.address,
  //     workingHours: doctor.doctorProfile.workingHours, // summarizeWorkingHours(doctor.availabilities),
  //     bio: doctor.doctorProfile.bio ?? "",
  //   })
  // }

  const onBackPressed = () => {
    navigation.goBack()
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Screen
      preset="fixed"
      keyboardOffset={150}
      safeAreaEdges={["top"]}
      KeyboardAvoidingViewProps={{ enabled: false }}
      contentContainerStyle={styles.$screenContentContainerStyle}
    >
      {
        getAllDocsMtx.isPending ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={'large'} color={Colors.buttonPrimaryBackground} />
          </View>
        )
          :
          <>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "100%" }}>
              <TouchableOpacity onPress={onBackPressed}>
                <BackButtonIcon width="28" height="28" />
              </TouchableOpacity>
              <Text
                style={styles.$titleStyle}
                preset="screenHeader"
                tx={Config[consultationType].title as TxKeyPath}
              />
              <View />
            </View>

            <Text
              style={styles.$descriptionStyle}
              preset="description"
              tx="consultation.messaging.eligibleDoctors.description"
            />

            <View style={styles.$doctorsContainerStyle}>
              <FlashList
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      key={item?.name}
                      onPress={() => {
                        //  onDoctorRowPressed(item)
                      }}
                    >
                      <EligibleDoctorRow
                        title={item?.name}
                        description={item?.doctorProfile.specialisation}
                        imageUrl={item?.userProfile?.profilePicture}
                      />
                    </TouchableOpacity>
                  )
                }}
                ItemSeparatorComponent={() => <View style={styles.$doctorsRowSeparator} />}
                estimatedItemSize={10}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 90 }}
                data={doctors}
              />
              <Button
                preset="primary"
                style={styles.$buttonStyle}
                tx="common.continue"
                onPress={onContinuePressed}
              />
            </View>

          </>
      }
      <PrivacyWarningModal
        showModal={modalVisible}
        onClose={() => {
          setModalVisible(false)
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  $backButtonStyle: {
    alignSelf: "flex-start",
  },
  $buttonStyle: {
    width: "100%",
  },
  $descriptionStyle: {
    marginTop: 26.7,
  },
  $doctorsContainerStyle: {
    flex: 1,
    paddingTop: spacing.md,
    width: "100%",
  },
  $doctorsRowSeparator: {
    backgroundColor: Colors.rowSeparator,
    height: 0.5,
    width: "100%",
  },
  $screenContentContainerStyle: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  $titleStyle: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center"
  },
})
