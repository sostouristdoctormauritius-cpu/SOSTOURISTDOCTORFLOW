import { useNavigation } from "@react-navigation/native"
import { useAssets } from "expo-asset"
import React, { useEffect } from "react"
import { Dimensions, Platform, StyleSheet } from "react-native"
import Pdf from "react-native-pdf"

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
})

const ViewPdf = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Terms and Conditions",
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerShadowVisible: false,
      headerBackTitle: "",
      headerBackTitleVisible: false,
      headerBackImageSource: require("../../images/header/chevronLeft.png"),
    })
  }, [navigation])

  const assets = useAssets([require("../../../assets/TermsAndConditions.pdf")])
  const androidSource = assets?.[0]?.[0]?.localUri

  const pdfLocation = Platform.select({
    ios: require("../../../assets/TermsAndConditions.pdf"),
    android: { uri: androidSource },
  })

  return <Pdf key="pdf" source={pdfLocation} style={styles.pdf} />
}

export default ViewPdf
