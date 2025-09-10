import React, { useEffect, useState } from "react"
import { Modal, StyleSheet, View } from "react-native"

import { Button } from "../Button"
import { Text } from "../Text"

import { useNavigation } from "@react-navigation/native"
import PrivacyWarningIconSVG from "app/components/SVG/privacyWarningIconSVG"
import Colors from "app/constants/Colors"
import { SCREENS_VIEW_PDF } from "app/constants/Screens"

interface PrivacyWarningModalProps {
  showModal: boolean
  onClose: () => void
}

const PrivacyWarningModal: React.FC<PrivacyWarningModalProps> = ({ showModal, onClose }) => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(showModal)

  const onLearnMorePressed = () => {
    setModalVisible(false)
    navigation.navigate(SCREENS_VIEW_PDF)
  }

  useEffect(() => {
    setModalVisible(showModal)
  }, [showModal])

  return (
    <Modal animationType="fade" transparent visible={modalVisible} onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <PrivacyWarningIconSVG style={styles.icon} width="120" height="120" />

          <Text
            style={styles.title}
            preset="modalTitle"
            tx="consultation.messaging.modalPrivacyWarning.title"
          />

          <Text
            style={styles.description}
            preset="description"
            tx="consultation.messaging.modalPrivacyWarning.description"
          />

          <View style={styles.buttonContainer}>
            <Button
              style={styles.learnMoreButton}
              preset="grey"
              tx="common.learnMore"
              onPress={onLearnMorePressed}
            />
            <Button style={styles.okButton} preset="primary" tx="common.ok" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 32,
    width: "100%",
  },
  centeredView: {
    alignItems: "center",
    backgroundColor: Colors.modalBackdrop,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 22,
  },
  description: {
    marginTop: 8,
  },
  icon: {
    marginTop: 8,
  },
  learnMoreButton: {
    flex: 1,
    marginRight: 8,
  },
  modalView: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 48,
    padding: 32,
    width: "100%",
  },
  okButton: {
    flex: 1,
  },
  title: {
    marginTop: 32,
  },
})

export default PrivacyWarningModal
