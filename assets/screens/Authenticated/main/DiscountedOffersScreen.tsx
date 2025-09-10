import { useNavigation } from "@react-navigation/native"
import { Screen } from "app/components"
import DiscountCard from "app/components/discounts/discountCard"
import Separator from "app/components/homeBlocks/separator"
import Colors from "app/constants/Colors"
import { SCREENS_OFFER_DETAILS } from "app/constants/Screens"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { FlatList, StyleSheet } from "react-native"

interface DiscountedOffersScreenProps extends AppStackScreenProps<"DiscountedOffers"> {}

const data = [
  {
    name: "Book a dental check up",
    discount: "15",
    heading: "discounts.dentalCheckUp",
    description: "discounts.checkUpDescription",
  },
  {
    name: "Book a dental check up",
    discount: "15",
    heading: "discounts.dentalCheckUp",
    description: "discounts.checkUpDescription",
  },
  {
    name: "Book a dental check up",
    discount: "15",
    heading: "discounts.dentalCheckUp",
    description: "discounts.checkUpDescription",
  },
  {
    name: "Book a dental check up",
    discount: "15",
    heading: "discounts.dentalCheckUp",
    description: "discounts.checkUpDescription",
  },
]

const DiscountedOffersScreen: FC<DiscountedOffersScreenProps> = observer(
  function DiscountedOffersScreen() {
    const navigation = useNavigation()
    return (
      <Screen style={styles.container} preset="fixed">
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <>
              <Separator />
              <DiscountCard
                spa={index === 1}
                description={item.description}
                heading={item.heading}
                discount={item.discount}
                onPress={() => {
                  navigation.navigate(SCREENS_OFFER_DETAILS)
                }}
              />
            </>
          )}
          style={styles.list}
        />
      </Screen>
    )
  },
)

export default DiscountedOffersScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.greyBG,
    flex: 1,
    paddingHorizontal: 16,
  },
  list: {
    backgroundColor: Colors.greyBG,
  },
})
