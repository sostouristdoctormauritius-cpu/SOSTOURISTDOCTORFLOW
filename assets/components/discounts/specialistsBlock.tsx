import { Card, Margin, Row, Text } from "app/components"
import { ChevronRightSVG } from "app/components/SVG"
import Colors from "app/constants/Colors"
import { FontWeight } from "app/utils/design"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, StyleSheet, View } from "react-native"

interface SpecialistsBlockProps {}

const specialists = [
  {
    name: "Angela Molly",
    constultationType: "Voice consultation",
    dateOfAvailibility: "20 Sept 2024",
  },
  {
    name: "Angela Molly",
    constultationType: "Voice consultation",
    dateOfAvailibility: "20 Sept 2024",
  },
  {
    name: "Angela Molly",
    constultationType: "Voice consultation",
    dateOfAvailibility: "20 Sept 2024",
  },
  {
    name: "Angela Molly",
    constultationType: "Voice consultation",
    dateOfAvailibility: "20 Sept 2024",
  },
]

const SpecialistsBlock: FC<SpecialistsBlockProps> = observer(function SpecialistsBlock() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  return (
    <View style={styles.specialists}>
      <Text
        style={styles.textAlign}
        preset="screenHeader"
        weight="semiBold"
        tx={"discounts.choose"}
      />

      {specialists.map((specialist, index) => (
        <>
          <Margin mb={16} key={index} />
          <Card
            key={index}
            style={styles.specialistCard}
            LeftComponent={
              <Image
                resizeMode="cover"
                style={styles.cardImg}
                source={require("app/images/discounts/spa.png")}
              />
            }
            ContentComponent={
              <View style={styles.specialistCardMid}>
                <Text text={specialist.name} preset="subSectionTitle" weight="bold" />
                <Text preset="description" text={specialist.constultationType} />
                <Text preset="description" text={specialist.dateOfAvailibility} />
              </View>
            }
            RightComponent={
              <Row align="center">
                <Text preset="blockSectionDescription" weight="bold" text="Rs 700" />
                <ChevronRightSVG />
              </Row>
            }
          />
        </>
      ))}
    </View>
  )
})

export default SpecialistsBlock

const styles = StyleSheet.create({
  cardImg: { borderRadius: 16, height: 64, width: 64 },
  sep: { marginBottom: 0 },
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
})
