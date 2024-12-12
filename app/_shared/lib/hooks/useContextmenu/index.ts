import type { MutableRefObject } from 'react'
import { useEffect, useState } from 'react'

interface ContextmenuPropsType {
    callback: () => void
    ref: MutableRefObject<HTMLElement | null>
    outsideCallback?: () => void
}

export const useContextmenu = ({ callback, outsideCallback, ref }: ContextmenuPropsType) => {
    const [position, setPosition] = useState({ left: 0, top: 0 })

    useEffect(() => {
        let touchTimeout: NodeJS.Timeout

        const handleRightClick = (event: MouseEvent) => {
            if (ref.current && ref.current.contains(event.target as Node)) {
                event.preventDefault()
                setPosition({ left: event.clientX, top: event.clientY })
                callback()

                return
            }

            outsideCallback?.()
        }

        const handleTouchStart = (event: TouchEvent) => {
            if (ref.current && ref.current.contains(event.target as Node)) {
                touchTimeout = setTimeout(() => {
                    const touch = event.touches[0]

                    setPosition({ left: touch.clientX, top: touch.clientY })
                    callback()
                }, 600)

                return
            }

            outsideCallback?.()
        }

        const handleTouchEnd = () => {
            clearTimeout(touchTimeout)
        }

        document.addEventListener('contextmenu', handleRightClick)
        document.addEventListener('touchstart', handleTouchStart)
        document.addEventListener('touchend', handleTouchEnd)

        return () => {
            document.removeEventListener('contextmenu', handleRightClick)
            document.removeEventListener('touchstart', handleTouchStart)
            document.removeEventListener('touchend', handleTouchEnd)
        }
    }, [callback, outsideCallback, ref])

    return { ref, position }
}
