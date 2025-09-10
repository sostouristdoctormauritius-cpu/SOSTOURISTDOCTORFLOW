import React from "react"

import { useNavigation } from "@react-navigation/native"
import BackButtonIcon from "app/components/SVG/BackButtonIcon"
import { TouchableOpacity } from "react-native"

const HeaderBackButton = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <BackButtonIcon />
    </TouchableOpacity>
  )
}

export default HeaderBackButton
