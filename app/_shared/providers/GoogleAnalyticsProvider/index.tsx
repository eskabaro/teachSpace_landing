import Script from 'next/script'
import type { FC } from 'react'

const GoogleAnalyticsProvider: FC = () => {
    return (
        <>
            <Script id='google-gtag' async src='https://www.googletagmanager.com/gtag/js?id=G-WR4XD8CHSH' />
            <Script id='google-gtag-config'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-WR4XD8CHSH'); 
                `}
            </Script>
        </>
    )
}

export default GoogleAnalyticsProvider
