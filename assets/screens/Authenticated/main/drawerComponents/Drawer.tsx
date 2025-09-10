import DrawerItems from "app/screens/Authenticated/main/drawerComponents/DrawerItems"
import { colors } from "app/theme"
import React from "react"
import { Animated, Dimensions, Modal, StyleSheet, TouchableWithoutFeedback } from "react-native"
import DrawerTop from "./DrawerTop"

const { height } = Dimensions.get("screen")

const DrawerModal = ({
  drawerVisible,
  closeModal,
  slideAnimation,
}: {
  drawerVisible: boolean
  closeModal: () => void
  slideAnimation: any
}) => {
  return (
    <Modal transparent={true} visible={drawerVisible} onRequestClose={closeModal}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <Animated.View
          style={[
            styles.modalContent,
            {
              height,
              transform: [{ translateX: slideAnimation }],
            },
          ]}
        >
          <DrawerTop  onPressItem={closeModal} />
          <DrawerItems onPressItem={closeModal} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default DrawerModal

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: colors.background,
    paddingRight: 24,
    paddingTop: 80,
    shadowColor: colors.subSectionText,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    width: "85%",
  },
})
