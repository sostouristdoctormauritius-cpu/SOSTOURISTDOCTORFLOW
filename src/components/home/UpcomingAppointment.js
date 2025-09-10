import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const UpcomingAppointment = ({ appointment, onViewAllPress }) => {
  return (
    <View style={styles.appointmentsContainer}>
      <Text style={styles.sectionTitle}>Upcoming Appointment</Text>
      <View style={styles.appointmentCard}>
        <Image source={require('../../assets/images/profile.png')} style={styles.appointmentIcon} />
        <View style={styles.appointmentInfo}>
          <Text style={styles.appointmentTitle}>{appointment.title}</Text>
          <Text style={styles.appointmentDetails}>{appointment.specialty}</Text>
          <Text style={styles.appointmentDetails}>{appointment.date} at {appointment.time}</Text>
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <Image source={require('../../assets/images/down_arrow.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        style={styles.viewAllButton}
        onPress={onViewAllPress}
      >
        <Text style={styles.viewAllText}>View All Appointments</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appointmentsContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  appointmentCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  appointmentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  appointmentInfo: {
    flex: 1,
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  appointmentDetails: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  arrowButton: {
    padding: 10,
  },
  arrowIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    transform: [{ rotate: '-90deg' }],
  },
  viewAllButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  viewAllText: {
    color: '#F71E27',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default UpcomingAppointment;