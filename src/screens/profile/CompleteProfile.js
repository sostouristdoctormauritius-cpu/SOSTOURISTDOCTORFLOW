import React from "react"
import { Image, StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native"
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  content: {
    alignItems: "center",
    width: "100%",
  },
  editProfilePic: {
    bottom: 0,
    height: 38,
    position: "absolute",
    right: 0,
    width: 38,
  },
  mb: {
    marginBottom: 10,
  },
  profilePic: {
    borderRadius: 76,
    height: "100%",
    width: "100%",
  },
  profilePicContainer: {
    height: 110,
    marginVertical: 25,
    width: 110,
  },
  // Styles for form fields
  textInputContainer: {
    width: "80%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
  },
  greenButton: {
    backgroundColor: "lightgreen",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  selectGroupContainer: {
    width: "80%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
})

export default function CompleteProfile() {
  const isProfileUpdate = false // Static for visual recreation
  const navigation = useNavigation()

  return (
    <View
      style={styles.container}
    >
      <View style={styles.profilePicContainer}>
        <Image source={require("../../assets/images/profile.png")} style={styles.profilePic} />
        <TouchableOpacity disabled={true} onPress={() => { /* No action */ }}>
          <Image
            source={require("../../assets/images/edit.png")}
            style={styles.editProfilePic}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {/* FullNameField */}
        <View style={styles.textInputContainer}>
          <TextInput placeholder="Full Name" style={styles.textInput} />
        </View>

        {/* PhoneNumberField */}
        <View style={styles.textInputContainer}>
          <TextInput placeholder="Phone Number" style={styles.textInput} keyboardType="phone-pad" />
        </View>

        {/* Password Field (conditionally rendered) */}
        {!isProfileUpdate && (
          <View style={styles.textInputContainer}>
            <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={true} />
          </View>
        )}

        <TouchableOpacity
          style={styles.greenButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}