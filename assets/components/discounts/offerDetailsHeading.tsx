import { Text } from "app/components"
import Colors from "app/constants/Colors"
import { TxKeyPath, translate } from "app/i18n"
import { FontWeight } from "app/utils/design"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, Text as RnText, StyleSheet, View } from "react-native"

interface OfferDetailsHeadingProps {
  description?: TxKeyPath
  discount?: string
  heading: TxKeyPath
  spa?: boolean
}

export const OfferDetailsHeading: FC<OfferDetailsHeadingProps> = observer(
  function OfferDetailsHeading({ discount, heading, description }) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    return (
      <View>
        <View style={styles.img}>
          <Image
            resizeMode="cover"
            style={styles.background}
            source={require("app/images/discounts/spa.png")}
          />
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
          <View>
            <Text preset="screenSubtitle" tx={heading} style={styles.subTitle} />
            <Text preset="rowDescription" tx={description} style={styles.desc} />
          </View>
        </View>
      </View>
    )
  },
)

export default OfferDetailsHeading

const styles = StyleSheet.create({
  background: {
    alignSelf: "center",
    height: 258,
    width: "100%",
  },
  cardImg: { borderRadius: 16, height: 64, width: 64 },
  container: { flex: 1 },
  desc: {
    color: Colors.tabBackground,
    fontSize: 12,
  },
  discount: {
    color: Colors.tabBackground,
    fontSize: 57,
    fontWeight: FontWeight.heavy,
    lineHeight: 57,
    textAlignVertical: "top",
  },
  docImage: {
    bottom: 0,
    height: 144,
    position: "absolute",
    right: 0,
    width: 124,
  },
  img: {
    height: 258,
    overflow: "hidden",
    width: "100%",
  },
  offer: {
    color: Colors.tabBackground,
    fontSize: 14.85,
    lineHeight: 15,
    marginTop: -8,
  },
  offerWrapper: {
    alignItems: "flex-start",
    flexDirection: "row",
    height: 78,
  },
  percentWrapper: {
    alignItems: "flex-end",
    marginLeft: 14,
  },
  sep: { marginBottom: 0 },
  serviceImg: {
    borderRadius: 8,
    height: 80,
    width: 80,
  },
  serviceName: { fontWeight: FontWeight.bold, textAlign: "center" },
  specialistCard: {
    alignItems: "center",
    borderRadius: 24,
    borderWidth: 0,
    height: 96,
    padding: 16,
    shadowColor: Colors.tabBackground,
  },
  specialistCardMid: { alignItems: "flex-start", height: "100%", justifyContent: "center" },
  specialists: { backgroundColor: Colors.greyBG, padding: 16 },
  subTitle: {
    color: Colors.tabBackground,
    fontSize: 20,
    fontWeight: FontWeight.heavy,
    lineHeight: 24,
    marginVertical: 8,
  },
  textAlign: { textAlign: "left" },
  textContainer: {
    alignItems: "flex-start",
    height: 258,
    justifyContent: "space-between",
    left: 16,
    padding: 16,
    paddingVertical: 32,
    position: "absolute",
    top: 0,
  },
  tile: {
    borderRadius: 8,
    height: 102,
    justifyContent: "space-between",
    marginRight: 16,
    width: 80,
  },
  upTo: {
    height: 20,
    left: -16,
    position: "absolute",
    top: 13,
    transform: [{ rotate: "-90deg" }],
  },
  upToText: {
    color: Colors.tabBackground,
    fontSize: 16,
    letterSpacing: 0.25,
    lineHeight: 18,
  },
})
