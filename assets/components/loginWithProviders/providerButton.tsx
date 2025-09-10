import { AutoImage } from "app/components"
import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: "#EEEEEE",
    borderRadius: 8,
    borderWidth: 1,
    height: 60,
    justifyContent: "center",
    width: 88,
  },
  image: {
    height: 24,
    width: 24,
  },
})

type ProviderButtonProps = {
  source: any
}

const ProviderButton = ({ source }: ProviderButtonProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <AutoImage source={source} style={styles.image} />
    </TouchableOpacity>
  )
}

export default ProviderButton
