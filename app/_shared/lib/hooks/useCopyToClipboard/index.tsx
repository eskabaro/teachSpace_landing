import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Alert } from '@shared/state'

export const useCopyToClipboard = () => {
    const t = useTranslations('CopyToClipboard')
    const [isLoading, setIsLoading] = useState(false)

    const copyTextToClipboard = async (text: string) => {
        setIsLoading(true)
        navigator.clipboard
            .writeText(text)
            .then(() => Alert('success', t('success')))
            .catch((err) => Alert('error', err.message ?? t('error')))
            .finally(() => setIsLoading(false))
    }

    return {
        isLoading,
        copyTextToClipboard
    }
}
