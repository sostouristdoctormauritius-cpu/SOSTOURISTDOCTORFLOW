import FormInputController from "app/components/formInput"
import renderField from "app/components/formInput/renderField"
import { translate } from "app/i18n"
import React from "react"
import { StyleSheet, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

type FieldProps = {
  control: any
  onPress: any
  country: string
}

const NationalityField = ({ control, country, onPress }: FieldProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <View
        pointerEvents={"none"}
        style={styles.fieldContainer}
      >
        <FormInputController
          control={control}
          rules={{
            required: translate("formValidations.required"),
          }}
          render={({ field }:any) =>
            renderField({
              field,
              placeholder: "Nationality",
              includeLeftImage: false,
              securedText: false,
              value: country ?? "",
              editable: false,
            })
          }
          name={"nationality"}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: "100%",
    marginBottom: 20,
  },
  fieldContainer: {
    width: "100%",
  },
})

export default NationalityField
