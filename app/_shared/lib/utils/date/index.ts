import { DAYS, MONTHS } from '@shared/const/dates'
import type { LocaleType } from '@shared/const/locales'

export const getWeekdayIndex = (day: number): number => (day + 6) % 7

export const formatDate = (date?: Date): string => {
    const newDate = date ? new Date(date) : new Date()

    const year = newDate.getFullYear()
    const month = `0${newDate.getMonth() + 1}`.slice(-2)
    const day = `0${newDate.getDate()}`.slice(-2)

    return `${year}-${month}-${day}`
}

export const formatToLocaleDate = (date: Date, locale: LocaleType, options: { dayThenMonth?: boolean } = {}): string => {
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const monthName = MONTHS[locale][month]

    return options.dayThenMonth ? `${day} ${monthName}, ${year}` : `${monthName} ${day}, ${year}`
}

export const formatToMonthYear = (date: Date, locale: LocaleType): string => {
    const month = date.getMonth()
    const year = date.getFullYear()

    return `${MONTHS[locale][month]}, ${year}`
}

export const formatToDayDate = (date: Date, locale: LocaleType = 'en'): string => {
    const day = getWeekdayIndex(date.getDay())
    const dateNumber = date.getDate()

    return `${Object.values(DAYS[locale])[day]} ${dateNumber}`
}

export const formatTime = (date: Date, withAMPM?: boolean): string => {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    if (withAMPM) return `${getAMPM(`${hours}:${minutes}`)}`

    return `${hours}:${minutes}`
}

export const formatTimeToDay = (time: string, date?: Date) => {
    const [hours, minutes] = time.split(':')
    const newDate = date ? new Date(date) : new Date()

    newDate.setHours(+hours)
    newDate.setMinutes(+minutes)

    return newDate
}

export const formatDayToStartDay = (date: Date): Date => {
    const newDate = new Date(date)

    newDate.setHours(0)
    newDate.setMinutes(0)

    return newDate
}

export const formatDayToEndDay = (date: Date): Date => {
    const newDate = new Date(date)

    newDate.setHours(23)
    newDate.setMinutes(59)

    return newDate
}

export const isToday = (date: Date) => {
    const now = new Date()

    return date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()
}

export const isSameDate = (date1: Date, date2: Date) => {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear()
}

export const isLastMinuteInDay = (date: Date): boolean => {
    return date.getHours() === 23 && date.getMinutes() === 59
}

export const getNextTwoHours = (date?: Date): Date => {
    const newDate = date ? new Date(date) : new Date()

    newDate.setHours(newDate.getHours() + 2)

    return newDate
}

export const getAMPM = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number)

    return hours < 12 ? `${time} AM` : `${time} PM`
}

export const getDayMonth = (date: Date) => {
    const day = date.getDate()
    const month = date.toLocaleString('en-US', { month: 'long' })

    return `${day} ${month}`
}

export const getDayWeek = (date: Date, locale: LocaleType): string => {
    const day = getWeekdayIndex(date.getDay())

    return Object.values(DAYS[locale])[day]
}

export const getPreviousDay = (date?: Date) => {
    const previosDay = date ? new Date(date) : new Date()

    previosDay.setDate(previosDay.getDate() - 1)

    return previosDay
}

export const getNextDay = (date?: Date) => {
    const nextDay = date ? new Date(date) : new Date()

    nextDay.setDate(nextDay.getDate() + 1)

    return nextDay
}
export const getPrevWeek = (date?: Date) => {
    const prevWeek = date ? new Date(date) : new Date()

    prevWeek.setDate(prevWeek.getDate() - 7)

    return prevWeek
}

export const getNextWeek = (date?: Date) => {
    const nextWeek = date ? new Date(date) : new Date()

    nextWeek.setDate(nextWeek.getDate() + 7)

    return nextWeek
}

export const getMonday = (date?: Date) => {
    const currentDate = date ? new Date(date) : new Date()
    const day = currentDate.getDay()
    const diff = day === 0 ? 6 : day - 1

    currentDate.setDate(currentDate.getDate() - diff)

    return currentDate
}

export const getSunday = (date?: Date) => {
    const currentDate = date ? new Date(date) : new Date()
    const day = currentDate.getDay()
    const diff = day === 0 ? 0 : 7 - day

    currentDate.setDate(currentDate.getDate() + diff)

    return currentDate
}

export const getWeekDays = (date?: Date): Date[] => {
    const givenDate = date ? new Date(date) : new Date()
    const dayOfWeek = givenDate.getDay()
    const mondayDate = new Date(givenDate)

    mondayDate.setDate(givenDate.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1))

    const daysArray: Date[] = []

    for (let i = 0; i < 7; i++) {
        const currentDay = new Date(mondayDate)

        currentDay.setDate(mondayDate.getDate() + i)
        daysArray.push(currentDay)
    }

    return daysArray
}

export const findEarliestDate = (dates: Array<Date>): Date | null => {
    let earliestDate = dates[0]

    dates.forEach((date) => {
        if (date < earliestDate) {
            earliestDate = date
        }
    })

    return earliestDate
}

export const findEarliestDateByHour = (dates: Array<Date>): Date | null => {
    let earliestDate = dates[0]

    dates.forEach((date) => {
        if (date.getHours() < earliestDate.getHours()) {
            earliestDate = date
        }
    })

    return earliestDate
}

export const formatDateToLocalISOString = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
}
