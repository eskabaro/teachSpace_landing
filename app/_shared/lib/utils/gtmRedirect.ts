interface GTMEvent {
    event: string
    [key: string]: any
}

export const pushGTMEvent = (event: GTMEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', event.event, event)
    }
}

export const handleRedirectWithGTM = (url: string) => {
    const currentParams = new URLSearchParams(window.location.search)
    const targetUrl = new URL(url)

    currentParams.forEach((value, key) => {
        targetUrl.searchParams.append(key, value)
    })

    pushGTMEvent({
        event: 'conversion',
        // eslint-disable-next-line camelcase
        send_to: 'AW-11394995417/sVZLCKeIlJkaENmpx7kq',
        // eslint-disable-next-line camelcase
        event_callback: () => (window.location.href = targetUrl.toString()),
        value: 1.0,
        currency: 'USD'
    })
}
