import I18n from "i18n-js"

// Note the syntax of these imports from the date-fns library.
// If you import with the syntax: import { format } from "date-fns" the ENTIRE library
// will be included in your production bundle (even if you only use one function).
// This is because react-native does not support tree-shaking.
import format from "date-fns/format"
import dayjs from "dayjs"

type Options = Parameters<typeof format>[2]

export const formatDate = (date: string, dateFormat?: string, options?: Options) => {
  const locale = I18n.currentLocale().split("-")[0]
  return dayjs(date)
    .locale(locale)
    .format(dateFormat ?? "MMM DD, YYYY")
}
