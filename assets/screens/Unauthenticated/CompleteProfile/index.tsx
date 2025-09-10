// @ts-nocheck
import { useNavigation, useRoute } from "@react-navigation/native"
import { AutoImage, Text } from "app/components"
import { Screen } from "app/components/Screen"
import GreenButton from "app/components/greenButton"
import SelectGroup from "app/components/selectGroup"
import useRegisterUser from "app/hook/api/useRegisterUser"
import useUpdateUserProfile from "app/hook/api/useUpdateUserProfile"
import { translate } from "app/i18n"
import EphemeralStore from "app/manager/EphemeralStore"
import { useStores } from "app/models"
import { relativeWidth } from "app/utils/design"
import dayjs from "dayjs"
import * as ImagePicker from "expo-image-picker"
import React, { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import CountryPicker from "react-native-country-picker-modal"
import DateOfBirthField from "./formComponents/dateOfBirthField"
import FullNameField from "./formComponents/fullNameField"
import NationalityField from "./formComponents/nationalityField"
import PhoneNumberField from "./formComponents/phoneNumberField"
import DatePickerModal from "./modal/dateModal"
import moment from "moment"
import DatePicker from 'react-native-date-picker'
import FormInputController from "app/components/formInput"
import renderField from "app/components/formInput/renderField"
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    width: relativeWidth(384),
  },
  editProfilePic: {
    bottom: 0,
    height: 38,
    position: "absolute",
    right: 0,
    width: 38,
  },
  h1w1: {
    height: 1,
    width: 1,
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
})

type RouteParams = {
  email: string
  password: string
  isProfileUpdate?: boolean
}

type Gender = "Male" | "Female" | "NA"
const today = moment(new Date()).format("YYYY-MM-DD")
const EditPNG = require("app/images/profile/edit.png")
const ProfilePNG = require("app/images/profile/profile.png")

