import { AutoImage } from "app/components"
import { Text } from "app/components/Text"
import Colors from "app/constants/Colors"
import { TxKeyPath, translate } from "app/i18n"
import { FontWeight } from "app/utils/design"
import React, { FC } from "react"
import { Alert, Image, Text as RnText, StyleSheet, TouchableOpacity, View } from "react-native"
import { DiscountBlock } from "../SVG"

interface Props {
  onPress: () => void
  description?: TxKeyPath
  discount?: string
  heading: TxKeyPath
  spa?: boolean
}

export const DiscountCard: FC<Props> = ({ spa, discount, heading, description, onPress }) => {
  const onBookNowPressed = () => {
    Alert.alert("Coming Soon")
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.bloc} activeOpacity={0.9}>
      <View style={styles.innerView}>
        <View style={styles.img}>
          {!spa ? (
            <DiscountBlock height="180" style={styles.background} />
          ) : (
            <Image style={styles.background} source={require("app/images/discounts/spa.png")} />
          )}

          {!spa && (
            <AutoImage style={styles.docImage} source={require("app/images/discounts/doc2.png")} />
          )}
        </View>
        <View style={styles.textContainer}>
          <View style={styles.offerWrapper}>
            <View style={styles.upTo}>
              <RnText style={styles.upToText}>{translate("discounts.upTo", {})}</RnText>
            </View>
            <View style={styles.percentWrapper}>
              <RnText style={styles.discount}>{discount}%</RnText>
              <RnText style={styles.offer}>{translate("discounts.offer", {})}</RnText>
            </View>
          </View>

          <Text
            preset="screenSubtitle"
            tx={heading}
            style={[styles.subTitle, spa && { fontWeight: FontWeight.medium }]}
          />
          <Text preset="rowDescription" tx={description} style={styles.desc} />
          <TouchableOpacity style={styles.bookNowButton} onPress={onBookNowPressed}>
            <Text preset="rowDescription" tx="homeScreen.bookNow" style={styles.bookNowText} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  background: {
    alignSelf: "center",
    backgroundColor: Colors.tabBackground,
    height: 180,
  },
  bloc: {
    height: 180,
    overflow: "hidden",
    paddingHorizontal: 8,
    width: "95%",
  },
  bookNowButton: {
    alignItems: "center",
    backgroundColor: Colors.buttonRedBackground,
    borderRadius: 100,
    height: 32,
    justifyContent: "center",
    marginTop: 8,
    width: 102,
  },
  bookNowText: {
    color: Colors.tabBackground,
    fontSize: 14,
    fontWeight: FontWeight.bold,
  },
  desc: {
    color: Colors.tabBackground,
    fontSize: 12,
  },
  discount: {
    color: Colors.tabBackground,
    fontSize: 40,
    fontWeight: FontWeight.heavy,
    height: 38,
    lineHeight: 40,
  },
  docImage: {
    bottom: 0,
    height: 144,
    position: "absolute",
    right: 0,
    width: 124,
  },
  img: {
    borderRadius: 16,
    height: 180,
    overflow: "hidden",
  },
  innerView: {
    overflow: "hidden",
    width: "95%",
  },
  offer: {
    color: Colors.tabBackground,
    fontSize: 14.85,
    marginTop: -4,
  },
  offerWrapper: { alignItems: "flex-start", flexDirection: "row", height: 54 },
  percentWrapper: {
    alignItems: "flex-end",
    marginLeft: 9,
  },
  subTitle: {
    color: Colors.tabBackground,
    fontSize: 20,
    fontWeight: FontWeight.heavy,
    lineHeight: 24,
    marginVertical: 8,
  },
  textContainer: {
    alignItems: "flex-start",
    height: 180,

    justifyContent: "flex-end",
    left: 16,
    padding: 16,
    position: "absolute",
    top: 0,
  },
  upTo: {
    height: 20,
    left: -8,
    position: "absolute",
    top: 7,
    transform: [{ rotate: "-90deg" }],
  },
  upToText: {
    color: Colors.tabBackground,
    fontSize: 11,
    letterSpacing: 0.25,
    lineHeight: 15,
  },
})
export default DiscountCard
