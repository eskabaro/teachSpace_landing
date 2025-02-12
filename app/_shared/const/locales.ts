export const locales = {
    en: 'English',
    ua: 'Українська'
} as const
export type LocaleType = keyof typeof locales

export const defaultLocale: LocaleType = 'en'
