import { Card, Text } from "app/components"
import Colors from "app/constants/Colors"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { StyleSheet, View } from "react-native"
import { CashIconSVG, ChevronRightSVG, ReceiptIconSVG } from "../SVG"

const iconProps = { width: "64", height: "64" }

export const BillingEntry: FC<{ entry: string; past: boolean }> = observer(({ entry, past }) => {
  return (
    <Card
      verticalAlignment="center"
      style={styles.card}
      onPress={() => {
        // do nothing
      }}
      LeftComponent={past ? <CashIconSVG {...iconProps} /> : <ReceiptIconSVG {...iconProps} />}
      ContentComponent={
        <View>
          <Text size={"blockSectionTitle"} weight="bold" text={"Invoice 409718"} />
          <Text preset={"rowDescription"} text={`${entry} consultation`} />
          <Text preset={"rowDescription"} text={"28 Sept 2024"} />
        </View>
      }
      RightComponent={
        <View style={styles.right}>
          <Text size="primaryPill" weight="bold">
            Rs 700
          </Text>
          <ChevronRightSVG />
        </View>
      }
    />
  )
})

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    height: 96,
    marginBottom: 16,
    padding: 16,
    shadowColor: Colors.transparent,
  },
  right: { alignItems: "center", flexDirection: "row" },
  tel: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" },
})
