import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Nunito } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { type ReactNode } from 'react'
import type { LocaleType } from '@shared/const/locales'
import getMessagesOnServerSide from '@shared/lib/getMessagesOnServerSide'
import type { GenerateMetadataType } from '@shared/lib/types/metadata'
import { TranslationProvider } from '@shared/providers'
import '@app/_styles/global.scss'
import IntercomProvider from '@shared/providers/IntercomProvider'

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const generateMetadata: GenerateMetadataType = ({ params }) => ({
    metadataBase: new URL(`https://tutory.pro/${params.locale}`),
    title: 'Tutory – Create teaching materials in minutes',
    description: 'Quickly create and customize PDF materials and online tests directly on Tutory. Easily edit and adapt content for your lessons!',
    keywords: 'Tutory, create teaching materials, PDF materials, online tests, lesson planning, tutors, teaching resources',
    openGraph: {
        title: 'Tutory – Create teaching materials in minutes',
        description: 'Quickly create and customize PDF materials and online tests directly on Tutory. Easily edit and adapt content for your lessons!',
        url: 'https://tutory.pro',
        siteName: 'Tutory',
        images: [
            {
                url: 'https://tutory.pro/opengraph-image.png',
                width: 1200,
                height: 628
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    authors: [
        {
            name: 'Tutory',
            url: 'https://tutory.pro'
        }
    ]
})

interface Props {
    children: ReactNode
    params: {
        locale: LocaleType
    }
}

const layout = async ({ children, params: { locale = 'en' } }: Props) => {
    const messages = await getMessagesOnServerSide(locale)

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <GoogleAnalytics gaId='G-WR4XD8CHSH' />
                <GoogleTagManager gtmId='GTM-K5GFLQJ4' />
            </head>
            <IntercomProvider />
            {/* <GoogleAnalyticsProvider /> */}
            <body className={nunito.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <TranslationProvider />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}

export default layout
