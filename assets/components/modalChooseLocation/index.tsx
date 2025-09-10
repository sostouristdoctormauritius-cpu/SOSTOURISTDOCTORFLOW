import React from "react"
import { StyleSheet, View } from "react-native"

import MarkerSVG from "app/components/SVG/markerSVG"
import { Text } from "app/components/Text"
import GreenButton from "app/components/greenButton"
import { relativeWidthToParent } from "app/utils/design"

const shadow = {
  shadowColor: "#000000",
  shadowOpacity: 0.5,
  shadowOffset: { height: 2, width: 2 },
  elevation: 8,
  shadowRadius: 4,
}

const styles = StyleSheet.create({
  b1: {
    alignSelf: "center",
    marginBottom: 16,
  },
  m1: {
    marginRight: 9,
  },
  v1: {
    backgroundColor: "white",
    bottom: 0,
    height: 270,
    paddingHorizontal: 16,
    paddingTop: 16,
    position: "absolute",
    width: "100%",
    ...shadow,
  },
  v2: {
    flexDirection: "row",
    marginBottom: 32,
    width: "100%",
  },
  v3: {
    width: relativeWidthToParent(291),
  },
})

type ModalChooseLocationProps = {
  name: string
  reversedAddress: string
  onChooseLocation: () => void
}
const ModalChooseLocation = ({
  name,
  reversedAddress,
  onChooseLocation,
}: ModalChooseLocationProps) => {
  return (
    <View style={styles.v1}>
      <View style={styles.v2}>
        <MarkerSVG style={styles.m1} />
        <View style={styles.v3}>
          <Text preset="heading" size="xl">
            {name}
          </Text>
          <Text preset="aboutDescription" size="sm">
            {reversedAddress}
          </Text>
        </View>
      </View>
      <GreenButton
        isSecondary
        buttonStyle={styles.b1}
        onPress={onChooseLocation}
        buttonTitle="Confirm Location"
      />
    </View>
  )
}

export default ModalChooseLocation
