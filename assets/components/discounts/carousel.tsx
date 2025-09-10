import { useNavigation } from "@react-navigation/native"
import { DiscountCard } from "app/components"
import { SCREENS_OFFER_DETAILS } from "app/constants/Screens"
import { TxKeyPath } from "app/i18n"
import React, { FC, Fragment, useState } from "react"
import { Dimensions } from "react-native"
import Carousel from "react-native-reanimated-carousel"
import Separator from "../homeBlocks/separator"
import { HeadingRow } from "./heading"
import { PaginationCarousel } from "./pagination"

interface DiscountedOffersCarouselProps {}

const data: Array<{ name: string; discount: string; heading: TxKeyPath; description: TxKeyPath }> =
  [
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

const { width } = Dimensions.get("window")

export const DiscountedOffersCarousel: FC<DiscountedOffersCarouselProps> = () => {
  const navigation = useNavigation()
  const [index, setIndex] = useState<number>(0)

  const handleIndex = (imageIndex: number) => {
    setIndex(imageIndex)
  }

  return (
    <Fragment>
      <Separator />
      <HeadingRow />
      <Carousel
        data={data}
        renderItem={({ item, index: itemIndex }) => (
          <DiscountCard
            spa={itemIndex === 1}
            description={item.description}
            heading={item.heading}
            discount={item.discount}
            onPress={() => {
              navigation.navigate(SCREENS_OFFER_DETAILS)
            }}
          />
        )}
        onProgressChange={(_, absoluteProgress) => {
          handleIndex(Math.round(absoluteProgress))
        }}
        width={width}
        height={180}
        loop
        autoPlayInterval={5000}
      />
      <PaginationCarousel noOfItems={data.length} currentIndex={index} />
    </Fragment>
  )
}
