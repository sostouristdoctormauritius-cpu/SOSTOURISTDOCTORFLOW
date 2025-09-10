import React, { useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import { useNavigation } from '@react-navigation/native'

const ConsultationBookAppointmentScreen = () => {
  const isLoading = false // Static for visual recreation
  const emptySlots = false // Static for visual recreation
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

      <Text style={styles.subTitleStyle}>Choose Slot</Text>

      <View style={styles.slotPartOfDayContainer}>
        <TouchableOpacity
          style={[
            styles.slotPartOfDayButton,
            styles.marginRight,
            isSlotMorning ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => setIsSlotMorning(true)}
        >
          <Text style={isSlotMorning ? styles.selectedButtonText : styles.unselectedButtonText}>Morning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.slotPartOfDayButton,
            styles.marginLeft,
            !isSlotMorning ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => setIsSlotMorning(false)}
        >
          <Text style={!isSlotMorning ? styles.selectedButtonText : styles.unselectedButtonText}>Evening</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.slotTimeContainer}>
        {isLoading && <ActivityIndicator size="large" color="blue" />}
        {emptySlots && !isLoading && (
          <View style={styles.disabledBox}>
            <Text style={styles.disabledText}>N/A</Text>
          </View>
        )}
        {!isLoading && !emptySlots && DUMMY_TIME_SLOTS.map((row, rowIndex) => (
          <View key={`timeslot-row-${rowIndex}`} style={styles.slotTimeRow}>
            {row.map((slot) => (
              <TouchableOpacity
                key={`slot-${slot}`}
                style={[
                  styles.slotButton,
                  {
                    backgroundColor: appointmentTime === slot ? "lightgreen" : "#FFF",
                    borderColor: "lightgreen",
                  },
                ]}
                onPress={() => setAppointmentTime(slot)}
              >
                <Text
                  style={[
                    styles.slotButtonText,
                    {
                      color: appointmentTime === slot ? "#FFF" : "lightgreen",
                    },
                  ]}
                >
                  {slot}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* PricingFooter Placeholder */}
      <View style={styles.pricingFooter}>
        <Text>Pricing details here.</Text>
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('ConsultationOrderConfirmation')}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ConsultationBookAppointmentScreen

const styles = StyleSheet.create({
  backButtonStyle: {
    alignSelf: "flex-start",
    zIndex: 9999,
  },
  titleStyle: {
    marginTop: -28,
    fontSize: 24,
    fontWeight: "bold",
  },
  datePickerContainer: {
    marginTop: 24,
    height: 100,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  subTitleStyle: {
    alignSelf: "flex-start",
    color: "#212121", // Placeholder for Colors.screenTitleText
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  slotPartOfDayContainer: {
    flexDirection: "row",
    marginTop: 20,
    width: "100%",
  },
  slotPartOfDayButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  marginRight: {
    marginRight: 9,
  },
  marginLeft: {
    marginLeft: 9,
  },
  selectedButton: {
    backgroundColor: "lightgreen",
  },
  unselectedButton: {
    backgroundColor: "white",
  },
  selectedButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  unselectedButtonText: {
    color: "black",
  },
  slotTimeContainer: {
    flexDirection: "column",
    marginTop: 16,
  },
  slotTimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  slotButton: {
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 22,
    borderWidth: 1,
  },
  slotButtonText: {
    fontSize: 14,
    fontWeight: "700",
  },
  disabledBox: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#191015",
    height: 100,
    justifyContent: "center",
    width: "100%",
  },
  disabledText: {
    alignSelf: "center",
    color: "#FFF",
    marginTop: 24,
  },
  screenContentContainerStyle: {
    paddingHorizontal: 16, // Placeholder for spacing.lg
    paddingVertical: 16, // Placeholder for spacing.lg
    flex: 1,
  },
  pricingFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginTop: 20,
  },
  continueButton: {
    backgroundColor: "lightgreen",
    padding: 15,
    borderRadius: 5,
  },
  continueButtonText: {
    color: "white",
    fontWeight: "bold",
  },
})
