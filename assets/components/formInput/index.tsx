import React from "react"
import { Controller } from "react-hook-form"

type FormInputProps = {
  control: any
  rules: any
  render: any
  name: string
}

const FormInputController = ({ control, rules, render, name }: FormInputProps) => {
  return <Controller control={control} rules={rules} render={render} name={name} />
}

export default FormInputController
