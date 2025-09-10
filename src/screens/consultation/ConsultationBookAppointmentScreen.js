import React, { useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components'

const ConsultationBookAppointmentScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()) // Static for visual recreation
  const [isSlotMorning, setIsSlotMorning] = useState(true) // Static for visual recreation
  const [appointmentTime, setAppointmentTime] = useState("") // Static for visual recreation
  const navigation = useNavigation()

  // Mock dates for the next 7 days
  const DUMMY_DATES = [
    { day: "Today", date: "25", month: "May" },
    { day: "Thu", date: "26", month: "May" },
    { day: "Fri", date: "27", month: "May" },
    { day: "Sat", date: "28", month: "May" },
    { day: "Sun", date: "29", month: "May" },
    { day: "Mon", date: "30", month: "May" },
    { day: "Tue", date: "31", month: "May" },
  ]

  const DUMMY_TIME_SLOTS = [
    ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
    ["02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"],
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Book Appointment</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date</Text>
          <View style={styles.dateContainer}>
            {DUMMY_DATES.map((date, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dateItem,
                  index === 0 && styles.selectedDateItem
                ]}
                onPress={() => setSelectedDate(index)}
              >
                <Text style={[
                  styles.dateDay,
                  index === 0 && styles.selectedDateDay
                ]}>
                  {date.day}
                </Text>
                <Text style={[
                  styles.dateNumber,
                  index === 0 && styles.selectedDateNumber
                ]}>
                  {date.date}
                </Text>
                <Text style={[
                  styles.dateMonth,
                  index === 0 && styles.selectedDateMonth
                ]}>
                  {date.month}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Time</Text>
          <View style={styles.timeSlotHeader}>
            <TouchableOpacity
              style={[
                styles.timeSlotButton, 
                isSlotMorning && styles.activeTimeSlotButton
              ]}
              onPress={() => setIsSlotMorning(true)}
            >
              <Text style={[
                styles.timeSlotText, 
                isSlotMorning && styles.activeTimeSlotText
              ]}>
                Morning
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.timeSlotButton, 
                !isSlotMorning && styles.activeTimeSlotButton
              ]}
              onPress={() => setIsSlotMorning(false)}
            >
              <Text style={[
                styles.timeSlotText, 
                !isSlotMorning && styles.activeTimeSlotText
              ]}>
                Evening
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.timeSlotsContainer}>
            {DUMMY_TIME_SLOTS[isSlotMorning ? 0 : 1].map((slot, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.timeSlotItem,
                  appointmentTime === slot && styles.selectedTimeSlotItem
                ]}
                onPress={() => setAppointmentTime(slot)}
              >
                <Text style={[
                  styles.timeSlotItemText,
                  appointmentTime === slot && styles.selectedTimeSlotItemText
                ]}>
                  {slot}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.noteContainer}>
          <Text style={styles.noteTitle}>Note</Text>
          <Text style={styles.noteText}>
            The doctor will confirm the appointment within 24 hours. You will receive a notification once confirmed.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Continue"
          onPress={() => navigation.navigate('ConsultationOrderConfirmation')}
          disabled={!appointmentTime}
        />
      </View>
    </View>
  )
}

export default ConsultationBookAppointmentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#333',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#333',
    marginBottom: 15,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateItem: {
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#f8f8f8",
    minWidth: 60,
  },
  selectedDateItem: {
    backgroundColor: "#F71E27",
  },
  dateDay: {
    fontSize: 14,
    color: "#666",
  },
  selectedDateDay: {
    color: "#fff",
  },
  dateNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 5,
  },
  selectedDateNumber: {
    color: "#fff",
  },
  dateMonth: {
    fontSize: 12,
    color: "#999",
  },
  selectedDateMonth: {
    color: "#fff",
  },
  timeSlotHeader: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  timeSlotButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#F71E27",
    marginHorizontal: 10,
  },
  activeTimeSlotButton: {
    backgroundColor: "#F71E27",
  },
  timeSlotText: {
    color: "#F71E27",
    fontWeight: "600",
  },
  activeTimeSlotText: {
    color: "#fff",
  },
  timeSlotsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  timeSlotItem: {
    width: "48%",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#fafafa",
    marginBottom: 15,
    alignItems: "center",
  },
  selectedTimeSlotItem: {
    backgroundColor: "#F71E27",
    borderColor: "#F71E27",
  },
  timeSlotItemText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  selectedTimeSlotItemText: {
    color: "#fff",
  },
  noteContainer: {
    backgroundColor: "#f0f9f2",
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2FB645",
    marginBottom: 5,
  },
  noteText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
})