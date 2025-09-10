import { Card, Text } from "app/components"
import PhoneCallSVG from "app/components/SVG/PhoneIcon"
import Colors from "app/constants/Colors"
import { translate } from "app/i18n/translate"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Linking, StyleSheet, View } from "react-native"
import FastImage from "react-native-fast-image"

interface IContact {
  name: string
  phone: string
  iconUri: string
}

const ContactCard: FC<{ contact: IContact }> = observer(({ contact: { iconUri, name, phone } }) => {
  return (
    <Card
      verticalAlignment="center"
      style={styles.card}
      LeftComponent={
        <FastImage
          style={styles.image}
          source={{
            uri: iconUri,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      }
      ContentComponent={
        <View>
          <Text preset={"ratingText"} weight="bold" text={name} />
          <View style={styles.tel}>
            <Text
              preset={"rowDescription"}
              text={translate("emergencyCall.tel", {}).replace("{0}", phone)}
            />
            <PhoneCallSVG
              width="40"
              height="40"
              onPress={() => {
                let phonen = `tel:${phone}`;
                Linking.openURL(phonen)
              }}
            />
          </View>
        </View>
      }
    />
  )
})

export default ContactCard

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    height: 112,
    marginBottom: 16,
    padding: 16,
    paddingRight: 52,
    shadowColor: Colors.transparent,
  },
  image: {
    // backgroundColor: "red",
    height: 80,
    width: 80,
  },
  tel: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" },
})
