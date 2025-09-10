import Colors from "app/constants/Colors"
import React, { FC } from "react"
import { StyleSheet, View } from "react-native"
import AnimatedDotsCarousel from "react-native-animated-dots-carousel"

interface PaginationCarouselProps {
  noOfItems: number
  currentIndex: number
}

export const PaginationCarousel: FC<PaginationCarouselProps> = ({ noOfItems, currentIndex }) => {
  return (
    <View style={styles.paginationContainer}>
      <AnimatedDotsCarousel
        length={noOfItems}
        currentIndex={currentIndex}
        maxIndicators={3}
        interpolateOpacityAndColor={true}
        activeIndicatorConfig={config.activeIndicator}
        inactiveIndicatorConfig={config.inactiveIndicator}
        decreasingDots={[config.decreasingDot, config.decreasingDot]}
      />
    </View>
  )
}

const config = {
  inactiveIndicator: {
    color: Colors.paginationGrey,
    margin: 3,
    opacity: 0.5,
    size: 8,
  },
  decreasingDot: {
    config: { color: Colors.paginationGrey, margin: 3, opacity: 0.5, size: 0 },
    quantity: 1,
  },
  activeIndicator: {
    color: Colors.cardTextGreen,
    margin: 3,
    opacity: 1,
    size: 8,
  },
}

const styles = StyleSheet.create({
  paginationContainer: {
    alignItems: "center",
    height: 34,
    marginTop: 4,
    width: 200,
  },
})
