'use client'
import type { FC, PropsWithChildren } from 'react'
import s from './DrawerFooter.module.scss'

const DrawerFooter: FC<PropsWithChildren> = ({ children }) => {
    return <div className={s.main}>{children}</div>
}

export default DrawerFooter
