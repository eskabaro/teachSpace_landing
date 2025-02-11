import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import { routes } from '@shared/const/routes'
import MenuLink from './MenuLink'

export const MenuLinks: FC = () => {
    const t = useTranslations('Header')

    return (
        <>
            <MenuLink href={routes.whyUs} text={t('menuLinks.whyUs')} />
            <MenuLink href={routes.features} text={t('menuLinks.features')} />
            <MenuLink href={routes.pricing} text={t('menuLinks.pricing')} />
            <MenuLink href={routes.joinUs} text={t('menuLinks.joinUs')} />
        </>
    )
}
