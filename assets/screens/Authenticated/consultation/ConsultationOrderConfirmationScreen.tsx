import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"
import { StyleSheet, TouchableOpacity, View} from "react-native"
import BackButtonIcon from "app/components/SVG/BackButtonIcon"
import CalendarIcon from "app/components/SVG/CalendarIcon"
import SlotTimeIcon from "app/components/SVG/SlotTimeIcon"
import InfoIconSVG from "app/components/SVG/infoIconSVG"
import { Screen } from "app/components/Screen"
import { Text } from "app/components/Text"
import PricingFooter from "app/components/consultation/PricingFooter"
import Colors from "app/constants/Colors"
import { ConsultationType } from "app/constants/GlobalTypes"
import { spacing } from "app/constants/spacing"
import useBookAppointment from "app/hook/api/useBookAppointment"
import { typography } from "app/theme"
import { translate } from "app/i18n"

type RouteParams = {
  consultationType: ConsultationType
  selectedDate: string
  appointmentTime: string
  symptoms: string[]
  additionalSymptom: string
  doctors: Doctor[]
  location?: { latitude: number; longitude: number }
}

const config = {
  [ConsultationType.Chat]: {
    titleTx: "consultation.messaging.symptomSelection.pricingTitleChat",
    descriptionTx: "consultation.messaging.symptomSelection.pricingDescriptionChat",
  },
  [ConsultationType.Home]: {
    titleTx: "consultation.messaging.symptomSelection.pricingTitleHome",
    descriptionTx: "consultation.messaging.symptomSelection.pricingDescriptionHome",
  },
  [ConsultationType.Video]: {
    titleTx: "consultation.messaging.symptomSelection.pricingTitleVideo",
    descriptionTx: "consultation.messaging.symptomSelection.pricingDescriptionVideo",
  },
}

export default function ConsultationOrderConfirmationScreen() {
  const route = useRoute()
  const {
    consultationType,
    selectedDate,
    appointmentTime,
    symptoms,
    additionalSymptom,
    location,
  } = route.params as RouteParams

  const navigation = useNavigation()

  const symptomNames1 = [
    ...(symptoms?.length ? symptoms.map((symptom) => translate(symptom)) : []),
    ...(additionalSymptom ? [additionalSymptom] : []),
  ]
  const symptomNames = symptomNames1.join(', ')

  const bookApptMtx = useBookAppointment()

  const onBackPressed = () => navigation.goBack()

  const onContinuePressed = () => {
    bookApptMtx.mutate({
      date: selectedDate,
      startTime: appointmentTime,
      consultationType,
      symptoms,
      additionalNote: additionalSymptom,
      ...(location && {
        visitLocation: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
      }),
    })
  }

  const title = config[consultationType]?.titleTx

  return (
    <Screen
      preset="auto"
      keyboardOffset={150}
      safeAreaEdges={["top"]}
      KeyboardAvoidingViewProps={{ enabled: false }}
      contentContainerStyle={styles.screenContentContainer}
    >
      <TouchableOpacity style={styles.backButton} onPress={onBackPressed}>
        <BackButtonIcon width="28" height="28" />
      </TouchableOpacity>

      <Text
        style={styles.title}
        preset="screenHeader"
        tx="consultation.messaging.orderConfirmation.title"
      />

      <View style={styles.consultationReasonContainer}>
        <View style={styles.consultationReasonLabels}>
          <Text
            style={styles.consultationReasonTitle}
            preset="subSectionTitle"
            tx={title}
          />

          <Text style={styles.symptomLabel}>
            {`${symptomNames1.length > 1
              ? translate("consultation.messaging.orderConfirmation.Symptoms")
              : translate("consultation.messaging.orderConfirmation.Symptom")
              } : `}
            <Text style={styles.symptomNames}>{symptomNames}</Text>
          </Text>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.assignedDoctorDetails}>
        <View style={styles.availabilityNote}>
          <InfoIconSVG width={16} height={16} />
          <Text
            style={styles.viewDocAvail}
            preset="description"
            text="Doctor are assigned based on availability"
          />
        </View>

        <View style={[styles.separator, styles.mt16]} />

        <Text
          style={styles.appointmentDetailsTitle}
          preset="subSectionTitle"
          tx="consultation.messaging.orderConfirmation.Appointment_Details"
        />

        <View style={styles.appointmentDetailsContainer}>
          <CalendarIcon width={40} height={40} />

          <View style={styles.appointmentDetailsMiddle}>
            <Text
              style={styles.appointmentDate}
              preset="description"
              text={selectedDate}
            />
          </View>

          <View style={styles.timeSlot}>
            <SlotTimeIcon style={styles.slotTimeIcon} width={16} height={16} />
            <Text
              style={styles.timeSlotText}
              preset="description"
              text={appointmentTime}
            />
          </View>
        </View>
      </View>

      <PricingFooter
        onContinuePressed={onContinuePressed}
        consultationType={consultationType}
        isLoading={bookApptMtx.isPending}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screenContentContainer: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  backButton: {
    alignSelf: "flex-start",
    zIndex: 999999,
  },
  title: {
    marginTop: -28,
  },
  consultationReasonContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.consultationReasonBackground,
    paddingHorizontal: 16,
    paddingVertical: 19,
    borderRadius: 16,
    marginTop: 16,
  },
  consultationReasonLabels: {
    flex: 1,
  },
  consultationReasonTitle: {
    color: Colors.consultationReasonTitle,
  },
  symptomLabel: {
    color: Colors.consultationReasonTitle,
    marginTop: 10,
    fontSize: 14,
    fontFamily: typography.secondary?.normal,
  },
  symptomNames: {
    color: Colors.calendarTextHeader,
    fontSize: 12,
    fontFamily: typography.secondary?.normal,
  },
  separator: {
    width: "100%",
    height: 0.5,
    backgroundColor: Colors.rowSeparator,
    marginTop: 24,
  },
  assignedDoctorDetails: {
    width: "100%",
    padding: 16,
    borderWidth: 0.5,
    borderColor: Colors.rowSeparator,
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
    color: Colors.consultationReasonDescription,
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
  },
  appointmentDetailsContainer: {
    width: "100%",
    backgroundColor: Colors.aboutContainerBackground,
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
    color: Colors.appointmentDetailsDateDark,
    marginBottom: 8,
    textAlign: "left",
  },
  timeSlot: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    padding: 8,
    borderColor: Colors.pillWarningBorder,
    backgroundColor: Colors.pillWarningBackground,
  },
  slotTimeIcon: {
    color: Colors.iconWarningTint,
    marginRight: 4,
  },
  timeSlotText: {
    color: Colors.iconWarningTint,
    marginBottom: 0,
  },
})
