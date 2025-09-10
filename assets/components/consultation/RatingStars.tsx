import React from "react"
import { StyleSheet, View } from "react-native"

import RatingStarEmptySVG from "app/components/SVG/RatingStarEmptySVG"
import RatingStarFullSVG from "app/components/SVG/RatingStarFullSVG"
import { Text } from "../Text"

interface RatingStarsProps {
  rating: number
  totalCount: number
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating = 0, totalCount = 0 }) => {
  const fullStars = Math.floor(rating)
  const emptyStars = 5 - fullStars

  return (
    <View style={styles.row}>
      {Array.from({ length: fullStars }).map((_, index) => (
        <RatingStarFullSVG key={`full-${index}`} width={18.9} height={18} />
      ))}

      {Array.from({ length: emptyStars }).map((_, index) => (
        <RatingStarEmptySVG key={`empty-${index}`} width={18.9} height={18} />
      ))}

      <Text
        preset="ratingText"
        style={styles.label}
        text={`${Number(rating).toFixed(1)} (${totalCount})`}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    marginLeft: 10,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
})

export default RatingStars
