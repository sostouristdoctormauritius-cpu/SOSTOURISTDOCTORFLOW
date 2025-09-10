import { useNavigation, useRoute } from "@react-navigation/native"
import { Screen } from "app/components"
import HeaderBackButton from "app/components/headerBackButton"
import { EVENT_APPOINTMENT_ADDED_TO_CALENDAR } from "app/constants/Events"
import useGetAppointmentById from "app/hook/api/useGetAppointmentById"
import { translate } from "app/i18n"
import { captureApiException } from "app/manager/Sentry"
import { AppStackScreenProps } from "app/navigators"
import { useHeader } from "app/utils/useHeader"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect } from "react"
import { Alert, DeviceEventEmitter, ViewStyle, useWindowDimensions } from "react-native"
import WebView from "react-native-webview"

enum PaymentStatus {
  Pending = "pending_payment",
  Success = "payment_completed",
  Failed = "payment_failed",
}

type RouteParams = {
  appointment: Appointment
  paymentLink: string
}

interface ConsultationPayAppointmentScreenProps
  extends AppStackScreenProps<"ConsultationPayAppointment"> {}

const ConsultationPayAppointmentScreen: FC<ConsultationPayAppointmentScreenProps> = observer(
  function ConsultationPayAppointmentScreen() {
    const route = useRoute()
    const { paymentLink, appointment } = route.params as RouteParams
    const navigation = useNavigation()

    const { height } = useWindowDimensions()

    const { data: paymentResult, error: paymentError } = useGetAppointmentById(appointment.id)

    useEffect(() => {
      if (paymentError) {
        captureApiException(paymentError, {
          type: "payment_error",
        })
      }
    }, [paymentError])

    useHeader({
      title: "Pay for Appointment",
      LeftActionComponent: <HeaderBackButton />,
    })

    // @ts-expect-error
    const clearNavStack = () => navigation.popToTop()

    if (paymentResult?.status === PaymentStatus.Success) {
      Alert.alert(
        translate("homeScreen.bookingConfirm"),
        translate("homeScreen.bookingConfirmDesc"),
        [
          {
            text: translate("common.ok"),
            onPress: async () => {
              DeviceEventEmitter.emit(EVENT_APPOINTMENT_ADDED_TO_CALENDAR, appointment)
            },
          },
        ],
      )
    } else if (paymentResult?.status === PaymentStatus.Failed) {
      Alert.alert(
        translate("consultation.payment.payErrorTitle"),
        translate("consultation.payment.payErrorDesc"),
        [{ text: "Ok", onPress: () => clearNavStack() }],
      )
    }

    return (
      <Screen style={$root} preset="scroll">
        <WebView
          originWhitelist={["*"]}
          source={{ uri: paymentLink }}
          style={[
            $webView,
            {
              height: height - 20,
            },
          ]}
        />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $webView = {
  flex: 1,
  width: "100%",
}

export default ConsultationPayAppointmentScreen
