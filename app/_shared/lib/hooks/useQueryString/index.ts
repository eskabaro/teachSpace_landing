import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export const useQueryString = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())

            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const setQueryString = useCallback(
        (key: string, value: string) => {
            router.push(pathname + '?' + createQueryString(key, value))
        },
        [router, pathname, createQueryString]
    )

    const deleteQueryString = useCallback(
        (key: string) => {
            router.push(pathname + '?' + createQueryString(key, ''))
        },
        [router, pathname, createQueryString]
    )

    return { createQueryString, setQueryString, deleteQueryString }
}
