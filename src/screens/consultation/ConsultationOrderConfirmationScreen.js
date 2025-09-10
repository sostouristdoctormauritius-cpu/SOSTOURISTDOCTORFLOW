import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'

const ConsultationOrderConfirmationScreen = () => {
  const consultationType = "Chat" // Static for visual recreation
  const selectedDate = "2025-09-15" // Static for visual recreation
  const appointmentTime = "10:30 AM" // Static for visual recreation
  const symptomNames = "Fever, Headache" // Static for visual recreation
  const navigation = useNavigation()

  return (
    <View
      style={styles.screenContentContainer}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text>{'<'}</Text>
      </TouchableOpacity>

      <Text
        style={styles.title}
      >
        Order Confirmation
      </Text>

      <View style={styles.consultationReasonContainer}>
        <View style={styles.consultationReasonLabels}>
          <Text
            style={styles.consultationReasonTitle}
          >
            {consultationType === "Chat" && "Chat Consultation"}
            {consultationType === "Home" && "Home Visit Consultation"}
            {consultationType === "Video" && "Video Consultation"}
          </Text>

          <Text style={styles.symptomLabel}>
            Symptoms : <Text style={styles.symptomNames}>{symptomNames}</Text>
          </Text>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.assignedDoctorDetails}>
        <View style={styles.availabilityNote}>
          <Text>Info Icon</Text>
          <Text
            style={styles.viewDocAvail}
          >
            Doctor are assigned based on availability
          </Text>
        </View>

        <View style={[styles.separator, styles.mt16]} />

        <Text
          style={styles.appointmentDetailsTitle}
        >
          Appointment Details
        </Text>

        <View style={styles.appointmentDetailsContainer}>
          <Text>Calendar Icon</Text>

          <View style={styles.appointmentDetailsMiddle}>
            <Text
              style={styles.appointmentDate}
            >
              {selectedDate}
            </Text>
          </View>

          <View style={styles.timeSlot}>
            <Text style={styles.slotTimeIcon}>Time Icon</Text>
            <Text
              style={styles.timeSlotText}
            >
              {appointmentTime}
            </Text>
          </View>
        </View>
      </View>

      {/* PricingFooter Placeholder */}
      <View style={styles.pricingFooter}>
        <Text>Pricing details here.</Text>
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('ConsultationPayAppointment')}>
          <Text style={styles.continueButtonText}>Confirm and Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ConsultationOrderConfirmationScreen

const styles = StyleSheet.create({
  screenContentContainer: {
    paddingVertical: 16, // Placeholder for spacing.lg
    paddingHorizontal: 16, // Placeholder for spacing.lg
    flex: 1,
    backgroundColor: "white",
  },
  backButton: {
    alignSelf: "flex-start",
    zIndex: 999999,
  },
  title: {
    marginTop: -28,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  consultationReasonContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0FFE64D", // Placeholder for Colors.consultationReasonBackground
    paddingHorizontal: 16,
    paddingVertical: 19,
    borderRadius: 16,
    marginTop: 16,
  },
  consultationReasonLabels: {
    flex: 1,
  },
  consultationReasonTitle: {
    color: "#2FB646", // Placeholder for Colors.consultationReasonTitle
    fontSize: 18,
    fontWeight: "bold",
  },
  symptomLabel: {
    color: "#2FB646", // Placeholder for Colors.consultationReasonTitle
    marginTop: 10,
    fontSize: 14,
  },
  symptomNames: {
    color: "#212121", // Placeholder for Colors.calendarTextHeader
    fontSize: 12,
  },
  separator: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#CECECE", // Placeholder for Colors.rowSeparator
    marginTop: 24,
  },
  assignedDoctorDetails: {
    width: "100%",
    padding: 16,
    borderWidth: 0.5,
    borderColor: "#CECECE", // Placeholder for Colors.rowSeparator
    borderRadius: 16,
    marginTop: 16,
  },
  availabilityNote: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  viewDocAvail: {
    marginTop: 4,
    color: "#494949", // Placeholder for Colors.consultationReasonDescription
    marginBottom: 4,
    marginLeft: 5,
  },
  mt16: {
    marginTop: 16,
  },
  appointmentDetailsTitle: {
    fontSize: 14,
    lineHeight: 17,
    marginTop: 16,
    fontWeight: "bold",
  },
  appointmentDetailsContainer: {
    width: "100%",
    backgroundColor: "#FAFAFA", // Placeholder for Colors.aboutContainerBackground
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  appointmentDetailsMiddle: {
    flex: 1,
    marginLeft: 8,
    marginRight: 10,
  },
  appointmentDate: {
    color: "#313131", // Placeholder for Colors.appointmentDetailsDateDark
    marginBottom: 8,
    textAlign: "left",
  },
  timeSlot: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    padding: 8,
    borderColor: "#F17C8A", // Placeholder for Colors.pillWarningBorder
    backgroundColor: "#FFF0F0", // Placeholder for Colors.pillWarningBackground
  },
  slotTimeIcon: {
    color: "#F07C8A", // Placeholder for Colors.iconWarningTint
    marginRight: 4,
  },
  timeSlotText: {
    color: "#F07C8A", // Placeholder for Colors.iconWarningTint
    marginBottom: 0,
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
