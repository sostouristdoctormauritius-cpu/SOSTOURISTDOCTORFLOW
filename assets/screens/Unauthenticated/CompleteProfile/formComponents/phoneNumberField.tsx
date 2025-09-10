import FormInputController from "app/components/formInput"
import renderField from "app/components/formInput/renderField"
import { translate } from "app/i18n"
import { useStores } from "app/models"
import React from "react"
import { View } from "react-native"
type FieldProps = {
  control: any
  errors: any
  countryCode:string
  onPress: any
  disable?:boolean
}

const PhoneNumberField = ({ control, errors,onPress,countryCode ,disable=true}: FieldProps) => {
  const {
    authenticationStore: { user },
  } = useStores()

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <FormInputController
        control={control}
        rules={{
          required: translate("formValidations.required"), // Error message when field is empty
          pattern: {
            value: /^[0-9]{8,16}$/, // Regex to allow only digits between 8 and 16 characters
            message: translate("formValidations.invalidPhoneNumber"), // Message for invalid input
          },
          validate: (value:any) => {
            if (!/^[0-9]+$/.test(value)) {
              //@ts-ignore
              return translate("formValidations.onlyNumbersAllowed"); // Error for non-numeric values
            }
            if (value.length < 8) {
              //@ts-ignore
              return translate("formValidations.phoneTooShort"); // Error for less than 8 digits
            }
            if (value.length > 16) {
              //@ts-ignore
              return translate("formValidations.phoneTooLong"); // Error for more than 16 digits
            }
            return true; // Valid input
          },
        }}
        render={({ field }:any) =>
          renderField({
            field,
            placeholder: "Phone Number",
            includeLeftImage: false,
            securedText: false,
            type:'phone',
            keyboardType: "phone-pad",
            defaultValue: '',
            onPhoneIconPress:onPress,
            countryCode:countryCode,
            editable: disable,
          })
        }
        name={"phoneNumber"}
      />
    </View>

  )
}

export default PhoneNumberField
