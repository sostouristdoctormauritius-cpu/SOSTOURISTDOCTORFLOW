import { Text } from "app/components/Text"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from "react-native"

export interface LinkProps {
  /**
   * An optional style override useful for padding & margin.
   */
  btnStyle?: StyleProp<ViewStyle>
  txtStyle?: StyleProp<TextStyle>
  onPress: () => void
  textContent: string
}

/**
 * Describe your component here
 */
const Link = observer(function Link(props: LinkProps) {
  const { btnStyle, txtStyle, textContent, onPress } = props

  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Text style={txtStyle}>{textContent}</Text>
    </TouchableOpacity>
  )
})

export default Link
