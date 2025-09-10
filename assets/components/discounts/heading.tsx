import { useNavigation } from "@react-navigation/native"
import { Row, Text } from "app/components"
import { SCREENS_DISCOUNTED_OFFERS } from "app/constants/Screens"
import React, { FC } from "react"
import { StyleSheet } from "react-native"
import { ChevronRightSVG } from "../SVG"

interface HeadingRowProps {}

export const HeadingRow: FC<HeadingRowProps> = () => {
  const navigation = useNavigation()

  return (
    <Row align="center" style={styles.heading} fullWidth justify="space-between">
      <Text preset="screenHeader" tx="discounts.heading" />
      <Text
        tx="common.seeAll"
        onPress={() => {
          navigation.navigate(SCREENS_DISCOUNTED_OFFERS)
        }}
      />
      <ChevronRightSVG style={styles.chevronRight} />
    </Row>
  )
}

const styles = StyleSheet.create({
  chevronRight: { position: "absolute", right: 8, top: 0 },
  heading: { padding: 16, paddingRight: 32, paddingTop: 0 },
})
