import { useRoute } from "@react-navigation/native"

import React from "react"
import { Image, StyleSheet, View } from "react-native"

import { Text } from "app/components/Text"
import RatingStars from "app/components/consultation/RatingStars"
import HeaderBackButton from "app/components/headerBackButton"
import Colors from "app/constants/Colors"
import { useHeader } from "app/utils/useHeader"

type RouteParams = {
  profilePicture: string
  name: string
  specialisation: string
  rating: number
  ratingCount: number
  address: string
  workingHours: string
  bio: string
}

export default function DoctorProfileModalScreen() {
  const route = useRoute()
  const { profilePicture, name, specialisation, rating, ratingCount, address, workingHours, bio } =
    route.params as RouteParams

  useHeader({
    // title: translate("consultation.common.docProfile"),
    title: `About Dr. ${name}`,
    LeftActionComponent: <HeaderBackButton />,
  })

  return (
    <View style={styles.container}>
      <View style={styles.topHeaderSeparatorStyle} />
      {Boolean(profilePicture) && <Image style={styles.avatar} source={{ uri: profilePicture }} />}
      <Text style={styles.name} preset="screenTitle" text={name} />
      <Text style={styles.specialisation} preset="screenSubtitle" text={specialisation} />
      <View style={styles.ratingContainer}>
        <RatingStars rating={rating} totalCount={ratingCount} />
      </View>
      <View style={styles.addressContainer}>
        <Text preset="blockSectionTitle" tx="profile.address" />
        <Text style={styles.addressLabel} preset="blockSectionDescription" text={address} />
      </View>
      {Boolean(workingHours) && (
        <View style={styles.workingHoursContainer}>
          <Text preset="subSectionTitle" tx="profile.workingHours" />
          <Text
            style={styles.workingHoursLabel}
            preset="subSectionDescription"
            text={workingHours}
          />
        </View>
      )}
      <Text style={styles.aboutTitle} preset="primaryPill" tx="profile.about" />
      {Boolean(bio) && (
        <View style={styles.bioContainer}>
          <Text preset="aboutDescription" text={bio} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  aboutTitle: {
    marginTop: 18,
  },
  addressContainer: {
    alignItems: "center",
    backgroundColor: Colors.blockSectionBackground,
    borderRadius: 20,
    marginTop: 6.7,
    paddingBottom: 17,
    paddingHorizontal: 17,
    paddingTop: 15,
    width: "100%",
  },
  addressLabel: {
    marginTop: 9,
  },
  avatar: {
    borderRadius: 70,
    height: 140,
    marginTop: 32,
    width: 140,
  },
  bioContainer: {
    backgroundColor: Colors.aboutContainerBackground,
    borderRadius: 20,
    marginTop: 18,
    paddingBottom: 41,
    paddingHorizontal: 17,
    paddingTop: 17,
    width: "100%",
  },
  container: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 29,
  },
  name: {
    marginTop: 28,
  },
  ratingContainer: {
    marginTop: 22.1,
  },
  specialisation: {},
  topHeaderSeparatorStyle: {
    backgroundColor: Colors.modalHeaderSwipeIndicator,
    borderRadius: 8,
    height: 4,
    marginTop: 16,
    opacity: 0.7,
    width: 64,
  },
  workingHoursContainer: {
    alignSelf: "flex-start",
    marginTop: 10,
    paddingBottom: 21,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  workingHoursLabel: {
    marginTop: 9,
  },
})
