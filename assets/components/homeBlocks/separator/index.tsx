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
        styles.separator,
        thin && styles.thinSeparator,
        style,
      ]}
    />
  )
}

const styles = {
  separator: {
    width: "100%",
    height: 4,
    backgroundColor: "#f4f4f4",
    marginVertical: 16,
  },
  thinSeparator: {
    height: 1,
  },
}

export default Separator
