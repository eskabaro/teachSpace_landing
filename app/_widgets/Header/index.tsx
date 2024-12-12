'use client'
import Link from 'next/link'
import type { FC } from 'react'
import { links } from '@shared/const/links'
import { useMenuContext } from '@shared/providers/MenuDrawerProvider'
import Button from '@shared/ui/Button'
import Flex from '@shared/ui/Flex'
import Logo from '@shared/ui/Logo'
import Space from '@shared/ui/Space'
import MenuLinks from '@entities/MenuLinks'
import s from './Header.module.scss'

const Header: FC = () => {
    const { setIsOpen } = useMenuContext()

    return (
        <Flex className={s.header} as='header' align='center' justify='between'>
            <Logo width={200} className={s.header_logo} />
            <Space className={s.header_menu} direction='horizontal'>
                <MenuLinks />
            </Space>
            <Button as={Link} href={links.contactUs} className={s.header_btn}>
                Contact us
            </Button>
            <Button className={s.header_burger} onClick={() => setIsOpen(true)} variant='transparent' mode='icon' icon='burger' />
        </Flex>
    )
}

export default Header
