import { SYMPTOMS } from "app/components/symptoms/symptomLists"
import Symptom from "app/components/symptoms/symtom"
import { spacing } from "app/constants/spacing"
import React from "react"
import { StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
  $symptomContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: spacing.md,
    width: "100%",
  },
})

type SymptomItem = {
  id: number
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  title: any
  image?: any
}

type SymptomsProps = {
  onSymptomPressed: (symptom: never) => void
}
const Symptoms = ({ onSymptomPressed }: SymptomsProps) => {
  return (
    <View style={styles.$symptomContainerStyle}>
      {SYMPTOMS.map((item: SymptomItem, index: number) => (
        <Symptom
          key={item.id}
          id={item.id}
          index={index}
          title={item.title}
          SymptomIcon={item.Icon}
          onSymptomPressed={onSymptomPressed}
          image={item?.image}
        />
      ))}
    </View>
  )
}

export default Symptoms
