'use client'
import type { FC, ReactNode } from 'react'
import { type ColorsType } from '@shared/const/colors'
import classnames from '@shared/lib/classnames'
import Space from '../Space'
import s from './LineHorizontal.module.scss'

interface Props {
    children?: ReactNode
    color?: ColorsType
    className?: string
}

const LineHorizontal: FC<Props> = ({ children, color = 'neutral100', className }) => {
    const returnStyles = (lineClass: string) => classnames(lineClass, `background_${color}`, className)

    return children ? (
        <Space className={s.lineWithText} direction='horizontal' align='center' gap={3}>
            <div className={returnStyles(s.lineWithText_left)} />
            {children}
            <div className={returnStyles(s.lineWithText_right)} />
        </Space>
    ) : (
        <div className={returnStyles(s.lineDefault)} />
    )
}

export default LineHorizontal
