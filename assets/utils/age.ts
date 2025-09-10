import { differenceInYears, parse } from "date-fns"

export const age = (dateString: string) => {
  const birthDate = parse(dateString, "MM/dd/yyyy", new Date())

  return differenceInYears(new Date(), birthDate)
}
