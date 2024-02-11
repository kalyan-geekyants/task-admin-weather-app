export const formattedDate = (unixTimestamp: number) => {
  // Convert Unix timestamp to milliseconds
  const date = new Date(unixTimestamp * 1000)

  // Get day, month, and year
  let day: any = date.getDate()
  let month: any = date.getMonth() + 1 // Months are zero based, so we add 1
  const year = date.getFullYear()

  // Format day and month to have leading zeroes if necessary
  day = day < 10 ? '0' + day : day
  month = month < 10 ? '0' + month : month

  // Formatted date in dd/mm/yyyy format
  return day + '/' + month + '/' + year
}

export const convertForcastDataToDaily = (forecastData: any) => {
  const dailyForecastData = {}
  forecastData.map((data: any) => {
    const date = formattedDate(data.dt)
    if (dailyForecastData[date]) {
      dailyForecastData[date].push(data)
    } else {
      dailyForecastData[date] = [data]
    }
  })
  return dailyForecastData
}

export const getTime = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000)

  // Get hours, minutes, and seconds
  let hours: any = date.getHours()
  let minutes: any = date.getMinutes()

  // Convert hours to 12-hour format
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ?? 12 // Handle midnight (0 hours) as 12 AM

  // Format minutes and seconds to have leading zeroes if necessary
  minutes = minutes < 10 ? '0' + minutes : minutes

  // Formatted time in AM/PM format
  return hours + ':' + minutes + ' ' + ampm
}

export const convertToDayAndTime = (timestamp: number) => {
  // Convert to milliseconds by multiplying by 1000
  const date = new Date(timestamp * 1000)

  // Get day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayOfWeek = daysOfWeek[date.getDay()]

  // Get hours and minutes
  let hours: any = date.getHours()
  let minutes = date.getMinutes()

  // Convert hours to 12-hour format and determine am/pm
  const ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours ?? 12 // handle midnight (0 hours)

  // Add leading zero to minutes if necessary
  // @ts-ignore
  minutes = minutes < 10 ? '0' + minutes : minutes

  // Formatted date string
  return dayOfWeek + ', ' + hours + ':' + minutes + ' ' + ampm
}

export const toCamelCase = (str: string) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const convertCelciusToFahrenheit = (celcius: number) => {
  return ((celcius * 9) / 5 + 32).toFixed(2)
}
