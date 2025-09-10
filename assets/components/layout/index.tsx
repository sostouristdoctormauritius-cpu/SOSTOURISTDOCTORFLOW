import React, { FC } from "react"
import { StyleSheet, View, ViewProps } from "react-native"

interface RowProps {
  align?: "center" | "flex-start" | "flex-end"
  justify?: "center" | "flex-start" | "flex-end" | "space-between"
  fullWidth?: boolean
  wrap?: "wrap" | "nowrap"
}

export const Row = ({ align, wrap, children, fullWidth, justify, style }: ViewProps & RowProps) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: align || "flex-start",
      flexDirection: "row",
      flexWrap: wrap || "nowrap",
      justifyContent: justify || "flex-start",
      width: fullWidth ? "100%" : undefined,
    },
  })

  return <View style={[styles.container, style]}>{children}</View>
}

interface MarginProps extends ViewProps {
  ml?: number
  mr?: number
  mt?: number
  mb?: number
}

export const Margin: FC<MarginProps> = ({ children, ml, mt, mr, mb }) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: mb || 0,
      marginLeft: ml || 0,
      marginRight: mr || 0,
      marginTop: mt || 0,
    },
  })

  return <View style={styles.container}>{children}</View>
}

interface PaddingProps extends ViewProps {
  pl?: number
  pr?: number
  pt?: number
  pb?: number
}

export const Padding: FC<PaddingProps> = ({ children, pl, pt, pr, pb }) => {
  const styles = StyleSheet.create({
    container: {
      paddingBottom: pb || 0,
      paddingLeft: pl || 0,
      paddingRight: pr || 0,
      paddingTop: pt || 0,
    },
  })

  return <View style={styles.container}>{children}</View>
}
