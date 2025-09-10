import { useNavigation } from "@react-navigation/native"
import { AutoImage, Text } from "app/components"
import UserProfilePicture from "app/components/userProfilePicture"
import Colors from "app/constants/Colors"
import { SCREENS_COMPLETE_PROFILE } from "app/constants/Screens"
import { translate } from "app/i18n"
import { useStores } from "app/models"
import { colors, typography } from "app/theme"
import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"

const DrawerTop = ({ onPressItem }: { onPressItem: () => void }) => {
  const { authenticationStore: { profilePic, user } } = useStores()
  const navigation = useNavigation()

  const onViewProfile = () => {
    onPressItem()
    // @ts-ignore
    navigation.navigate(SCREENS_COMPLETE_PROFILE, {
      email: user?.email,
      // @ts-ignore
      password: user?.password ?? "",
      isProfileUpdate: true,
    })
  }

  return (
    <View style={styles.container}>
      <UserProfilePicture profilePic={profilePic} />
      <View style={styles.textContainer}>
        <Text text={user?.name} style={styles.name} />
        <TouchableOpacity onPress={onViewProfile}>
          <Text text={translate("homeScreen.drawer.viewProfile")} style={styles.viewProfileText} />
        </TouchableOpacity>
      </View>
      <AutoImage
        resizeMode="contain"
        style={styles.image}
        source={require("app/images/home/right_icon.png")}
      />
    </View>
  )
}

export default DrawerTop

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomColor: colors.buttonGreyBackground,
    borderBottomWidth: 1.5,
    flexDirection: "row",
    // justifyContent: "space-between",
    marginBottom: 40,
    paddingLeft: 12,
    width: "100%",
    paddingBottom:15
  },
  name: {
    color: Colors.calendarTextDayDefault,
    fontFamily: typography.primary.bold,
    fontSize: 24,
    width: 190,
  },
  textContainer: {
    marginTop: 8,
    marginLeft:12
  },
  viewProfileText: {
    color: Colors.drawerEditProfile,
    fontFamily: typography.primary.bold,
  },
  image: {
    height: 20, width: 20
  }
})
