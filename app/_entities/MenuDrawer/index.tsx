'use client'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import { links } from '@shared/const/links'
import { routes } from '@shared/const/routes'
import { handleRedirectWithGTM } from '@shared/lib/utils/gtmRedirect'
import { useMenuContext } from '@shared/providers/MenuDrawerProvider'
import Drawer from '@shared/ui/Drawer'
import MenuLink from '@shared/ui/MenuLink'
import Space from '@shared/ui/Space'
import s from './MenuDrawer.module.scss'

const MenuDrawer: FC = () => {
    const t = useTranslations('MenuDrawer')
    const { isOpen, setIsOpen } = useMenuContext()

    return (
        <Drawer isOpen={isOpen} close={() => setIsOpen(false)}>
            <Drawer.Header close={() => setIsOpen(false)} />
            <Drawer.Body>
                <Space w='100p' direction='vertical' gap='2'>
                    <div className={s.divider} />
                    <Space className={s.menu_drawer_body} direction='vertical' gap='2'>
                        <MenuLink onClick={() => setIsOpen(false)} text={t('problemsSolve')} href={routes.problemsSolve} />
                        <MenuLink onClick={() => setIsOpen(false)} text={t('whyUs')} href={routes.whyUs} />
                        <MenuLink onClick={() => setIsOpen(false)} text={t('howToCreate')} href={routes.howToCreate} />
                        <MenuLink text={t('telegram')} href={links.contactUs} />
                        <MenuLink text={t('whatsApp')} href={links.whatsApp} />
                        <MenuLink text={t('bookCall')} href={links.bookCall} />
                        <MenuLink href='#' text={t('signUp')} onClick={() => handleRedirectWithGTM(links.register)} />
                    </Space>
                </Space>
            </Drawer.Body>
        </Drawer>
    )
}

export default MenuDrawer
