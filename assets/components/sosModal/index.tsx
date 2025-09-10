import React from "react"
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native"

type SOSModalProps = {
  isVisible: boolean
  onClose: () => void
  children: React.ReactNode
}
const SOSModal = ({ isVisible, onClose, children }: SOSModalProps) => {
  return (
    <Modal animationType="slide" transparent visible={isVisible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContent}>{children}</View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    bottom: 0,
    height: "50%",
    position: "absolute",
    width: "100%",
  },
})

export default SOSModal
