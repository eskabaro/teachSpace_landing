import { useState } from 'react'

export const useMode = <T>(initialMode?: T) => {
    const [mode, setMode] = useState<T>(initialMode ?? ('' as T))
    const isPast = mode === 'past'

    return { mode, setMode, isPast }
}
