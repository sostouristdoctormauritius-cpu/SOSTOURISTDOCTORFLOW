import React, { useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'

const ConsultationBookAppointmentScreen = () => {
  const [isSlotMorning, setIsSlotMorning] = useState(true) // Static for visual recreation
  const [appointmentTime, setAppointmentTime] = useState("") // Static for visual recreation
  const navigation = useNavigation()

  const DUMMY_TIME_SLOTS = [
    ["09:00", "10:00", "11:00"],
    ["12:00", "13:00", "14:00"],
    ["15:00", "16:00", "17:00"],
  ]

  return (
    <View
      style={styles.screenContentContainerStyle}
    >
      <TouchableOpacity style={styles.backButtonStyle} onPress={() => navigation.goBack()}>
        <Text>{'<'}</Text>
      </TouchableOpacity>

      <Text style={styles.titleStyle}>Book Appointment</Text>

      <View style={styles.datePickerContainer}>
        <Text>Date Picker Placeholder</Text>
      </View>

      <View style={styles.timeSlotContainer}>
        <View style={styles.timeSlotHeader}>
          <TouchableOpacity
            style={[styles.timeSlotButton, isSlotMorning ? styles.activeTimeSlotButton : null]}
            onPress={() => setIsSlotMorning(true)}
          >
            <Text style={[styles.timeSlotText, isSlotMorning ? styles.activeTimeSlotText : null]}>
              Morning
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeSlotButton, !isSlotMorning ? styles.activeTimeSlotButton : null]}
            onPress={() => setIsSlotMorning(false)}
          >
            <Text style={[styles.timeSlotText, !isSlotMorning ? styles.activeTimeSlotText : null]}>
              Evening
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.timeSlotsGrid}>
          {DUMMY_TIME_SLOTS[isSlotMorning ? 0 : 1].map((slot, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeSlotItem,
                appointmentTime === slot ? styles.selectedTimeSlotItem : styles.unselectedTimeSlotItem
              ]}
              onPress={() => setAppointmentTime(slot)}
            >
              <Text
                style={[
                  styles.timeSlotItemText,
                  appointmentTime === slot ? styles.selectedTimeSlotItemText : styles.unselectedTimeSlotItemText
                ]}
              >
                {slot}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('ConsultationOrderConfirmation')}
          disabled={!appointmentTime}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ConsultationBookAppointmentScreen

const styles = StyleSheet.create({
  screenContentContainerStyle: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  backButtonStyle: {
    alignSelf: "flex-start",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  datePickerContainer: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 16,
  },
  timeSlotContainer: {
    flex: 1,
  },
  timeSlotHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  timeSlotButton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "lightgreen",
  },
  activeTimeSlotButton: {
    backgroundColor: "lightgreen",
  },
  timeSlotText: {
    color: "lightgreen",
  },
  activeTimeSlotText: {
    color: "white",
  },
  timeSlotsGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  timeSlotItem: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  selectedTimeSlotItem: {
    backgroundColor: "lightgreen",
    borderColor: "lightgreen",
  },
  unselectedTimeSlotItem: {
    backgroundColor: "#FFF",
    borderColor: "lightgreen",
  },
  timeSlotItemText: {
    fontWeight: "bold",
  },
  selectedTimeSlotItemText: {
    color: "#FFF",
  },
  unselectedTimeSlotItemText: {
    color: "lightgreen",
  },
  continueButton: {
    backgroundColor: "lightgreen",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  continueButtonText: {
    color: "white",
    fontWeight: "bold",
  },
})