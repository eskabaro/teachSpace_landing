import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import { routes } from '@shared/const/routes'
import MenuLink from './MenuLink'

export const MenuLinks: FC = () => {
    const t = useTranslations('Header')

    return (
        <>
            <MenuLink href={routes.problemsSolve} text={t('menuLinks.problemsSolve')} />
            <MenuLink href={routes.whyUs} text={t('menuLinks.whyUs')} />
            <MenuLink href={routes.howToCreate} text={t('menuLinks.howToCreate')} />
        </>
    )
}
