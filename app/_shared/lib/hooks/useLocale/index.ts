import { useLocale as useNextLocale } from 'next-intl'
import type { LocaleType } from '@shared/const/locales'

export const useLocale = () => useNextLocale() as LocaleType
