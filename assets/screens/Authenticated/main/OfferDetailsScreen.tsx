import { Margin, OfferDetailsHeading, Padding, Screen, ServicesBlock } from "app/components"
import PricingFooter from "app/components/consultation/PricingFooter"
import SpecialistsBlock from "app/components/discounts/specialistsBlock"
import Separator from "app/components/homeBlocks/separator"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { StyleSheet } from "react-native"

interface OfferDetailsScreenProps extends AppStackScreenProps<"OfferDetails"> {}

const mockServices = ["Therapy 1", "Therapy 2", "Therapy 3"]
const OfferDetailsScreen: FC<OfferDetailsScreenProps> = observer(function OfferDetailsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  return (
    <Screen safeAreaEdges={["bottom"]} style={styles.container} preset="scroll">
      <OfferDetailsHeading
        discount="15"
        heading="discounts.dentalCheckUp"
        description="discounts.checkUpDescription"
      />
      <Margin mt={27} />
      <Separator />
      <ServicesBlock services={mockServices} />
      <Separator style={styles.sep} />
      <SpecialistsBlock />
      <Padding pr={16} pl={16}>
        <PricingFooter
          titleTx={"discounts.treatment"}
          descriptionTx={"discounts.bookSpot"}
          onContinuePressed={() => {
            return null
          }}
          continueLabelTx="consultation.messaging.onboarding.action"
        />
      </Padding>
    </Screen>
  )
})

export default OfferDetailsScreen

const styles = StyleSheet.create({
  container: { flex: 1 },
  sep: { marginBottom: 0 },
})
