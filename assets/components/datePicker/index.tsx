import React from "react"
import { useTheme } from "react-native-paper"
import DateTimePicker from "react-native-ui-datepicker"
import CalendarNextIconSVG from "app/components/SVG/CalendarNextIconSVG"
import CalendarPreviousIconSVG from "app/components/SVG/CalendarPreviousIconSVG"
import Colors from "app/constants/Colors"
import { typography } from "app/constants/typography"
import dayjs from "dayjs"

type DatePickerProps = {
  date: any
  onChange: (params: any) => void
  minDate?: any
  maxDate?: any
}

const today = dayjs().format("YYYY-MM-DD")

const SOSDatePicker = ({ date, onChange, minDate, maxDate, ...rest }: DatePickerProps) => {
  const theme = useTheme()

  return (
    <DateTimePicker
      mode="single"
      date={date}
      minDate={minDate}
      startDate={today}
      maxDate={maxDate}
      onChange={onChange}
      calendarTextStyle={$calendarTextStyle}
      selectedTextStyle={$selectedTextStyle}
      todayContainerStyle={$todayContainerStyle}
      headerTextStyle={$headerTextStyle}
      selectedItemColor={theme.colors.secondary}
      headerButtonColor={theme.colors.secondary}
      buttonPrevIcon={<CalendarPreviousIconSVG width={20} height={20} />}
      buttonNextIcon={<CalendarNextIconSVG width={20} height={20} />}
      {...rest}
    />
  )
}

const $calendarTextStyle = {
  fontFamily: typography.primary.medium,
  color: Colors.calendarTextDayDefault,
  fontSize: 14,
}

const $selectedTextStyle = {
  fontFamily: typography.primary.bold,
  color: Colors.calendarTextDaySelected,
  fontSize: 14,
}

const $todayContainerStyle = {
  borderWidth: 1,
}
const $headerTextStyle = {
  fontFamily: typography.primary.semiBold,
  color: Colors.calendarTextHeader,
  fontSize: 16,
}

export default SOSDatePicker
