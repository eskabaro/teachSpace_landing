'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import { links } from '@shared/const/links'
import { routes } from '@shared/const/routes'
import { handleRedirectWithGTM } from '@shared/lib/utils/gtmRedirect'
import { useMenuContext } from '@shared/providers/MenuDrawerProvider'
import Button from '@shared/ui/Button'
import Drawer from '@shared/ui/Drawer'
import Space from '@shared/ui/Space'

const MenuDrawer: FC = () => {
    const t = useTranslations('MenuDrawer')
    const { isOpen, setIsOpen } = useMenuContext()

    return (
        <Drawer isOpen={isOpen} close={() => setIsOpen(false)}>
            <Drawer.Header close={() => setIsOpen(false)} />
            <Drawer.Body>
                <Space direction='vertical' gap='6'>
                    <Button as={Link} href={routes.whyUs} leftIcon='arrow-left' variant='transparent'>
                        {t('whyUs')}
                    </Button>
                    <Button as={Link} href={routes.features} leftIcon='arrow-left' variant='transparent'>
                        {t('features')}
                    </Button>
                    <Button as={Link} href={routes.pricing} leftIcon='arrow-left' variant='transparent'>
                        {t('pricing')}
                    </Button>
                    <Button as={Link} href={routes.joinUs} leftIcon='arrow-left' variant='transparent'>
                        {t('joinUs')}
                    </Button>
                    <Button as={Link} href={links.contactUs} leftIcon='arrow-left' variant='transparent'>
                        {t('telegram')}
                    </Button>
                    <Button as={Link} href={links.whatsApp} leftIcon='arrow-left' variant='transparent'>
                        {t('whatsApp')}
                    </Button>
                    <Button as={Link} href={links.bookCall} leftIcon='arrow-left' variant='transparent'>
                        {t('bookCall')}
                    </Button>
                    <Button onClick={() => handleRedirectWithGTM(links.register)} leftIcon='arrow-left' variant='transparent'>
                        {t('signUp')}
                    </Button>
                </Space>
            </Drawer.Body>
        </Drawer>
    )
}

export default MenuDrawer
