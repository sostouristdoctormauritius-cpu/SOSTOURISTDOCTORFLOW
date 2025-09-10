import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TabBarIcon from "app/components/tabBarIcon"
import { SCREENS_APPOINTMENT } from "app/constants/Screens"
import Screens from "app/screens"
import { colors, spacing, typography } from "app/theme"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useStores } from "app/models"
import { observer } from "mobx-react-lite"
import TabIconWithBadge from "../components/TabIconWithBadge"

const Tab = createBottomTabNavigator()

// Separate components for tabBarIcon to avoid unstable nested components
const HomeTabIcon = ({ focused }: { focused: boolean }) => (
  <TabBarIcon focused={focused} iconName="home" />
)

const AppointmentTabIcon = ({ focused }: { focused: boolean }) => {
  const { appointmentStore } = useStores()
  return (
    <TabIconWithBadge
      focused={focused}
      iconName="appointment"
      showBadge={appointmentStore?.hasNewAppointment || false}
    />
  )
}

const ChatTabIcon = ({ focused }: { focused: boolean }) => {
  const { chatStore } = useStores()
  return (
    <TabIconWithBadge
      focused={focused}
      iconName="chat"
      showBadge={(chatStore?.unreadCount || 0) > 0}
    />
  )
}

const VideoTabIcon = ({ focused }: { focused: boolean }) => {
  const { videoStore } = useStores()
  return (
    <TabIconWithBadge
      focused={focused}
      iconName="view"
      showBadge={videoStore?.hasUpcomingCall || false}
    />
  )
}

function AuthenticatedTabs() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.tabBarActiveBackgroundColor,
        tabBarInactiveTintColor: colors.tabBarInactiveBackgroundColor,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Screens.HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name={SCREENS_APPOINTMENT}
        component={Screens.AppointmentsScreen}
        options={{
          headerShadowVisible: false,
          headerShown: true,
           headerTitleAlign: "center", // ✅
          title: "My Appointment",
          tabBarLabel: "Appointment",
          headerStyle: { backgroundColor: '#ffffff' },
          headerTintColor: '#000000', // Change text color
          tabBarIcon: AppointmentTabIcon,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Screens.ChatChannelListScreen}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ChatTabIcon,
        }}
      />
      <Tab.Screen
        name="Video"
        component={Screens.VideoCallLobby}
        options={{
          tabBarLabel: "Video",
          tabBarIcon: VideoTabIcon,
        }}
      />
      {/* <Tab.Screen */}
      {/*   name="Prescription" */}
      {/*   component={Screens.HomeScreen} // TODO : correct prescription screen to be added */}
      {/*   options={{ */}
      {/*     tabBarLabel: "Prescription", */}
      {/*     tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} iconName="prescription" />, */}
      {/*   }} */}
      {/* /> */}
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 10,
  fontFamily: typography.primary.medium,
  lineHeight: 12,
}

export default observer(AuthenticatedTabs)
