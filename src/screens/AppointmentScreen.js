import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const AppointmentStatus = {
  UPCOMING: "upcoming",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

const DUMMY_APPOINTMENTS = [
  {
    id: "1",
    doctorName: "Dr. John Doe",
    speciality: "Cardiologist",
    status: AppointmentStatus.UPCOMING,
    type: "Voice Call",
    date: "25 May 2023",
    time: "10:00 AM",
    avatar: require('../assets/images/profile.png'),
  },
  {
    id: "2",
    doctorName: "Dr. Jane Smith",
    speciality: "Dermatologist",
    status: AppointmentStatus.UPCOMING,
    type: "Video Call",
    date: "26 May 2023",
    time: "02:00 PM",
    avatar: require('../assets/images/profile.png'),
  },
  {
    id: "3",
    doctorName: "Dr. Bob Johnson",
    speciality: "Pediatrician",
    status: AppointmentStatus.COMPLETED,
    type: "Chat",
    date: "20 May 2023",
    time: "11:00 AM",
    avatar: require('../assets/images/profile.png'),
  },
  {
    id: "4",
    doctorName: "Dr. Alice Brown",
    speciality: "Neurologist",
    status: AppointmentStatus.CANCELLED,
    type: "Home Visit",
    date: "18 May 2023",
    time: "03:30 PM",
    avatar: require('../assets/images/profile.png'),
  },
];

const AppointmentScreen = () => {
  const [activeTab, setActiveTab] = useState(AppointmentStatus.UPCOMING);
  const navigation = useNavigation();

  const filteredAppointments = DUMMY_APPOINTMENTS.filter(appt => appt.status === activeTab);

  const getStatusStyles = (status) => {
    switch (status) {
      case AppointmentStatus.UPCOMING:
        return { badge: styles.upcomingBadge, text: styles.upcomingText };
      case AppointmentStatus.COMPLETED:
        return { badge: styles.completedBadge, text: styles.completedText };
      case AppointmentStatus.CANCELLED:
        return { badge: styles.cancelledBadge, text: styles.cancelledText };
      default:
        return {};
    }
  };

  const renderAppointmentItem = ({ item }) => {
    const statusStyles = getStatusStyles(item.status);
    return (
      <View style={styles.appointmentCard}>
        <View style={styles.cardHeader}>
          <Image source={item.avatar} style={styles.doctorImage} />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>{item.doctorName}</Text>
            <Text style={styles.doctorSpeciality}>{item.speciality}</Text>
          </View>
          <View style={[styles.statusBadge, statusStyles.badge]}>
            <Text style={[styles.statusText, statusStyles.text]}>{item.status}</Text>
          </View>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date & Time</Text>
            <Text style={styles.detailValue}>{item.date} at {item.time}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Consultation Type</Text>
            <Text style={styles.detailValue}>{item.type}</Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          {item.status === AppointmentStatus.UPCOMING && (
            <TouchableOpacity style={[styles.actionButton, styles.cancelButton]} onPress={() => navigation.navigate('AppointmentCancellation')}>
              <Text style={[styles.actionButtonText, styles.cancelButtonText]}>Cancel Appointment</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={[styles.actionButton, styles.detailsButton]}>
            <Text style={[styles.actionButtonText, styles.detailsButtonText]}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/images/down_arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Appointments</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.tabContainer}>
        {Object.values(AppointmentStatus).map(status => (
          <TouchableOpacity 
            key={status}
            style={[styles.tabButton, activeTab === status && styles.activeTabButton]}
            onPress={() => setActiveTab(status)}
          >
            <Text style={[styles.tabButtonText, activeTab === status && styles.activeTabButtonText]}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredAppointments}
        keyExtractor={(item) => item.id}
        renderItem={renderAppointmentItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No appointments in this category.</Text>
          </View>
        }
      />
    </View>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backIcon: {
    width: 24,
    height: 24,
    transform: [{ rotate: '90deg' }]
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSpacer: {
    width: 24,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: '#F71E27',
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeTabButtonText: {
    color: '#FFFFFF',
  },
  listContainer: {
    padding: 20,
  },
  appointmentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
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
    fontWeight: 'bold',
    color: '#333',
  },
  doctorSpeciality: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  upcomingBadge: { backgroundColor: '#FFF8E1' },
  upcomingText: { color: '#FFA000' },
  completedBadge: { backgroundColor: '#E8F5E9' },
  completedText: { color: '#388E3C' },
  cancelledBadge: { backgroundColor: '#FFEBEE' },
  cancelledText: { color: '#D32F2F' },
  cardBody: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 15,
    marginTop: 5,
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 10,
  },
  detailsButton: {
    backgroundColor: '#F71E27',
  },
  detailsButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F71E27',
  },
  cancelButtonText: {
    color: '#F71E27',
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});
