import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import ErrorModal from '../../components/ErrorModal';

// Mock data for available time slots
const availableTimes = {
  '2023-06-01': ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'],
  '2023-06-02': ['10:00 AM', '12:00 PM', '03:00 PM'],
  '2023-06-03': ['09:30 AM', '11:30 AM'],
};

const AppointmentBookingScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      // Navigate to a confirmation screen
      navigation.navigate('OrderConfirmation', { date: selectedDate, time: selectedTime });
    } else {
      // Show an error modal to select date and time
      setErrorModalVisible(true);
    }
  };

  // For demonstration, we'll just show a few dates
  const dates = Object.keys(availableTimes);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Appointment</Text>
        <View style={styles.headerSpacer} />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Select a Date</Text>
        <View style={styles.dateSelection}>
          {dates.map(date => (
            <TouchableOpacity 
              key={date} 
              style={[styles.dateButton, selectedDate === date && styles.selectedDateButton]}
              onPress={() => handleDateSelect(date)}
            >
              <Text style={[styles.dateText, selectedDate === date && styles.selectedDateText]}>{date}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedDate && (
          <>
            <Text style={styles.sectionTitle}>Select a Time</Text>
            <View style={styles.timeSelection}>
              {availableTimes[selectedDate].map(time => (
                <TouchableOpacity 
                  key={time} 
                  style={[styles.timeButton, selectedTime === time && styles.selectedTimeButton]}
                  onPress={() => handleTimeSelect(time)}
                >
                  <Text style={[styles.timeText, selectedTime === time && styles.selectedTimeText]}>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <Button onPress={handleBooking}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </Button>
      </View>
      <ErrorModal 
        visible={errorModalVisible}
        onClose={() => setErrorModalVisible(false)}
        title="Appointment Booking"
        message="Please select a date and time for your appointment."
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: { fontSize: 24, color: '#333' },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSpacer: {
    width: 24,
  },
  contentContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  dateSelection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dateButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    width: '48%',
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedDateButton: {
    backgroundColor: '#F71E27',
    borderColor: '#F71E27',
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  selectedDateText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  timeSelection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  timeButton: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    width: '31%',
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedTimeButton: {
    backgroundColor: '#F71E27',
    borderColor: '#F71E27',
  },
  timeText: {
    fontSize: 14,
    color: '#333',
  },
  selectedTimeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  bookButton: {
    backgroundColor: '#F71E27',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default AppointmentBookingScreen;
