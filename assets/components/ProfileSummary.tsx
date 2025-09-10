import { Text } from "app/components/Text"
import { colors, typography } from "app/theme"
import { age } from "app/utils/age"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { Image, ImageStyle, StyleProp, TextStyle, View, ViewStyle } from "react-native"

export interface ProfileSummaryProps {
  profile: any
  style?: StyleProp<ViewStyle>
}

export const ProfileSummary = observer(function ProfileSummary(props: ProfileSummaryProps) {
  const { profile, style } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <View style={avatarContainer}>
        <View style={statusIndicator} />
        <Image source={{ uri: profile.profile_photo_path }} style={avatar} />
      </View>
      <View>
        <Text
          text={profile.name}
          style={{
            fontSize: 16,
            fontFamily: typography.primary.bold,
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginRight: 12 }}>
            <Text text="Gender: " style={$text} />
            <Text
              text={`${profile.profile.gender}`}
              style={[
                $text,
                {
                  fontFamily: typography.primary.normal,
                },
              ]}
            />
          </Text>
          <Text>
            <Text text="Age: " style={$text} />
            <Text
              text={`${age(profile.profile.date_of_birth)}`}
              style={[
                $text,
                {
                  fontFamily: typography.primary.normal,
                },
              ]}
            />
          </Text>
        </View>
        <Text>
          <Text text="Spoken Language: " style={$text} />
          <Text
            text={`${profile.profile.device_language}`}
            style={[
              $text,
              {
                fontFamily: typography.primary.normal,
              },
            ]}
          />
        </Text>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flexDirection: "row",
  borderBottomWidth: 1,
  borderBottomColor: colors.buttonGreyBackground,
  height: 120,
  paddingVertical: 16,
}
const statusIndicator: ViewStyle = {
  backgroundColor: "#2FB645",
  borderRadius: 7,
  bottom: 12,
  height: 14,
  position: "absolute",
  right: 0,
  width: 14,
  zIndex: 1,
}

const $text: TextStyle = {
  fontFamily: typography.primary.bold,
  fontSize: 12,
  color: colors.descriptionText,
}

const avatarContainer: ViewStyle = {
  height: 80,
  width: 80,
  borderRadius: 40,
  marginRight: 20,
}

const avatar: ImageStyle = {
  height: 80,
  width: 80,
  borderRadius: 40,
}
