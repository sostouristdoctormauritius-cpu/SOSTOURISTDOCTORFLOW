import React from "react"
import { StyleSheet } from "react-native"

import { Screen } from "app/components/Screen"
import { Text } from "app/components/Text"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center", // Flex 1 does not work well with the Screen component but since this is a placeholder, it's fine
  },
})

const NotReadyYet = () => {
  return (
    <Screen preset="auto" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <Text tx="common.notYetImplemented" preset="heading" size="xl" />
    </Screen>
  )
}

export default NotReadyYet
