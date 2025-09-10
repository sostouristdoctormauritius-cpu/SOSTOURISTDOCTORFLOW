import { Text } from "app/components/Text"
import { translate } from "app/i18n"
import { AppointmentStatus } from "app/screens/Authenticated/appointment"
import { colors } from "app/theme"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { TouchableOpacity, View, ViewStyle } from "react-native"

export interface AppointmentFilterProps {
  onPress: (idx: AppointmentStatus) => void
  apptState: AppointmentStatus
}

const AppointmentTabView = observer(function AppointmentFilter({
  onPress,
  apptState,
}: AppointmentFilterProps) {
  const renderTabItem = (title: string, isSelected: boolean, tabIndex: AppointmentStatus) => {
    const onPressTab = () => onPress(tabIndex)

    return (
      <TouchableOpacity onPress={onPressTab} style={[filterItem, isSelected && $selectedStyle]}>
        <Text text={title} style={[$text, isSelected && $colorActive]} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={$container}>
      {renderTabItem(
        translate("appointment.upcoming", {}),
        apptState === AppointmentStatus.PENDING,
        AppointmentStatus.PENDING,
      )}
      {renderTabItem(
        translate("appointment.completed", {}),
        apptState === AppointmentStatus.COMPLETE,
        AppointmentStatus.COMPLETE,
      )}
      {/* {renderTabItem(translate("appointment.cancelled", {}), curIndex === 2, 2)} */}
    </View>
  )
})

const $colorActive = {
  color: colors.tabBarActiveBackgroundColor,
}
const $text = {
  color: colors.tabBarInactiveBackgroundColor,
}

const $container: ViewStyle = {
  flexDirection: "row",
  width: "100%",
  justifyContent: "center",
  marginBottom: 32,
}

const filterItem: ViewStyle = {
  width: 120,
  height: 41,
  borderBottomColor: colors.tabBarInactiveBackgroundColor,
  borderBottomWidth: 2,
  justifyContent: "center",
  alignItems: "center",
}

const $selectedStyle = {
  borderBottomColor: colors.tabBarActiveBackgroundColor,
  borderBottomWidth: 4,
}

export default AppointmentTabView
