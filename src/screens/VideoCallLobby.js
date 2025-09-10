import React from "react"
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'

export enum AppointmentStatus {
  PENDING = "pending",
  COMPLETE = "complete",
  CANCELLED = "cancelled",
  PAYMENT_COMPLETED = "payment_completed",
}

const DUMMY_VIDEO_APPOINTMENTS = [
  {
    id: "1",
    doctorName: "Dr. Alice",
    appointmentStatus: AppointmentStatus.PAYMENT_COMPLETED,
    consultationType: "video",
    date: "2025-09-10",
    time: "10:00 AM",
    streamChannelId: "channel123",
  },
  {
    id: "2",
    doctorName: "Dr. Bob",
    appointmentStatus: AppointmentStatus.PAYMENT_COMPLETED,
    consultationType: "video",
    date: "2025-09-11",
    time: "11:00 AM",
    streamChannelId: "channel456",
  },
]

const EmptyStateComponent = () => (
  <View style={styles.emptyState}>
    <Text>No upcoming/current video appointments.</Text>
  </View>
)

const LoadingComponent = () => (
  <View style={styles.loadingState}>
    <ActivityIndicator size="large" color="blue" />
  </View>
)

const VideoCallLobby = () => {
  const isLoading = false // Static for visual recreation
  const videoAppointments = DUMMY_VIDEO_APPOINTMENTS // Static for visual recreation
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.root}>
      {isLoading ? (
        <LoadingComponent />
      ) : videoAppointments.length > 0 ? (
        <>
          <Text style={styles.headerText}>Your upcoming/current video appointments</Text>
          <FlatList
            data={videoAppointments}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.appointmentListItem}
                onPress={() => navigation.navigate('StreamVideoCallScreen')}
              >
                <Text style={styles.doctorName}>{item.doctorName}</Text>
                <Text>{item.consultationType} - {item.date} {item.time}</Text>
                <Text style={styles.appointmentStatus}>{item.appointmentStatus}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        </>
      ) : (
        <EmptyStateComponent />
      )}
    </SafeAreaView>
  )
}

export default VideoCallLobby

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 12,
    alignSelf: "center",
    marginVertical: 16,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  appointmentListItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  appointmentStatus: {
    fontSize: 14,
    color: "green",
    marginTop: 5,
  },
})
