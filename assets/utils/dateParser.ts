import dayjs from "dayjs"

export const dateParser = (date: string, startTime: string) => {
  const parsedDate = dayjs(date)
  const year = parsedDate.year()
  const month = parsedDate.month()
  const day = parsedDate.day()
  // const combinedDate = dayjs(`${year}-${month + 1}-${day} ${startTime}`, "YYYY-M-D HH:mm")

  return dayjs(`${year}-${month + 1}-${day} ${startTime}`, "YYYY-M-D HH:mm")
}
