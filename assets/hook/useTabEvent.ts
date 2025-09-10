import { getFocusedRouteNameFromRoute, useNavigation, useRoute } from "@react-navigation/native"
import { useCallback, useEffect, useLayoutEffect } from "react"
import { DeviceEventEmitter } from "react-native"

import { EVENT_HIDE_TAB_BAR, EVENT_SHOW_TAB_BAR } from "../constants/Events"

export const useTabEvent = (screenName: string) => {
  const route = useRoute()

  const focusedRoute = getFocusedRouteNameFromRoute(route)
  const navigation = useNavigation()
  const hideTabBar = useCallback(
    (showTabBar = true) => {
      navigation.setOptions({
        tabBarStyle: {
          display: showTabBar ? "flex" : "none",
        },
      })
    },
    [navigation],
  )

  useEffect(() => {
    const hideTabBarListener = DeviceEventEmitter.addListener(EVENT_HIDE_TAB_BAR, () =>
      hideTabBar(false),
    )
    const showTabBarListener = DeviceEventEmitter.addListener(EVENT_SHOW_TAB_BAR, () =>
      hideTabBar(true),
    )

    return () => {
      hideTabBarListener.remove()
      showTabBarListener.remove()
    }
  }, [focusedRoute, hideTabBar, route, screenName])

  useLayoutEffect(() => {
    if (focusedRoute) {
      navigation.setOptions({
        tabBarStyle: {
          display: focusedRoute !== screenName ? "flex" : "none",
        },
      })
    }
  }, [focusedRoute, navigation, screenName])

  return focusedRoute
}
