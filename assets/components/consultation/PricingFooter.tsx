import React from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Text } from "../Text"
import Colors from "app/constants/Colors"
import { ConsultationType } from "app/constants/GlobalTypes"
import { TxKeyPath, translate } from "app/i18n"
import { useStores } from "app/models"


const config = {
  [ConsultationType.Chat]: {
    titleTx: "consultation.messaging.symptomSelection.pricingTitleChat",
    descriptionTx: "consultation.messaging.symptomSelection.pricingDescriptionChat",
  },
  [ConsultationType.Home]: {
    titleTx: "consultation.messaging.symptomSelection.pricingTitleHome",
    descriptionTx: "consultation.messaging.symptomSelection.pricingDescriptionHome",
  },
  [ConsultationType.Video]: {
    titleTx: "consultation.messaging.symptomSelection.pricingTitleVideo",
    descriptionTx: "consultation.messaging.symptomSelection.pricingDescriptionVideo",
  },
}

interface PricingFooterProps {
  onContinuePressed: () => void
  titleTx?: string
  descriptionTx?: string
  consultationType: ConsultationType
  continueLabelTx?: TxKeyPath
  disabled?: boolean
  isLoading?: boolean
}

const PricingFooter: React.FC<PricingFooterProps> = ({
  consultationType,
  titleTx,
  // descriptionTx,
  onContinuePressed,
  continueLabelTx,
  disabled = false,
}) => {
  const title = consultationType ? config[consultationType]?.titleTx : titleTx
  const {
    appConfigStore: { fees },
  } = useStores()

  const displayPrice = fees.find((fee) => fee.consultationType === consultationType)?.displayPrice

  const onPress = () => {
    if (disabled) {
      return
    }
    onContinuePressed()
  }

  return (
    <>
      <View style={$bottomSeparatorStyle} />
      <View style={$bottomSectionContainer}>
        <View style={$bottomPriceSection}>
           
          {Boolean(title) && (
            <Text style={$bottomPriceSectionTextStyle} preset="screenHeader" tx={title} />
          )}
          {displayPrice && (
            <Text
              style={$bottomPriceSectionTextStyle}
              preset="footerPrice"
              text={`${displayPrice}`}
            />
          )}
        </View>
        
        <TouchableOpacity   onPress={onPress} style={[$buttonSize, disabled && { backgroundColor: Colors.buttonDisabledText }]}>
          <Text style={{
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
          }}>{continueLabelTx || translate("common.continue")}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

 
const $buttonSize: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#30B549",
  borderRadius: 48 / 2,
  paddingVertical: 10,
  paddingHorizontal: 15
}

const $bottomSeparatorStyle: ViewStyle = {
  height: 2,
  width: "100%",
  marginTop: 16,
  backgroundColor: Colors.bottomSeparator,
}

const $bottomSectionContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: 15.5,
  marginBottom: 20,
}

const $bottomPriceSection: ViewStyle = {
  flexDirection: "column",
}

const $bottomPriceSectionTextStyle: TextStyle = {
  textAlign: "left",
  fontSize: 18,
  marginTop: 4,
  marginRight:7
}

export default PricingFooter
