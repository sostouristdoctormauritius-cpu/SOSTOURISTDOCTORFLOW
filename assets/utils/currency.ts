export const currency = (value: number) => {
  const amount = (value / 100).toFixed(2)

  return `Rs ${amount}`
}
