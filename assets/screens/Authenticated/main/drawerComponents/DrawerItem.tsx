import { AutoImage, ListItem, Text } from "app/components"
import { ChevronRightSVG } from "app/components/SVG"
import { typography } from "app/theme"
import React, { ReactElement } from "react"
import { StyleSheet, View } from "react-native"

const DrawerItem = ({
  onPress,
  leftIcon,
  itemText,
}: {
  onPress: () => void
  leftIcon: ReactElement
  itemText: string
}) => {
  return (
    <ListItem
      style={styles.listItemContainer}
      TextProps={{
        style: styles.textStyle,
      }}
      LeftComponent={leftIcon}
      onPress={onPress}
      text={itemText}
      RightComponent={
        <View style={styles.chevronContainer}>
          <AutoImage
            resizeMode="contain"
            style={styles.image}
            source={require("app/images/home/right_icon.png")}
          />
        </View>
      }
    />
  )
}

export default DrawerItem

const styles = StyleSheet.create({
  chevronContainer: {
    alignItems: "center",
    height: 48,
    justifyContent: "center",
  },
  listItemContainer: {
    height: 48,
    marginBottom: 16,
    alignItems: "center",
    paddingLeft: 12,
    width: "100%",
  },
  textStyle: {
    alignSelf: "center",
    fontFamily: typography.primary.bold,
    fontSize: 14,
    marginLeft: 12,
  },
  image: {
    height: 20, width: 20
  }
})