export default function CompleteProfile() {
  const isDev = process.env.IS_DEV === "true"
  const API_URL = isDev ? process.env.BASE_URL_DEV : process.env.BASE_URL
  const {
    authenticationStore: { user, profilePic, phone, countryCode: cCode },
  } = useStores()

  const maxDate = useMemo(() => {
    let maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear());
    let mdate = moment(maxDate).format('YYYY-MM-DD')
    return new Date(mdate);
  }, []);

  const [image, setImage] = useState<string | null>(null)
  const [gender, setGender] = useState<Gender>(user?.userProfile?.gender || "Male")
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)
  const [dateOfBirth, setDateOfBirth] = useState<string | Date | number>(maxDate)
  const [isImageChangeImage, setIsImageChangeImage] = useState(false)
  const [countryPickerVisible, setCountryPickerVisible] = useState(false)
  const [countryCode, setCountryCode] = useState(cCode || '+230')
  const [country, setCountry] = useState("Mauritius")
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation()
  const route = useRoute()

  const { email, password, isProfileUpdate = false } = route.params as RouteParams


  useEffect(() => {
    if (isProfileUpdate && user?.userProfile) {
      if (user?.userProfile?.dob) {
        let datee = moment(user?.userProfile?.dob).format('YYYY-MM-DD');
        user?.userProfile?.dob && setDateOfBirth(datee)
      }
      user?.userProfile?.gender && setGender(user.userProfile?.gender);
      user?.userProfile?.nationality && setCountry(user.userProfile?.nationality);
      profilePic && setImage(`${API_URL}/${profilePic}`);
    }
  }, [user])

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: "#ffffff",
      },
      headerBackTitleStyle: { paddingLeft: 20 },
      headerTintColor: '#000000', // Change text color
      headerTitle: isProfileUpdate ? translate("profile.headerTitleUpdate") : translate("profile.headerTitle"),
    })
  }, [navigation])

  const registerUserMtx = useRegisterUser()
  const updateUserProfileMtx = useUpdateUserProfile()



  const onPressSignUp = (data: any) => {
    const selectedlang = EphemeralStore.getData("language");

    // Parsing and checking the selected language
    let language = 'en'; // Default value
    if (selectedlang && selectedlang?._j) {
      const parsedLang = selectedlang?._j;
      language = parsedLang === "fr" ? "fr" : "en"; // If language is "fr", set it to "fr", otherwise default to "en"
    }

    // Preparing the profile data
    const profileData = {
      name: data.fullName,
      ...(isProfileUpdate ? {} : { email, password }),
      userProfile: {
        language: EphemeralStore.get("language"),
        nickname: data.fullName,
        dob: dateOfBirth,
        gender: gender,
        nationality: country,
      },
      image: isImageChangeImage ? image : null,
      phone: data.phoneNumber,
      country_code: countryCode
    };

    // Conditionally calling the appropriate function based on profile update status
    setIsLoading(true)
    if (!isProfileUpdate) {
      profileData.password = data.password
      registerUserMtx.mutate(profileData, {
        onSuccess: (data) => {
          setIsLoading(false)
        },
        onError: (error) => {
          setIsLoading(false)
        },
      })
    } else {
      updateUserProfileMtx.mutate(profileData, {
        onSuccess: (data) => {
          setIsLoading(false)
        },
        onError: (error) => {
          setIsLoading(false)
        },
      })
    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled && result.assets[0].uri) {
      setImage(result.assets[0].uri)
      setIsImageChangeImage(true)
    }
  }


  const {
    control,
    handleSubmit,
    setValue,  // Ensure setValue is destructured here
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user?.name || "",
      dob: dateOfBirth,
      gender: user?.userProfile?.gender || "Male",
      nationality: user?.userProfile?.nationality || "Mauritius",
      phoneNumber: phone || "",
      password: ""
    },
  })


  const toggleDatePicker = () => setIsDatePickerVisible((v) => !v)
  const toggleCountryPicker = () => setCountryPickerVisible((v) => !v)

  const handleConfirmDate = (date: string) => {
    setDateOfBirth(date)
    setIsDatePickerVisible(false)
  }

  const handleCountry = (country: any) => {
    setCountryPickerVisible(false)
    setCountry(country.name)
    setCountryCode("+" + country.callingCode)
  }

  const [toggle, setToggle] = useState(false)

  return [
    <Screen
      preset="auto"
      contentContainerStyle={styles.container}
      safeAreaEdges={["bottom"]}
      key="CompleteProfileScreen"
    >
      <DatePicker
        modal
        open={isDatePickerVisible}
        date={new Date(dateOfBirth)}
        mode={'date'}
        maximumDate={maxDate}
        onConfirm={(date) => {
          handleConfirmDate(moment(date).format('YYYY-MM-DD'))
        }}
        onCancel={toggleDatePicker}
      />
      <View style={styles.profilePicContainer}>
        {image ? (
          <AutoImage source={{ uri: image }} style={styles.profilePic} />
        ) : (
          <AutoImage source={ProfilePNG} style={styles.profilePic} />
        )}
        {EditPNG && (
          <TouchableOpacity onPress={pickImage}>
            <AutoImage
              source={require("app/images/profile/edit.png")}
              style={styles.editProfilePic}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.content}>
        <FullNameField control={control} errors={errors} />
        {errors.fullName && <Text style={{
          width: "80%",
          top: -20,
          justifyContent: 'center',
          color: "red",
          alignItems: "center",
          fontSize: 15, letterSpacing: 1
        }}>Name: {errors.fullName.message}</Text>}

        <PhoneNumberField control={control} errors={errors} disable={!isProfileUpdate} onPress={!isProfileUpdate ? toggleCountryPicker : null} type='phone' countryCode={countryCode} />
        {errors.phoneNumber && <Text style={{
          width: "80%",
          top: -20,
          justifyContent: 'center',
          color: "red",
          alignItems: "center",
          fontSize: 15, letterSpacing: 1
        }}>Phone: {errors.phoneNumber.message}</Text>}

        {!isProfileUpdate && <>
          <FormInputController
            control={control}
            rules={!isProfileUpdate
              ? {
                required: translate("formValidations.required"),
                minLength: {
                  value: 8,
                  message: translate("formValidations.minLengthPassword"),
                },
              }
              : {}}
            render={({ field }: { field: any }) =>
              renderField({
                field,
                placeholder: "Password",
                includeLeftImage: true,
                leftImageSource: require("app/images/register/lock.png"), // Use the correct left image
                keyboardType: "default", // Correct keyboardType for text
                securedText: !toggle, // Use the toggle state for secure text entry
                rightImageSource: !toggle
                  ? require("app/images/register/eye_close.png") // Icon for visible password
                  : require("app/images/register/eye_open.png"), // Icon for hidden password
                onRightIconPress: () => {
                  setToggle(!toggle)
                }
              })
            }
            name={"password"}
          />
          {errors.password && <Text style={{
            width: "80%",
            top: -20,
            justifyContent: 'center',
            color: "red",
            alignItems: "center",
            fontSize: 15, letterSpacing: 1
          }}>{errors.password.message}</Text>}
        </>}

        <View style={styles.mb}>
          <SelectGroup
            value={gender}
            onPress={(gender: string) => {
              setGender(gender as Gender)
            }}
            buttons={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
              { value: "NA", label: "NA" },
            ]}
          />
          {errors.gender && <Text style={{
            width: "80%",
            top: -20,
            justifyContent: 'center',
            color: "red",
            alignItems: "center",
            fontSize: 15, letterSpacing: 1
          }}>Gender: {errors.gender.message}</Text>}
        </View>


        <DateOfBirthField
          control={control}
          selectedDate={dateOfBirth ? moment(dateOfBirth).format('YYYY-MM-DD') : ''}
          onPress={toggleDatePicker}
        />
        {errors.dob && <Text style={{
          width: "80%",
          top: -20,
          justifyContent: 'center',
          color: "red",
          alignItems: "center",
          fontSize: 15, letterSpacing: 1
        }}>Date: {errors.dob.message}</Text>}

        <NationalityField control={control} onPress={!isProfileUpdate ? toggleCountryPicker : null} country={country} />
        {errors.nationality && <Text style={{
          width: "80%",
          top: -20,
          justifyContent: 'center',
          color: "red",
          alignItems: "center",
          fontSize: 15, letterSpacing: 1
        }}>Country: {errors.nationality.message}</Text>}
      </View>
      <GreenButton
        isLoading={isLoading}
        isSecondary
        onPress={handleSubmit(onPressSignUp)}
        buttonTitle={translate("common.continue", {
          defaultValue: "Sign up",
        })}
      />
    </Screen>,

    <View style={styles.h1w1} key={"countrypicker"}>
      <CountryPicker
        visible={countryPickerVisible}
        onSelect={handleCountry}
        withFilter={true}
        withCallingCode
        countryCode={"MU"}
      />
    </View>,
  ]
}
