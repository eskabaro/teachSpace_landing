'use client'
import type { FC } from 'react'
import { useFetchHtml } from '@shared/lib/hooks'

const page: FC = () => {
    const { htmlContent } = useFetchHtml('/privacy.html')

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
}

export default page
