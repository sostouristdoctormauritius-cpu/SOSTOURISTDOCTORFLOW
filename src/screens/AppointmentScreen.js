import React, { useState } from "react"
import { ActivityIndicator, FlatList, StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'

export enum AppointmentStatus {
  PENDING = "pending",
  COMPLETE = "complete",
  CANCELLED = "cancelled",
}

const DUMMY_APPOINTMENTS = [
  {
    id: "1",
    doctorName: "Dr. John Doe",
    appointmentStatus: AppointmentStatus.PENDING,
    consultationType: "Voice Call",
    date: "2025-09-10",
    time: "10:00 AM",
  },
  {
    id: "2",
    doctorName: "Dr. Jane Smith",
    appointmentStatus: AppointmentStatus.COMPLETE,
    consultationType: "Video Call",
    date: "2025-09-09",
    time: "02:00 PM",
  },
  {
    id: "3",
    doctorName: "Dr. Bob Johnson",
    appointmentStatus: AppointmentStatus.CANCELLED,
    consultationType: "Home Visit",
    date: "2025-09-08",
    time: "11:00 AM",
  },
]

const AppointmentScreen = () => {
  const isFetching = false // Static for visual recreation
  const [apptState, setApptState] = useState(AppointmentStatus.PENDING) // Static for visual recreation
  const navigation = useNavigation()

  if (isFetching) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#30B549" />
      </View>
    )
  }

  return (
    <View style={styles.root}>
      {/* AppointmentTabView Placeholder */}
      <View style={styles.tabView}>
        <TouchableOpacity style={styles.tabButton} onPress={() => setApptState(AppointmentStatus.PENDING)}>
          <Text style={styles.tabButtonText}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setApptState(AppointmentStatus.COMPLETE)}>
          <Text style={styles.tabButtonText}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* RescheduleDisclaimer Placeholder */}
      {apptState === AppointmentStatus.PENDING && (
        <View style={styles.disclaimerContainer}>
          <Text style={styles.disclaimerText}>Reschedule Disclaimer: Click here for more info.</Text>
        </View>
      )}

      <FlatList
        data={DUMMY_APPOINTMENTS.filter(appt => appt.appointmentStatus === apptState)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.appointmentListItem}>
            <Text style={styles.doctorName}>{item.doctorName}</Text>
            <Text>{item.consultationType}</Text>
            <Text>{item.date} at {item.time}</Text>
            <Text style={styles.appointmentStatus}>{item.appointmentStatus}</Text>
            <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('AppointmentCancellation')}>
              <Text style={styles.detailsButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default AppointmentScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#ffffff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  tabView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tabButton: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  disclaimerContainer: {
    backgroundColor: "#ffe0b2",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  disclaimerText: {
    color: "#e65100",
  },
  appointmentListItem: {
    backgroundColor: "white",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  appointmentStatus: {
    marginTop: 5,
    fontWeight: "bold",
    color: "blue",
  },
  detailsButton: {
    backgroundColor: "lightgray",
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "flex-end",
  },
  detailsButtonText: {
    fontSize: 12,
  },
  appointmentDetailsModal: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: "lightgreen",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
  },
})
