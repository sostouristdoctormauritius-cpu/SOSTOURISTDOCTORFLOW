import React, { FC } from "react"
import { View, ViewStyle } from "react-native"

interface Props {
  thin?: boolean
  style?: ViewStyle
}

const Separator: FC<Props> = ({ thin, style }) => {
  return (
    <View
      style={[
        {
          width: "100%",
          height: thin ? 1 : 4,
          backgroundColor: "#f4f4f4",
          marginVertical: 16,
        },
        style,
      ]}
    />
  )
}

export default Separator
