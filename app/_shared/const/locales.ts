export const locales = {
    en: 'English'
} as const
export type LocaleType = keyof typeof locales

export const defaultLocale: LocaleType = 'en'
