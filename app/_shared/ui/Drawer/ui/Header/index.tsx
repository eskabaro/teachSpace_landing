'use client'
import type { FC, PropsWithChildren } from 'react'
import Button from '@shared/ui/Button'
import Space from '@shared/ui/Space'
import { Title } from '@shared/ui/Typography'
import s from './DrawerHeader.module.scss'

interface Props extends PropsWithChildren<unknown> {
    close?: () => void
}

const DrawerHeader: FC<Props> = ({ children, close }) => {
    return (
        <Space direction='horizontal' className={s.main} gap='6' align='center' justify='between' xl={{ gap: 4 }}>
            <Title size='22' color='neutral900' weight='600' lineHeight='120' className='h100p grow'>
                {children}
            </Title>
            <Button onClick={close} variant='transparent' mode='icon' size='medium' icon='close-circle' />
        </Space>
    )
}

export default DrawerHeader
