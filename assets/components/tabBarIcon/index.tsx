import { Icon, IconTypes } from "app/components"
import { colors } from "app/theme"
import React from "react"

const IconColor = {
  FOCUSED: "tabBarActiveBackgroundColor",
  UNFOCUSED: "tabBarInactiveBackgroundColor",
}

const Colors = {
  tabBarActiveBackgroundColor: colors.tabBarActiveBackgroundColor,
  tabBarInactiveBackgroundColor: colors.tabBarInactiveBackgroundColor,
}

const TabBarIcon = ({ focused, iconName }: { focused: boolean; iconName: IconTypes }) => {
  const iconColor = focused ? Colors[IconColor.FOCUSED] : Colors[IconColor.UNFOCUSED]

  return <Icon icon={iconName} color={iconColor} size={20} />
}

export default TabBarIcon
