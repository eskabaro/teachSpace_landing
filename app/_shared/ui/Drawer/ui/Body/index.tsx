'use client'
import type { FC, PropsWithChildren } from 'react'
import classnames from '@shared/lib/classnames'
import s from './DrawerBody.module.scss'

interface Props extends PropsWithChildren {
    className?: string
}

const DrawerBody: FC<Props> = ({ children, className }) => {
    return <div className={classnames(s.main, className)}>{children}</div>
}

export default DrawerBody
