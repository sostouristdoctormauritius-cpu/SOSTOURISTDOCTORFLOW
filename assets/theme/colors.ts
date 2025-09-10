// TODO: write documentation for colors and palette in own markdown file and add links from here
const tintColorLight = "#2f95dc"
const tintColorDark = "#fff"
const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  // transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  // text: palette.neutral800,
  /**
   * Secondary text information.
   */
  // textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  // background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  // tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  // error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,

  tabBackground: "#FFF",
  buttonPrimaryText: "#FFF",
  buttonPrimaryBackground: "#30B549",
  buttonGreyText: "#444444",
  buttonGreyBackground: "#EDEDED",
  buttonDisabledText: "#5B5B5B",
  buttonDisabledBackground: "#F6F6F6",
  screenTitleText: "#212121",
  screenSubtitleText: "#2FB645",
  descriptionText: "#616161",
  rowTitleText: "#212121",
  rowDescriptionText: "#616161",
  rowSeparator: "#CECECE",
  bottomSeparator: "#F4F4F4",
  modalBackdrop: "#535861E5",
  modalTitleText: "#2FB645",
  ratingCountText: "#3C3C3C",
  blockSectionBackground: "#EDF7F2",
  blockSectionText: "#3C3C3C",
  subSectionTitle: "#3C3C3C",
  subSectionText: "#000",
  aboutDescription: "#9E9E9E",
  aboutContainerBackground: "#FAFAFA",
  modalHeaderSwipeIndicator: "#D9D9D9",
  headerCancelButtonText: "#938F99",
  textInputFieldText: "#8ABAA4",
  textInputFieldBackground: "#EDF7F2",
  footerDescriptionText: "#616161",
  slotEnabled: "#2FB645",
  slotDisabledBackground: "#EBF6F1",
  calendarTextDayDefault: "#424242",
  calendarTextDaySelected: "#FFF",
  calendarTextHeader: "#212121",
  appointmentDetailsDate: "#656565",
  appointmentDetailsDateDark: "#313131",
  appointmentDetailsSlotLabel: "#2FB646",
  consultationReasonBackground: "#E0FFE64D",
  consultationReasonTitle: "#2FB646",
  consultationReasonDescription: "#494949",
  iconPrimaryTint: "#2FB646",
  iconWarningTint: "#F07C8A",
  pillWarningBorder: "#F17C8A",
  pillWarningBackground: "#FFF0F0",
  tabBarActiveBackgroundColor: "#00934E",
  tabBarInactiveBackgroundColor: "#9E9E9E",
  cancelled: "#F75555",
  cancelledBackground: "#F7555514",
  upcomingBackground: "#FFA011",

  // TODO: below items might be unused. To slowly move what we need to above, and remove below later.
  text: "#212121",
  background: "#fff",
  tint: tintColorLight,
  tabIconDefault: "#ccc",
  tabIconSelected: tintColorLight,
  error: "#C03403",
  textDim: "#564E4A",
  transparent: "rgba(0, 0, 0, 0)",
  textFieldBackground: "#F4F2F1",
  textFieldBorder: "#B6ACA6",
  textLightGrey: "#8C8C8C",
  buttonBorder: "#B6ACA6",
  buttonBackgroundFill: "#D7CEC9",
  buttonBackgroundReversed: "#191015",

  // TODO: Do we need light and dark themes? Can we rather define directly as above if it's never going to be used?
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    // background: "#000",
    background: "#fff",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
}
