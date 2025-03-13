import { useEffect, useState } from 'react'

export const useFetchHtml = (url: string) => {
    const [htmlContent, setHtmlContent] = useState('')

    useEffect(() => {
        fetch(url)
            .then((res) => res.text())
            .then((data) => setHtmlContent(data))
    }, [url])

    return { htmlContent }
}
