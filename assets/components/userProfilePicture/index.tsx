import React from "react"

import { Image, StyleSheet, View } from "react-native"
//@ts-ignore
import Icon from "react-native-vector-icons/FontAwesome"

type UserProfilePictureProps = {
  profilePic?: string
}
const UserProfilePicture = ({ profilePic }: UserProfilePictureProps) => {
  const isDev = process.env.IS_DEV === "true"
  const API_URL = isDev ? process.env.BASE_URL_DEV : process.env.BASE_URL;
console.log("`${API_URL}/${profilePic}`",`${API_URL}/${profilePic}`);

  if (profilePic) {
    return (
      <Image
        source={{
          uri:`${API_URL}/${profilePic}`,
        }}
        style={styles.headerAvatar}
      />
    )
  }

  return <View style={styles.errorProfile}>
    <Icon name="user" size={40} color="#000" />
  </View>
}

const $size = {
  borderRadius: 24,
  height: 48,
  width: 48,
}

const styles = StyleSheet.create({
  headerAvatar: {
    borderColor: "#3C3836",
    ...$size,
      borderWidth: 1,
  },
  errorProfile: {
    height: 48,
    width: 48,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48 / 2
  }
})
export default UserProfilePicture
