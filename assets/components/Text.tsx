import Colors from "app/constants/Colors"
import i18n from "i18n-js"
import React from "react"
import { Text as RNText, TextProps as RNTextProps, StyleProp, TextStyle } from "react-native"
import { TxKeyPath, isRTL, translate } from "../i18n"
import { colors, typography } from "../theme"

type Sizes = keyof typeof $sizeStyles
type Weights = keyof typeof typography.primary
type Presets = keyof typeof $presets

export interface TextProps extends RNTextProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: i18n.TranslateOptions
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>
  /**
   * One of the different types of text presets.
   */
  preset?: Presets
  /**
   * Text weight modifier.
   */
  weight?: Weights
  /**
   * Text size modifier.
   */
  size?: Sizes
  /**
   * Children components.
   */
  children?: React.ReactNode
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Text/}
 * @param {TextProps} props - The props for the `Text` component.
 * @returns {JSX.Element} The rendered `Text` component.
 */
export function Text(props: TextProps) {
  const { weight, size, tx, txOptions, text, children, style: $styleOverride, ...rest } = props

  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const preset: Presets = props.preset ?? "default"
  const $styles: StyleProp<TextStyle> = [
    $rtlStyle,
    $presets[preset],
    weight && $fontWeightStyles[weight],
    size && $sizeStyles[size],
    $styleOverride,
  ]

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  )
}

const $sizeStyles = {
  screenTitle: { fontSize: 24, lineHeight: 28.8 } satisfies TextStyle,
  screenHeader: { fontSize: 20, lineHeight: 24 } satisfies TextStyle,
  screenSubtitle: { fontSize: 14, lineHeight: 17 } satisfies TextStyle,
  description: { fontSize: 12, lineHeight: 14.5 } satisfies TextStyle,
  rowTitle: {
    fontSize: 16,
    lineHeight: 22.4,
    letterSpacing: 0.2,
  } satisfies TextStyle,
  rowDescription: {
    fontSize: 12,
    lineHeight: 14.5,
    letterSpacing: 0.2,
  } satisfies TextStyle,
  ratingText: { fontSize: 18, lineHeight: 22.8 } satisfies TextStyle,
  primaryPill: { fontSize: 14, lineHeight: 16.9 } satisfies TextStyle,
  blockSectionTitle: { fontSize: 16, lineHeight: 19.3 } satisfies TextStyle,
  blockSectionDescription: { fontSize: 14, lineHeight: 17 } satisfies TextStyle,
  subSectionTitle: { fontSize: 16, lineHeight: 19.3 } satisfies TextStyle,
  subSectionDescription: { fontSize: 14, lineHeight: 17 } satisfies TextStyle,
  aboutDescription: { fontSize: 16, lineHeight: 19 } satisfies TextStyle,
  headerCancelButton: { fontSize: 14, lineHeight: 17 } satisfies TextStyle,
  textInputField: { fontSize: 16, lineHeight: 19 } satisfies TextStyle,
  footerDescription: { fontSize: 10, lineHeight: 12.1 } satisfies TextStyle,
  footerPrice: { fontSize: 18, lineHeight: 25.2 } satisfies TextStyle,
  xxl: { fontSize: 36, lineHeight: 44 } satisfies TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } satisfies TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } satisfies TextStyle,
  md: { fontSize: 18, lineHeight: 26 } satisfies TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } satisfies TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } satisfies TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,
}

const $fontWeightStyles = Object.entries(typography.primary).reduce((acc, [weight, fontFamily]) => {
  return { ...acc, [weight]: { fontFamily } }
}, {}) as Record<Weights, TextStyle>

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  { color: colors.text },
]

