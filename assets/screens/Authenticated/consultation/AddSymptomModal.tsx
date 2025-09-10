import { useNavigation } from "@react-navigation/native"
import { Button } from "app/components/Button"
import { Text } from "app/components/Text"
import { TextField } from "app/components/TextField"
import Colors from "app/constants/Colors"
import { SCREENS_CONSULTATION_SYMPTOM_SELECTION } from "app/constants/Screens"
import { typography } from "app/constants/typography"
import { translate } from "app/i18n"
import { useHeader } from "app/utils/useHeader"
import React, { useState } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"

export default function AddSymptomModalScreen() {
  const navigation = useNavigation()
  const [text, setText] = useState("")

  useHeader({
    title: translate("consultation.common.addtSymptoms"),
  })

  const onDismissPressed = () => {
    navigation.goBack()
  }

  const onSendPressed = (value: string) => {
    navigation.navigate({
      name: SCREENS_CONSULTATION_SYMPTOM_SELECTION,
      params: { additionalSymptoms: value },
      merge: true,
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.topHeaderSeparator} />

      <TouchableOpacity style={styles.topHeaderCancel} onPress={onDismissPressed}>
        <Text preset="headerCancelButton" tx="common.cancel" />
      </TouchableOpacity>

      <Text
        style={styles.title}
        preset="subSectionTitle"
        tx="consultation.messaging.symptomSelection.additionalSymptomTitle"
      />

      <View style={styles.inputFieldContainer}>
        <TextField
          style={styles.inputField}
          containerStyle={styles.inputFieldInnerContainer}
          inputWrapperStyle={styles.inputFieldInnerInputWrapper}
          placeholderTextColor={Colors.textInputFieldText}
          autoCorrect={false}
          spellCheck={false}
          autoFocus
          placeholderTx="consultation.messaging.symptomSelection.additionalSymptomTextfieldPlaceholder"
          value={text}
          onChangeText={setText}
        />

        <Button
          style={styles.sendButton}
          preset="primaryReversed"
          tx="common.send"
          onPress={() => {
            onSendPressed(text)
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 29,
  },
  inputField: {
    color: Colors.textInputFieldText,
    fontFamily: typography.primary.semiBold,
    fontSize: 16,
    lineHeight: 19,
  },
  inputFieldContainer: {
    marginTop: 16,
    width: "100%",
  },
  inputFieldInnerContainer: {
    backgroundColor: Colors.textInputFieldBackground,
    borderRadius: 23.5,
    paddingLeft: 22.5,
    paddingRight: 50,
    paddingVertical: 4,
  },
  inputFieldInnerInputWrapper: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.transparent,
  },
  sendButton: {
    position: "absolute",
    right: 0,
    top: -3,
  },
  title: {
    alignSelf: "flex-start",
    color: Colors.screenTitleText,
    marginTop: 12,
  },
  topHeaderCancel: {
    alignSelf: "flex-end",
    marginTop: -4,
  },
  topHeaderSeparator: {
    backgroundColor: Colors.modalHeaderSwipeIndicator,
    borderRadius: 8,
    height: 4,
    marginTop: 16,
    opacity: 0.7,
    width: 64,
  },
})
