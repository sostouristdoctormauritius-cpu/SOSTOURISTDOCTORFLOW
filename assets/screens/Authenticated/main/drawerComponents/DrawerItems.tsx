import { useNavigation } from "@react-navigation/native"
import { DrawerEmergencyIconSVG } from "app/components/SVG"
import { SCREENS_EMERGENCY_CALL } from "app/constants/Screens"
import { translate } from "app/i18n"
import React from "react"
import { FlatList } from "react-native"
import DrawerItem from "./DrawerItem"

const drawerData = [
  // {
  //   id: 0,
  //   title: translate("homeScreen.drawer.billing"),
  //   icon: DrawerBillingIconSVG,
  //   navigateTo: SCREENS_BILLING,
  // },
  // {
  //   id: 1,
  //   title: translate("homeScreen.drawer.appointments"),
  //   icon: DrawerAppointmentsIconSVG,
  //   navigateTo: SCREENS_APPOINTMENT,
  // },
  // {
  //   id: 2,
  //   title: translate("homeScreen.drawer.consultations"),
  //   icon: DrawerConsultationIconSVG,
  //   navigateTo: SCREENS_APPOINTMENT,
  // },
  // {
  //   id: 3,
  //   title: translate("homeScreen.drawer.medicalRecords"),
  //   icon: DrawerMedicalRecordsIconSVG,
  //   navigateTo: SCREENS_VIEW_PDF, // TODO: navigate to correct screen on here
  // },
  // {
  //   id: 4,
  //   title: translate("homeScreen.drawer.reminders"),
  //   icon: DrawerRemindersIconSVG,
  //   navigateTo: SCREENS_APPOINTMENT,
  // },
  // {
  //   id: 5,
  //   title: translate("homeScreen.drawer.myPrescription"),
  //   icon: DrawerMyPrescriptionIconSVG,
  //   navigateTo: SCREENS_PRESCRIPTION,
  // },
  // {
  //   id: 6,
  //   title: translate("homeScreen.drawer.payments"),
  //   icon: DrawerPaymentsIconSVG,
  //   navigateTo: SCREENS_HOME,
  // },
  {
    id: 7,
    title: translate("homeScreen.drawer.emergencyNumber"),
    icon: DrawerEmergencyIconSVG,
    navigateTo: SCREENS_EMERGENCY_CALL,
  },
  // {
  //   id: 8,
  //   title: translate("homeScreen.drawer.settings"),
  //   icon: DrawerSettingsIconSVG,
  //   navigateTo: SCREENS_APPOINTMENT, // TODO : navigate to settings screen once done
  // },
]

const DrawerItems = ({ onPressItem }: { onPressItem: () => void }) => {
  const navigation = useNavigation()

  const renderItem = ({ item }: any) => (
    <DrawerItem
      onPress={() => {
        onPressItem()
        navigation.navigate(item.navigateTo as never)
      }}
      leftIcon={<item.icon />}
      itemText={item.title}
    />
  )

  return <FlatList data={drawerData} renderItem={renderItem} />
}

export default DrawerItems
