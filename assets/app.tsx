import * as Sentry from "@sentry/react-native"
import "./i18n"
import "./utils/ignoreWarnings"

import * as Linking from "expo-linking"
import * as storage from "./utils/storage"

import NetInfo from "@react-native-community/netinfo"
import { DefaultTheme } from "@react-navigation/native"
import { StreamVideo } from "@stream-io/video-react-native-sdk"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SOSChatProvider } from "app/manager/Stream/ChatContext"
import { StreamChatInstance, StreamVideoInstance } from "app/manager/Stream/streamClients"
import SplashAnimation from "app/screens/Unauthenticated/SplashAnimation"
import { useFonts } from "expo-font"
import React, { useEffect, useState } from "react"
import { ViewStyle } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { PaperProvider } from "react-native-paper"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { Chat, OverlayProvider } from "stream-chat-react-native"
import NoInternetModal from "./components/NoInternetModal"
import Config from "./config"
import { requestPushNotificationPermissions } from "./manager/PushNotification/requestPermission"
import { useInitialRootStore } from "./models"
import { AppNavigator, useNavigationPersistence } from "./navigators"
import IncomingCallScreen from "./screens/Authenticated/main/videoCall/IncomingCallScreen"
import { ErrorBoundary } from "./screens/ErrorScreen/ErrorBoundary"
import { customFontsToLoad } from "./theme"

if (__DEV__) {
  // Load Reactotron configuration in development.
  require("./devtools/ReactotronConfig.ts")
}

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

// Web linking configuration
const prefix = Linking.createURL("/")
const config = {
  screens: {
    Login: {
      path: "",
    },
    SCREENS_VIDEO_CALL_RINGING: {
      path: "video-call/ringing",
    },
  },
}

const queryClient = new QueryClient()
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F71E27",
    secondary: "#2FB645",
    tertiary: "#FFA011",
  },
}

const emptyCallback = () => {
  // do nothing
}

/**
 * This is the root component of our app.
 * @param {AppProps} props - The props for the `App` component.
 * @returns {JSX.Element} The rendered `App` component.
 */
function App() {
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY)

  const [areFontsLoaded] = useFonts(customFontsToLoad)
  const [isAnimationFinished, setIsAnimationFinished] = useState(false)
  const [isInternetConnected, setIsInternetConnected] = useState(true)
  const { rehydrated } = useInitialRootStore(emptyCallback)

  useEffect(() => {
    requestPushNotificationPermissions()
  }, [])

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected !== null && state.isConnected === false) {
        // Set internet connection status to false when not connected
        setIsInternetConnected(false)
      } else if (state.isConnected === true && state.isInternetReachable !== undefined) {
        // Set connection status based on reachability
        setIsInternetConnected(state?.isInternetReachable ?? false)
      }
    })

    // Unsubscribe
    return () => unsubscribe()
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationFinished(true)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (!rehydrated || !isNavigationStateRestored || !areFontsLoaded || !isAnimationFinished) {
    return <SplashAnimation onAnimationFinish={() => setIsAnimationFinished(true)} />
  }

  const linking = {
    prefixes: [prefix],
    config,
  }

  // otherwise, we're ready to render the app
  return (
    <>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ErrorBoundary catchErrors={Config.catchErrors}>
          <GestureHandlerRootView style={$container}>
            <PaperProvider theme={theme}>
              <QueryClientProvider client={queryClient}>
                <SOSChatProvider>
                  <OverlayProvider>
                    <StreamVideo client={StreamVideoInstance}>
                      <Chat client={StreamChatInstance}>
                        <AppNavigator
                          linking={linking}
                          initialState={initialNavigationState}
                          onStateChange={onNavigationStateChange}
                        />
                        <IncomingCallScreen />
                      </Chat>
                    </StreamVideo>
                  </OverlayProvider>
                </SOSChatProvider>
              </QueryClientProvider>
            </PaperProvider>
          </GestureHandlerRootView>
        </ErrorBoundary>
      </SafeAreaProvider>
      <NoInternetModal shouldShow={!isInternetConnected} />
    </>
  )
}

export default Sentry.wrap(App)

const $container: ViewStyle = {
  flex: 1,
}
