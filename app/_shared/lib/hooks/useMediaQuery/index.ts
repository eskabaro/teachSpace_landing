'use client'
import { useState, useEffect } from 'react'
import { BREAKPOINTS } from '@shared/const/breikpoints'

type MediaQuery = `(min-width: ${number}px)` | `(max-width: ${number}px)` | `(min-height: ${number}px)` | `(max-height: ${number}px)`

const useMediaQuery = (query: MediaQuery) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query)

        const handleChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches)
        }

        setMatches(mediaQueryList.matches)

        mediaQueryList.addEventListener('change', handleChange)

        return () => {
            mediaQueryList.removeEventListener('change', handleChange)
        }
    }, [query])

    return matches
}

export const useScreenXxl = () => useMediaQuery(`(max-width: ${BREAKPOINTS.xxl}px)`)
export const useScreenXl = () => useMediaQuery(`(max-width: ${BREAKPOINTS.xl}px)`)
export const useScreenLg = () => useMediaQuery(`(max-width: ${BREAKPOINTS.lg}px)`)
export const useScreenMd = () => useMediaQuery(`(max-width: ${BREAKPOINTS.md}px)`)
export const useScreenSm = () => useMediaQuery(`(max-width: ${BREAKPOINTS.sm}px)`)

export default useMediaQuery
