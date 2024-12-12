import { useEffect, useRef } from 'react'

interface OptionsType {
    min?: number
    max?: number
}

export const useAutosizeTextarea = (value: string | undefined, options?: OptionsType) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const { min = 21, max } = options ?? {}

    useEffect(() => {
        const textArea = textareaRef.current

        if (!textArea) return

        textArea.style.height = '0px'

        const scrollHeight = textArea.scrollHeight

        if (max) {
            textArea.style.height = `${Math.max(min, Math.min(scrollHeight, max))}px`
            textArea.style.overflowY = scrollHeight > max ? 'auto' : 'hidden'
        } else {
            textArea.style.height = `${Math.max(min, scrollHeight)}px`
            textArea.style.overflowY = 'hidden'
        }
    }, [textareaRef, value, min, max])

    return textareaRef
}
