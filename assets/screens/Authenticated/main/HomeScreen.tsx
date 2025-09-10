import { AutoImage } from "app/components"
import { emitLogout, useLogout } from "app/hook/useLogout"
import React, { useCallback, useEffect, useRef, useState } from "react"
import {
  Alert,
  Animated,
  DeviceEventEmitter,
  Dimensions,
  Easing,
  StyleSheet,
  TouchableOpacity,
} from "react-native"

import { useFocusEffect, useNavigation } from "@react-navigation/native"
import LogoutSVG from "app/components/SVG/logOutSVG"
import { Screen } from "app/components/Screen"
import HomeConsultation from "app/components/homeBlocks/homeConsultation"

import OnlineConsultation from "app/components/homeBlocks/onlineConsultations"
import UserProfilePicture from "app/components/userProfilePicture"
import Colors from "app/constants/Colors"
import { EVENT_APPOINTMENT_ADDED_TO_CALENDAR } from "app/constants/Events"
import useGetConfig from "app/hook/api/useGetConfig"
import { useGetCurrentUserProfile } from "app/hook/api/useGetCurrentUserProfile"
import { translate } from "app/i18n"
import { registerWithStream } from "app/manager/PushNotification/registerWithStream"
import { captureApiException } from "app/manager/Sentry"

import { useChatClient } from "app/manager/Stream/useChatClient"
import { useVideoClient } from "app/manager/Stream/useVideoClient"
import { useStores } from "app/models"
import DrawerModal from "./drawerComponents/Drawer"

const { width } = Dimensions.get("screen")

export default function HomeScreen() {

  const navigation = useNavigation()
  const [drawerVisible, setDrawerVisible] = useState(false)
  const {authenticationStore: { profilePic }} = useStores()

  const slideAnimation = useRef(new Animated.Value(-width)).current

  // ****** *** ********** DO NOT FUCKING REMOVE THIS ****** *** **********
  useVideoClient()
  useChatClient()
  // ****** *** ********** DO NOT FUCKING REMOVE THIS ****** *** **********

  useEffect(() => {
    console.log("registering devices with getStream.io")
    registerWithStream()
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      slideAnimation.setValue(-width)
      setDrawerVisible(false)
    })

    return () => {
      unsubscribe()
      slideAnimation.setValue(-width)
    }
  }, [navigation, slideAnimation])

  const openModal = useCallback(() => {
    slideAnimation.setValue(-width)
    setDrawerVisible(true)
    requestAnimationFrame(() => {
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start()
    })
  }, [slideAnimation])

  const closeModal = useCallback(() => {
    Animated.timing(slideAnimation, {
      toValue: -width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setDrawerVisible(false)
      slideAnimation.setValue(-width)
    })
  }, [slideAnimation])

  const { error: userProfileError } = useGetCurrentUserProfile()

  useEffect(() => {
    if (userProfileError) {
      captureApiException(userProfileError, {
        type: "user_profile_error",
      })
    }
  }, [userProfileError])

  useGetConfig()

  useLogout()

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: styles.header,
        headerTitleAlign: "center",

        headerLeft: () => {
          return (
            <TouchableOpacity style={styles.headerAvatarContainer} onPress={openModal}>
              <UserProfilePicture profilePic={profilePic} />
            </TouchableOpacity>
          )
        },
        headerTitle: () => {
          return (
            <AutoImage
              resizeMode="contain"
              // @ts-ignore
              style={styles.image}
              source={require("app/images/smallLogo/logo.png")}
            />
          )
        },
        headerRight: () => {
          const handleLogoutPress = () => {
            Alert.alert(translate("common.logOut"), translate("common.logoutConfirmation"), [
              {
                text: translate("common.cancel"),
                style: "cancel",
              },
              {
                text: translate("common.ok"),
                onPress: emitLogout,
              },
            ])
          }
          return (
            <TouchableOpacity onPress={handleLogoutPress} style={styles.logoutIcon}>
              <LogoutSVG />
            </TouchableOpacity>
          )
        },
      })
      console.log('---profilePic---',profilePic);
    }, [navigation, profilePic, openModal])
  )

  useEffect(() => {
    const createEvent = async () => {
      try {
        // clears all the screens in the current flow
        // @ts-expect-error
        navigation.popToTop()
      } catch (error) {
        Alert.alert("", `Error while saving event: ${error}`, [
          {
            text: translate("common.ok"),
            style: "cancel",
          },
        ])
      }
    }

    const calListener = DeviceEventEmitter.addListener(
      EVENT_APPOINTMENT_ADDED_TO_CALENDAR,
      createEvent,
    )

    return () => {
      calListener.remove()
    }
  }, [navigation])

  return [
    <Screen
      key="main-container"
      preset="auto"
      contentContainerStyle={styles.container}
      safeAreaEdges={["top"]}
    >
      
      <OnlineConsultation />
      <HomeConsultation />

      {/* <DiscountedOffersCarousel /> */}
    </Screen>,
    <DrawerModal
      key="modal-container"
      closeModal={closeModal}
      drawerVisible={drawerVisible}
      slideAnimation={slideAnimation}
    />,
  ]
}

const $size = {
  borderRadius: 24,
  height: 48,
  width: 48,
}

const $center = {
  alignItems: "center",
  justifyContent: "center",
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: { backgroundColor: Colors.background },
  image: {
    height: 33,
    width: 131,
  },
  // @ts-ignore
  logoutIcon: {
    ...$size,
    ...$center,
    marginHorizontal: 8,
  },
  // @ts-ignore
  headerAvatarContainer: {
    marginHorizontal: 8,
    ...$size,
    ...$center,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#000"
  },
})
