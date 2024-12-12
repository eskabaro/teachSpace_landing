import type { Metadata } from 'next'
import type { LocaleType } from '@shared/const/locales'

export type GenerateMetadataType = (data: { params: { locale: LocaleType } }) => Metadata | Promise<Metadata>
