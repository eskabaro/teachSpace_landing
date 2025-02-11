'use client'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import { links } from '@shared/const/links'
import { handleRedirectWithGTM } from '@shared/lib/utils/gtmRedirect'
import { useMenuContext } from '@shared/providers/MenuDrawerProvider'
import Button from '@shared/ui/Button'
import Flex from '@shared/ui/Flex'
import Logo from '@shared/ui/Logo'
import Space from '@shared/ui/Space'
import MenuLinks from '@entities/MenuLinks'
import s from './Header.module.scss'

const Header: FC = () => {
    const t = useTranslations('Header')
    const { setIsOpen } = useMenuContext()

    return (
        <Flex className={s.header} as='header' align='center' justify='between'>
            <Logo width={131} className={s.header_logo} />
            <Space className={s.header_menu} direction='horizontal'>
                <MenuLinks />
            </Space>
            <Button onClick={() => handleRedirectWithGTM(links.register)} className={s.header_btn}>
                {t('signUp')}
            </Button>
            <Button className={s.header_burger} onClick={() => setIsOpen(true)} variant='transparent' mode='icon' icon='burger' />
        </Flex>
    )
}

export default Header
