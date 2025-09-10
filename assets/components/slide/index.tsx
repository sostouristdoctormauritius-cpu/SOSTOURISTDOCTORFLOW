import React from "react"
import { Dimensions, StyleSheet, View } from "react-native"

import { AutoImage } from "app/components"
import { Text } from "app/components/Text"
import { relativeHeightToParent, relativeWidthToParent } from "app/utils/design"

const styles = StyleSheet.create({
  descStyle: {
    paddingHorizontal: 35,
    textAlign: "center",
    width: "100%",
    lineHeight:17,
    marginBottom:12,
  },
  image: {
    height: 40,
    marginTop: 32,
    width: 230,
  },
  mainImage: {
    height: relativeHeightToParent(273),
    marginBottom: 43,
    marginTop: 50,
    width: relativeWidthToParent(273),
  },
  slide: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
  },
  textStyle: {
    marginBottom: 9,
    textAlign: "center",
    lineHeight:26
  },
})

type SlideProps = {
  centerImage: string
  title: string
  desc: string
  index: number
}
const Slide = ({ centerImage, title, desc,index }: SlideProps) => {
  return (
    <View style={[styles.slide]}>
      <AutoImage style={styles.image} source={require("../../images/smallLogo/logo.png")} />
      <AutoImage style={styles.mainImage} source={centerImage} />
      <Text tx={title} preset="heading" size="xl" style={styles.textStyle} />
      <Text tx={desc.trim()} preset="default" size="xs" style={styles.descStyle} />
    </View>
  )
}

export default Slide
