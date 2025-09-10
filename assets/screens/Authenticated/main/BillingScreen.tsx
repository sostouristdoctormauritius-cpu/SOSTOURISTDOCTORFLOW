import { BillingEntry, Margin, Screen, Text } from "app/components"
// import BillingEntry from "app/components/billing/card"
import Colors from "app/constants/Colors"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { SectionList, StyleSheet } from "react-native"

interface BillingScreenProps extends AppStackScreenProps<"Billing"> {}

const DATA = [
  {
    title: "Today",
    date: "December 22, 2023",
    data: ["Voice", "Home", "Voice"],
  },
  {
    title: "Yesterday",
    date: "Septemberr 22, 2023",
    data: ["Voice", "Home", "Voice"],
  },
]

const BillingScreen: FC<BillingScreenProps> = observer(function BillingScreen() {
  return (
    <Screen style={styles.container} preset="fixed">
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => <BillingEntry entry={item} past={!!(index % 2)} />}
        renderSectionHeader={({ section: { title, date } }) => (
          <Margin mb={12}>
            <Text preset="rowTitle" weight="normal">
              <Text preset="rowTitle" weight="bold">
                {title}
              </Text>
              , {date}
            </Text>
          </Margin>
        )}
      />
    </Screen>
  )
})

export default BillingScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.greyBG,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
})
