import RoundedTextInput from "app/components/roundedTextInput"
import React from "react"

interface RenderFieldProps {
  field: {
    onChange: (value: string) => void
    onBlur: () => void
    value: string
  }
  includeLeftImage?: boolean
  securedText?: boolean
  defaultValue?: string
  onPhoneIconPress?:()=>void
  [key: string]: any
}

const renderField = ({
  field: { onChange, onBlur, value },
  includeLeftImage = true,
  securedText = true,
  defaultValue = "",
 
  ...rest
}: RenderFieldProps) => (
  <RoundedTextInput
    {...(includeLeftImage && { leftImageSource: require("app/images/register/lock.png") })}
    onBlur={onBlur}
    onChangeText={onChange}
    secureTextEntry={securedText}
    value={value || defaultValue}
    {...rest}
  />
)
export default renderField
