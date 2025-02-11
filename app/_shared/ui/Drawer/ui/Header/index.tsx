'use client'
import type { FC, PropsWithChildren } from 'react'
import Button from '@shared/ui/Button'
import Logo from '@shared/ui/Logo'
import Space from '@shared/ui/Space'
import s from './DrawerHeader.module.scss'

interface Props extends PropsWithChildren<unknown> {
    close?: () => void
}

const DrawerHeader: FC<Props> = ({ close }) => {
    return (
        <Space direction='horizontal' className={s.main} gap='6' align='center' justify='between' xl={{ gap: 4 }}>
            <Logo width={131} />
            <Button onClick={close} variant='transparent' mode='icon' size='medium' icon='close-circle' />
        </Space>
    )
}

export default DrawerHeader
