import FormInputController from "app/components/formInput"
import renderField from "app/components/formInput/renderField"
import { translate } from "app/i18n"
import { useStores } from "app/models"
import React from "react"

type FieldProps = {
  control: any
  errors: any
}

const FullNameField = ({ control, errors }: FieldProps) => {
  const {
    authenticationStore: { user },
  } = useStores()

  return (
    <FormInputController
      control={control}
      rules={{
        validate: (value: string) => {
          const trimmed = value.trim().replace(/\s{2,}/g, ' '); // Normalize spaces
      
          if (!trimmed) {
            return translate("formValidations.required"); // "Enter valid name"
          }
      
          if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
            return translate("formValidations.onlyletterspacenot"); // "Only letters and spaces allowed"
          }
          
          return true;
        } 
      }}
      render={({ field }:any) =>
        renderField({
          field: {
            ...field,
            onChange(value) {
              const normalizedValue = value.replace(/\s{2,}/g, ' ').replace(".", "");
              field.onChange(normalizedValue); // Pass normalized value to the field
            },
          },
          placeholder: "Full Name",
          includeLeftImage: false,
          securedText: false,
          defaultValue:  '',
        })
      }
      name={"fullName"}
    />
  )
}

export default FullNameField
