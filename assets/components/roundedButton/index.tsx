import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"

import { AutoImage } from "app/components"
import { Text } from "app/components/Text"
import { relativeWidth } from "app/utils/design"

type RoundedButtonProps = {
  txKey: string
  onPress: () => void
  source: any
}

const RoundedButton = ({ txKey, onPress, source }: RoundedButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AutoImage style={styles.image} source={source} />
      <Text weight="normal" tx={txKey} preset="heading" size="sm" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    flexDirection: "row",
    height: 64,
    justifyContent: "flex-start",
    marginBottom: 16,
    paddingLeft: 65,
    width: relativeWidth(384),
  },
  image: {
    height: 27,
    marginRight: 8,
    width: 31,
  },
})

export default RoundedButton
