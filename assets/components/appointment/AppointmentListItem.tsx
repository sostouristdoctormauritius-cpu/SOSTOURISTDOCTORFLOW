import { Icon } from "app/components/Icon"
import ChatVisitSVG from "app/components/SVG/chatVisitSVG"
import HomeVisitSVG from "app/components/SVG/homeVisitSVG"
import VideoVisitSVG from "app/components/SVG/videoVisitSVG"

import { ConsultationType } from "app/constants/GlobalTypes"
import { withSOSErrorBoundary } from "app/screens/ErrorScreen/ErrorBoundary"
import { colors, typography } from "app/theme"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { ComponentType } from "react"
import {
  Dimensions,
  Image,
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from "react-native"
import { AppointmentStatus } from "./"

export interface AppointmentListItemProps {
  date?: string
  time?: string
  doctorName?: string
  consultationType: string
  appointmentStatus: string
  avatarSource?: string
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
const AppointmentListItem = observer(function AppointmentListItem(props: AppointmentListItemProps) {
  const {
    appointmentStatus: appointmentStatusProp,
    avatarSource,
    consultationType,
    date,
    doctorName = "SOS Doctor",
    style,
    time,
    onPress = undefined,
  } = props

  const Wrapper = (onPress ? TouchableOpacity : View) as ComponentType<
    TouchableOpacityProps | ViewProps
  >

  const consultationTypeIcon = (consultationTypeParam: string) => {
    switch (consultationTypeParam) {
      case ConsultationType.Home:
        return <HomeVisitSVG width={24} height={24} style={margin} />
      case ConsultationType.Video:
        return <VideoVisitSVG width={24} height={24} style={margin} />
      case ConsultationType.Chat:
        return <ChatVisitSVG width={24} height={24} style={margin} />
      default:
        return null
    }
  }

  return (
    <Wrapper onPress={onPress} style={[wrapperComponent, onPress && shadow, style]}>
      {onPress && (
        <View style={touchableWrapperComponent}>
          <Icon icon="clock" size={16} color={colors.text} style={clockIcon} />
          {Boolean(date) && <Text style={generalTextStyle}>{date}</Text>}
          {Boolean(date) && <Text style={generalText}>|</Text>}
          {Boolean(time) && <Text style={generalTextStyle}>{time}</Text>}
        </View>
      )}
      <View style={wrapperInner}>
        {Boolean(avatarSource) && (
          <Image resizeMode="cover" source={{ uri: avatarSource }} style={avatar} />
        )}
        <View style={consultationView}>
          <Text style={doctorText}>{`Dr ${doctorName}`}</Text>
          <View style={row}>
            {consultationTypeIcon(consultationType)}
            <Text style={consultationTypeText}>{consultationType}</Text>
          </View>
        </View>
        <AppointmentStatus appointmentStatus={appointmentStatusProp} style={appointmentStatusView} />
      </View>
    </Wrapper>
  )
})

const wrapperComponent: ViewStyle = {
  backgroundColor: "white",
  alignSelf: "center",
  marginBottom: 8,
  marginTop: 8,
  width: Dimensions.get("screen").width - 32,
  height: 149,
  padding: 16,
  borderRadius: 24,
}

const touchableWrapperComponent: ViewStyle = {
  flexDirection: "row",
  borderBottomWidth: 1,
  borderBottomColor: colors.buttonGreyBackground,
  marginBottom: 8,
  paddingBottom: 8,
}

const wrapperInner: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 12,
}

const generalText: TextStyle = {
  fontSize: 12,
  marginRight: 4,
}

const margin: ViewStyle = {
  marginRight: 6,
}

const clockIcon: ImageStyle = {
  marginHorizontal: 8,
  marginTop: 4,
}

const generalTextStyle: TextStyle = {
  marginRight: 8,
  fontSize: 12,
}

const avatar: ImageStyle = {
  height: 56,
  width: 56,
  borderRadius: 56 / 2,
}

const doctorText: TextStyle = {
  fontSize: 16,
  fontFamily: typography.primary.bold,
}
const consultationView: ViewStyle = {
  marginRight: 51,
}

const consultationTypeText: TextStyle = {
  color: colors.tabBarInactiveBackgroundColor,
  fontSize: 12,
  fontFamily: typography.primary.bold,
}

const row: ViewStyle = {
  flexDirection: "row",
}

const appointmentStatusView: ViewStyle = {
  marginLeft: 51,
}

const shadow: ViewStyle = {
  shadowColor: "black",
  shadowOpacity: 0.08,
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowRadius: 4,
}
export default withSOSErrorBoundary(AppointmentListItem)
