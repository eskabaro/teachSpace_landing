import { useEffect } from 'react'
import type { StoreApi, UseBoundStore } from 'zustand'

export type FunctionKeysType<T> = {
    [K in keyof T]: T[K] extends (...args: [...any[]]) => any ? K : never
}[keyof T]

export type BooleanKeysType<T> = {
    [K in keyof T]: T[K] extends boolean ? K : never
}[keyof T]

export type ParametersWithoutAbortSignal<F> = F extends (...args: [...infer P, AbortSignal]) => any ? P : never

export const useFetcher = <StoreType, FetcherKey extends FunctionKeysType<StoreType>, LoadingKey extends BooleanKeysType<StoreType>>(
    store: UseBoundStore<StoreApi<StoreType>>,
    fetcherKey: FetcherKey,
    loadingKey: LoadingKey,
    vars: ParametersWithoutAbortSignal<StoreType[FetcherKey]>,
    cleanUp?: () => void
): boolean => {
    const fetcher = store((state) => state[fetcherKey]) as unknown as (...args: [...ParametersWithoutAbortSignal<StoreType[FetcherKey]>, AbortSignal]) => Promise<any>
    const isLoading = store((state) => state[loadingKey]) as boolean

    useEffect(() => {
        const abortController = new AbortController()

        fetcher(...vars, abortController.signal)

        return () => {
            abortController.abort()
            cleanUp?.()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetcher, ...vars])

    return isLoading
}
