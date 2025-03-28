'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { type FC, useEffect } from 'react'

const IntercomProvider: FC = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    /* eslint-disable */
    useEffect(() => {
        ;(function () {
            var w = window as any
            var ic = w.Intercom
            if (typeof ic === 'function') {
                ic('reattach_activator')
                ic('update', w.intercomSettings)
            } else {
                var d = document
                var i: any = function () {
                    i.c(arguments)
                }
                i.q = []
                i.c = function (args: any) {
                    i.q.push(args)
                }
                w.Intercom = i
                var l = function () {
                    var s = d.createElement('script')
                    s.type = 'text/javascript'
                    s.async = true
                    s.src = 'https://widget.intercom.io/widget/ahkkhcqi'
                    var x = d.getElementsByTagName('script')[0]
                    x.parentNode?.insertBefore(s, x)
                }
                if (document.readyState === 'complete') {
                    l()
                } else if (w.attachEvent) {
                    w.attachEvent('onload', l)
                } else {
                    w.addEventListener('load', l, false)
                }
            }
        })()
    }, [])

    useEffect(() => {
        ;(window as any).Intercom('boot', {
            api_base: 'https://api-iam.intercom.io',
            app_id: 'ahkkhcqi'
        })
    }, [])
    /* eslint-enable */

    useEffect(() => {
        ;(window as any).Intercom('update')
    }, [pathname, searchParams])

    return null
}

export default IntercomProvider
