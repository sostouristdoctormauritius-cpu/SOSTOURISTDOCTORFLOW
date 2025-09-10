import { DimensionValue, Dimensions } from "react-native"

const DESIGN_HEIGHT = 932
const DESIGN_WIDTH = 430

const SCREEN_HEIGHT = Dimensions.get("window").height
const SCREEN_WIDTH = Dimensions.get("window").width

export const relativeHeight = (height: number) => {
  return (height / DESIGN_HEIGHT) * 100 + "%"
}

export const relativeWidth = (width: number): DimensionValue => {
  const dimension = (width / DESIGN_WIDTH) * 100 + "%"
  return dimension as DimensionValue
}

export const relativeWidthToParent = (width: number) => {
  const ratio = width / DESIGN_WIDTH
  return ratio * SCREEN_WIDTH
}
export const relativeHeightToParent = (height: number) => {
  const ratio = height / DESIGN_HEIGHT
  return ratio * SCREEN_HEIGHT
}

export type FontWeightType =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
export const FontWeight: Record<string, FontWeightType> = {
  thin: "100",
  ultraLight: "200",
  light: "300",
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  heavy: "800", // extra bold
  black: "900",
}
