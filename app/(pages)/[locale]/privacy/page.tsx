'use client'
import { type FC, useEffect, useState } from 'react'

const page: FC = () => {
    const [htmlContent, setHtmlContent] = useState('')

    useEffect(() => {
        fetch('/privacy.html')
            .then((res) => res.text())
            .then((data) => setHtmlContent(data))
    }, [])

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
}

export default page
