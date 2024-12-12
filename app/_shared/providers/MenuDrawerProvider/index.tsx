import { createContext, type Dispatch, type FC, type PropsWithChildren, type SetStateAction, useContext, useMemo, useState } from 'react'

interface ContextType {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const MenuContext = createContext<ContextType>({
    isOpen: false,
    setIsOpen: () => {}
})

export const useMenuContext = () => useContext(MenuContext)

export const MenuDrawerProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const contextValue: ContextType = useMemo(
        () => ({
            isOpen,
            setIsOpen
        }),
        [isOpen]
    )

    return <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
}
