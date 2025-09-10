/* eslint-disable react-native/no-color-literals */
import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"

import { useNavigation } from "@react-navigation/native"
import { AutoImage } from "app/components"
import { Text } from "app/components/Text"
import HomeConsultationBlock from "app/components/homeBlocks/homeConsultation/homeConsultationBlock"
import Separator from "app/components/homeBlocks/separator"
import { SCREENS_HOME_VISIT } from "app/constants/Screens"
import { FontWeight } from "app/utils/design"

const styles = StyleSheet.create({
  background: {
    alignSelf: "center",
    height: 124,
  },
  backgroundOverflow: {
    borderRadius: 16,
    height: 124,
    overflow: "hidden",
  },
  bloc: {
    paddingHorizontal: 8,
    width: "100%",
  },
  bookNowButton: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    height: 24,
    justifyContent: "center",
    marginTop: 8,
    paddingHorizontal:8
    // width: 77,
  },
  bookNowText: {
    color: "#9C1D46",
    fontSize: 11,
    fontWeight: FontWeight.black,
  },
  desc: {
    color: "#ffffff",
    marginRight:112,
  },
  docImage: {
    bottom: 0,
    height: 124,
    position: "absolute",
    right: 19,
    width: 94,
  },
  subTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: FontWeight.extraBold,
    marginVertical: 8,
  },
  textContainer: {
    alignItems: "flex-start",
    left: 24,
    position: "absolute",
    top: 9,
  },
  title: {
    alignSelf: "flex-start",
    marginBottom: 16,
  },
})

const HomeConsultation = () => {
  const navigation = useNavigation()

  const onBookNowPressed = () => navigation.navigate(SCREENS_HOME_VISIT)

  return (
    <>
      <Separator />
      <View style={styles.bloc}>
        <Text preset="screenHeader" tx="homeConsultation.title" style={styles.title} />
        <TouchableOpacity onPress={onBookNowPressed}>
          <View style={styles.backgroundOverflow}>
            <HomeConsultationBlock style={styles.background} />
            <AutoImage
              style={styles.docImage}
              source={require("app/images/homeVisit/doc/doc.png")}
            />
          </View>
          <View style={styles.textContainer}>
            <Text preset="screenSubtitle" tx="homeConsultation.subTitle" style={styles.subTitle} />
            <Text preset="rowDescription" tx="homeConsultation.description" style={styles.desc} />
            <View style={styles.bookNowButton}>
              <Text preset="rowDescription" tx="homeScreen.bookNow" style={styles.bookNowText} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default HomeConsultation
