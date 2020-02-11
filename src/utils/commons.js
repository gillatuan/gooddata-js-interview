import moment from "moment"

const rangeDaysInMonth = (year, getMonth) => {
  const month = (getMonth < 10 && `0${getMonth}`) || getMonth
  const amountDays = moment(`${year}-${month}`, "YYYY-MM").daysInMonth()
  const from = `${year}-${month}-01`
  const to = `${year}-${month}-${amountDays}`

  return {
    from,
    to
  }
}


export {
  rangeDaysInMonth
}