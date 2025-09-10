import { relativeWidth } from "app/utils/design"
// SegmentButton.tsx
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface SegmentButtonProps {
  label: string
  value: string
  selectedValue: string
  onPress: (value: string) => void
}

const SelectGroupButton: React.FC<SegmentButtonProps> = ({
  label,
  value,
  selectedValue,
  onPress,
}) => {
  const isSelected = value === selectedValue

  const onPressGender = () => {
    onPress(value)
  }

  return (
    <TouchableOpacity
      style={[styles.button, isSelected && styles.selectedButton]}
      onPress={onPressGender}
    >
      <Text style={[styles.label, isSelected && styles.selectedLabel]}>{label}</Text>
    </TouchableOpacity>
  )
}

interface SegmentedButtonsProps {
  buttons: { label: string; value: string }[]
  value: string
  onPress: (value: string) => void
}

const SelectGroup: React.FC<SegmentedButtonsProps> = ({ buttons, value, onPress }) => {
  return (
    <View style={styles.container}>
      {buttons.map((button) => (
        <SelectGroupButton
          key={button.value}
          label={button.label}
          value={button.value}
          selectedValue={value}
          onPress={onPress}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 25,
    flex: 1,
    justifyContent: "center",
    margin: 5,
    padding: 10,
  },
  container: {
    flexDirection: "row",
    height: 64,
    justifyContent: "center",
    marginVertical: 5,
    width: relativeWidth(384),
  },
  label: {
    color: "#000",
  },
  selectedButton: {
    borderColor: "#2FB645",
    borderWidth: 1,
    color: "#2FB645",
  },
  selectedLabel: {
    color: "#2FB645",
  },
})

export default SelectGroup
