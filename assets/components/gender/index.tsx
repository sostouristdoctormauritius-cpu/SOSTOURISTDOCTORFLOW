import React from "react"
import { List } from "react-native-paper"

type GenderSelectProps = {
  onGenderSelect: (gender: string) => void
}

const LeftIcon = (props: any) => <List.Icon {...props} icon="folder" />

const GenderSelect = ({ onGenderSelect }: GenderSelectProps) => {
  const [expanded, setExpanded] = React.useState(true)

  const handlePress = () => setExpanded(!expanded)

  return (
    // <List.Section title="Accordions">
    <List.Accordion
      title="Please select your gender"
      left={LeftIcon}
      expanded={expanded}
      onPress={handlePress}
    >
      <List.Item title="Male" onPress={() => onGenderSelect("Male")} />
      <List.Item title="Female" onPress={() => onGenderSelect("Female")} />
      <List.Item title="None" onPress={() => onGenderSelect("None")} />
    </List.Accordion>
    // </List.Section>
  )
}

export default GenderSelect
