import SOSDatePicker from "app/components/datePicker"
import dayjs from "dayjs"
import React, { useState } from "react"
import { Modal, StyleSheet, Text, View } from "react-native"

const today = dayjs().format("YYYY-MM-DD")

const DatePickerModal = ({ isVisible, onConfirm }) => {
  const [errorMessage, setErrorMessage] = useState(null)

  const validateDate = (date) => {
    if (!date || date.trim() === "") {
      return "Date is required."
    }

    // Validate using dayjs
    const selectedDateObj = dayjs(date, "YYYY-MM-DD", true)
    if (!selectedDateObj.isValid()) {
      return "Invalid date format."
    }

    // Age validation: Ensure age is at least 18
    const todayDate = dayjs()
    const age = todayDate.diff(selectedDateObj, "years")

    if (age < 18) {
      return "You must be at least 18 years old."
    }

    return null // No validation errors
  }

  const handleConfirm = (selectedDate = "") => {
    let date

    if (selectedDate === "") {
      date = today
    } else {
      date = dayjs(selectedDate?.date).format("YYYY-MM-DD")
    }

    // Validate the selected date
    const error = validateDate(date)

    if (error) {
      // If validation fails, set the error message
      setErrorMessage(error)
    } else {
      // If validation passes, call onConfirm and reset error
      onConfirm(date)
      setErrorMessage(null)
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={handleConfirm}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {/* SOSDatePicker for date selection */}
          <SOSDatePicker date={today} minDate={null} maxDate={today} onChange={handleConfirm} />

          {/* Error message */}
          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: "100%",
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
})

export default DatePickerModal
