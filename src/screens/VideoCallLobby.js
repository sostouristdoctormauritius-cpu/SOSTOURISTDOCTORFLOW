import React from "react"
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'

const AppointmentStatus = {
  PENDING: "pending",
  COMPLETE: "complete",
  CANCELLED: "cancelled",
  PAYMENT_COMPLETED: "payment_completed",
};

const DUMMY_VIDEO_APPOINTMENTS = [
  {
    id: "1",
    doctorName: "Dr. Alice Smith",
    speciality: "General Practitioner",
    appointmentStatus: AppointmentStatus.PAYMENT_COMPLETED,
    consultationType: "video",
    date: "25 May 2023",
    time: "10:00 AM",
    streamChannelId: "channel123",
  },
  {
    id: "2",
    doctorName: "Dr. Bob Johnson",
    speciality: "Cardiologist",
    appointmentStatus: AppointmentStatus.PAYMENT_COMPLETED,
    consultationType: "video",
    date: "26 May 2023",
    time: "11:00 AM",
    streamChannelId: "channel456",
  },
  {
    id: "3",
    doctorName: "Dr. Carol White",
    speciality: "Dermatologist",
    appointmentStatus: AppointmentStatus.PENDING,
    consultationType: "video",
    date: "27 May 2023",
    time: "2:00 PM",
    streamChannelId: "channel789",
  },
]

const EmptyStateComponent = () => (
  <View style={styles.emptyState}>
    <Image 
      source={require('../assets/images/profile.png')} 
      style={styles.emptyStateImage} 
    />
    <Text style={styles.emptyStateTitle}>No Video Appointments</Text>
    <Text style={styles.emptyStateDescription}>
      You don't have any upcoming or current video appointments.
    </Text>
    <TouchableOpacity style={styles.bookButton}>
      <Text style={styles.bookButtonText}>Book a Video Consultation</Text>
    </TouchableOpacity>
  </View>
)

const LoadingComponent = () => (
  <View style={styles.loadingState}>
    <ActivityIndicator size="large" color="#F71E27" />
    <Text style={styles.loadingText}>Loading appointments...</Text>
  </View>
)

const VideoCallLobby = () => {
  const isLoading = false // Static for visual recreation
  const videoAppointments = DUMMY_VIDEO_APPOINTMENTS // Static for visual recreation
  const navigation = useNavigation()

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case AppointmentStatus.PAYMENT_COMPLETED: return "#388E3C";
      case AppointmentStatus.PENDING: return "#FFA000";
      case AppointmentStatus.CANCELLED: return "#D32F2F";
      default: return "#9E9E9E";
    }
  };

  // Get status text
  const getStatusText = (status) => {
    switch (status) {
      case AppointmentStatus.PAYMENT_COMPLETED: return "Ready to Join";
      case AppointmentStatus.PENDING: return "Pending";
      case AppointmentStatus.CANCELLED: return "Cancelled";
      default: return "Unknown";
    }
  };

  const renderAppointmentItem = ({ item }) => (
    <View style={styles.appointmentCard}>
      <View style={styles.appointmentHeader}>
        <Image 
          source={require('../assets/images/profile.png')} 
          style={styles.doctorImage} 
        />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>{item.doctorName}</Text>
          <Text style={styles.doctorSpeciality}>{item.speciality}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.appointmentStatus) }]}>
          <Text style={styles.statusText}>{getStatusText(item.appointmentStatus)}</Text>
        </View>
      </View>
      
      <View style={styles.appointmentDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Date</Text>
          <Text style={styles.detailValue}>{item.date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Time</Text>
          <Text style={styles.detailValue}>{item.time}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Type</Text>
          <Text style={styles.detailValue}>Video Consultation</Text>
        </View>
      </View>
      
      {item.appointmentStatus === AppointmentStatus.PAYMENT_COMPLETED && (
        <TouchableOpacity 
          style={styles.joinButton}
          onPress={() => navigation.navigate('StreamVideoCallScreen')}
        >
          <Text style={styles.joinButtonText}>Join Call</Text>
        </TouchableOpacity>
      )}
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Video Appointments</Text>
      </View>
      
      {isLoading ? (
        <LoadingComponent />
      ) : videoAppointments.length > 0 ? (
        <FlatList
          data={videoAppointments}
          renderItem={renderAppointmentItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <EmptyStateComponent />
      )}
    </SafeAreaView>
  )
}

export default VideoCallLobby

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#ffffff",
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  listContent: {
    padding: 20,
    paddingTop: 10,
  },
  appointmentCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  appointmentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 3,
  },
  doctorSpeciality: {
    fontSize: 14,
    color: "#666",
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ffffff",
  },
  appointmentDetails: {
    backgroundColor: "#fafafa",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  detailRowLast: {
    marginBottom: 0,
  },
  detailLabel: {
    fontSize: 14,
    color: "#666",
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  joinButton: {
    backgroundColor: "#F71E27",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  joinButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  emptyStateImage: {
    width: 100,
    height: 100,
    marginBottom: 30,
    opacity: 0.5,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  emptyStateDescription: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  bookButton: {
    backgroundColor: "#F71E27",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  bookButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  loadingState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: "#666",
  },
})