const $presets = {
  default: $baseStyle,

  bold: [$baseStyle, $fontWeightStyles.bold] as StyleProp<TextStyle>,

  heading: [$baseStyle, $sizeStyles.xxl, $fontWeightStyles.bold] as StyleProp<TextStyle>,

  subheading: [$baseStyle, $sizeStyles.lg, $fontWeightStyles.medium] as StyleProp<TextStyle>,

  formLabel: [$baseStyle, $fontWeightStyles.medium] as StyleProp<TextStyle>,

  formHelper: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.normal] as StyleProp<TextStyle>,
  screenTitle: [
    $baseStyle,
    $sizeStyles.screenTitle,
    $fontWeightStyles.bold,
    {
      textAlign: "center",
      color: Colors.screenTitleText,
    },
  ] as StyleProp<TextStyle>,

  screenHeader: [
    $baseStyle,
    $sizeStyles.screenHeader,
    $fontWeightStyles.bold,
    {
      textAlign: "center",
      color: Colors.screenTitleText,
    },
  ] as StyleProp<TextStyle>,

  screenSubtitle: [
    $baseStyle,
    $sizeStyles.screenSubtitle,
    $fontWeightStyles.semiBold,
    {
      textAlign: "center",
      color: Colors.screenSubtitleText,
    },
  ] as StyleProp<TextStyle>,

  description: [
    $baseStyle,
    $sizeStyles.description,
    $fontWeightStyles.medium,
    {
      textAlign: "center",
      color: Colors.descriptionText,
      letterSpacing: 0.2,
    },
  ] as StyleProp<TextStyle>,

  rowTitle: [
    $baseStyle,
    $sizeStyles.rowTitle,
    $fontWeightStyles.bold,
    {
      color: Colors.rowTitleText,
    },
  ] as StyleProp<TextStyle>,

  rowDescription: [
    $baseStyle,
    $sizeStyles.rowDescription,
    $fontWeightStyles.normal,
    {
      color: Colors.rowDescriptionText,
    },
  ] as StyleProp<TextStyle>,

  modalTitle: [
    $baseStyle,
    $sizeStyles.screenTitle,
    $fontWeightStyles.bold,
    {
      textAlign: "center",
      color: Colors.modalTitleText,
    },
  ] as StyleProp<TextStyle>,

  ratingText: [
    $baseStyle,
    $sizeStyles.ratingText,
    $fontWeightStyles.normal,
    {
      color: Colors.ratingCountText,
    },
  ] as StyleProp<TextStyle>,

  primaryPill: [
    $baseStyle,
    $sizeStyles.primaryPill,
    $fontWeightStyles.medium,
    {
      color: Colors.buttonPrimaryText,
      backgroundColor: Colors.buttonPrimaryBackground,
      paddingVertical: 5,
      paddingHorizontal: 15,
      alignSelf: "flex-start",
      borderRadius: 15,
      overflow: "hidden",
    },
  ] as StyleProp<TextStyle>,

  blockSectionTitle: [
    $baseStyle,
    $sizeStyles.blockSectionTitle,
    $fontWeightStyles.semiBold,
    {
      textAlign: "center",
      color: Colors.blockSectionText,
    },
  ] as StyleProp<TextStyle>,

  blockSectionDescription: [
    $baseStyle,
    $sizeStyles.blockSectionDescription,
    $fontWeightStyles.normal,
    {
      textAlign: "center",
      color: Colors.blockSectionText,
    },
  ] as StyleProp<TextStyle>,

  subSectionTitle: [
    $baseStyle,
    $sizeStyles.subSectionTitle,
    $fontWeightStyles.bold,
    {
      textAlign: "left",
      color: Colors.subSectionTitle,
    },
  ] as StyleProp<TextStyle>,

  subSectionDescription: [
    $baseStyle,
    $sizeStyles.subSectionDescription,
    $fontWeightStyles.normal,
    {
      textAlign: "left",
      color: Colors.subSectionText,
    },
  ] as StyleProp<TextStyle>,

  aboutDescription: [
    $baseStyle,
    $sizeStyles.aboutDescription,
    $fontWeightStyles.normal,
    {
      textAlign: "left",
      color: Colors.aboutDescription,
    },
  ] as StyleProp<TextStyle>,

  headerCancelButton: [
    $baseStyle,
    $sizeStyles.headerCancelButton,
    $fontWeightStyles.semiBold,
    {
      color: Colors.headerCancelButtonText,
    },
  ] as StyleProp<TextStyle>,

  textInputField: [
    $baseStyle,
    $sizeStyles.textInputField,
    $fontWeightStyles.normal,
    {
      textAlign: "left",
      color: Colors.textInputFieldText,
      paddingHorizontal: 22.5,
      paddingTop: 16,
      paddingBottom: 13,
      backgroundColor: Colors.textInputFieldBackground,
      borderRadius: 23.5,
      overflow: "hidden",
    },
  ] as StyleProp<TextStyle>,

  footerDescription: [
    $baseStyle,
    $sizeStyles.footerDescription,
    $fontWeightStyles.normal,
    {
      textAlign: "left",
      color: Colors.footerDescriptionText,
    },
  ] as StyleProp<TextStyle>,

  footerPrice: [
    $baseStyle,
    $sizeStyles.footerPrice,
    $fontWeightStyles.bold,
    {
      textAlign: "left",
      color: Colors.screenSubtitleText,
    },
  ] as StyleProp<TextStyle>,
}

const $rtlStyle: TextStyle = isRTL ? { writingDirection: "rtl" } : {}
