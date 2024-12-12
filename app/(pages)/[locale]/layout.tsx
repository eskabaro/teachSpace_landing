import { Nunito } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { type ReactNode } from 'react'
import type { LocaleType } from '@shared/const/locales'
import getMessagesOnServerSide from '@shared/lib/getMessagesOnServerSide'
import type { GenerateMetadataType } from '@shared/lib/types/metadata'
import { TranslationProvider } from '@shared/providers'
import '@app/_styles/global.scss'

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const generateMetadata: GenerateMetadataType = ({ params }) => ({
    metadataBase: new URL(`https://teach-space.co/${params.locale}`),
    title: 'TeachSpace - Платформа для професійних репетиторів',
    description: 'Ми створюємо рішення, яке підвищить вашу продуктивність та допоможе вам викладати на професійному рівні',
    keywords: 'TeachSpace, репетиторство, онлайн-репетиторство, платформа для репетиторів, платформа для вчителів, платформа для викладачів',
    openGraph: {
        title: 'TeachSpace - Платформа для професійних репетиторів',
        description: 'Ми створюємо рішення, яке підвищить вашу продуктивність та допоможе вам викладати на професійному рівні',
        url: 'https://teach-space.co',
        siteName: 'TeachSpace - Платформа для професійних репетиторів',
        images: [
            {
                url: 'https://teach-space.co/opengraph-image.png',
                width: 800,
                height: 600
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    authors: [
        {
            name: 'WebXwiz Team',
            url: 'https://webxwiz.com'
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
