import React, { useCallback, useState } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { useTheme } from "react-native-paper"

import { Text } from "app/components/Text"
import Colors from "app/constants/Colors"
import { TxKeyPath } from "app/i18n"

type SymptomProps = {
  id: number
  title: TxKeyPath
  SymptomIcon: React.FC<React.SVGProps<SVGSVGElement>>
  onSymptomPressed: (symptom: any) => void
}

const SIZE = 80
const Symptom = ({ id, title, SymptomIcon, onSymptomPressed }: SymptomProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const theme = useTheme()

  const onPress = useCallback(() => {
    setIsSelected((selected) => !selected)
    onSymptomPressed(title)
  }, [onSymptomPressed, title])

  return (
    <TouchableOpacity key={id} onPress={onPress} style={styles.$symptomButton}>
      <View style={styles.$symptomItem}>
        <View
          style={[
            styles.wrapper,
            isSelected && {
              borderColor: theme.colors.secondary,
              borderWidth:  3,
              padding:0,
              zIndex: 9999999,
            },
          ]}
        >
          <SymptomIcon />
        </View>
        <Text style={styles.$symptomTitleStyle} preset="description" tx={title} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  $symptomButton: {
    alignItems: "center",
    width: "33%",
  },
  $symptomItem: {
    alignItems: "center",
  },
  $symptomItemFirst: {
    alignItems: "center",
    marginLeft: "auto",
  },
  $symptomTitleStyle: {
    color: Colors.rowTitleText,
    marginBottom: 17,
    marginTop: 8,
  },
  wrapper: {
    alignItems: "center",
    borderRadius: 2 + SIZE / 2,
    height: SIZE,
    justifyContent: "center",
    overflow: "hidden",
    width: SIZE,
  },
})

export default Symptom
