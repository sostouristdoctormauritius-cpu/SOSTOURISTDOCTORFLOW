import React from "react"
import { View, StyleSheet } from "react-native"
import TabBarIcon from "app/components/tabBarIcon"

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -6,
    top: -3,
    backgroundColor: "red",
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 24,
    height: 24,
    margin: 5,
  },
})

type TabIconWithBadgeProps = {
  iconName: string
  focused: boolean
  showBadge: boolean
}

const TabIconWithBadge = ({ iconName, focused, showBadge }: TabIconWithBadgeProps) => {
  return (
    <View style={styles.container}>
      <TabBarIcon focused={focused} iconName={iconName} />
      {showBadge && <View style={styles.badge} />}
    </View>
  )
}

export default TabIconWithBadge
