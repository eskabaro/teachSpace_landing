import type { FC } from 'react'
import { routes } from '@shared/const/routes'
import MenuLink from './MenuLink'

export const MenuLinks: FC = () => {
    return (
        <>
            <MenuLink href={routes.problemsSolve} text={'Problems solve'} />
            <MenuLink href={routes.whyUs} text={'Why us'} />
            <MenuLink href={routes.features} text={'Features'} />
            {/* <MenuLink href={routes.problemsSolve} text={'How to use'} /> */}
            <MenuLink href={routes.joinUs} text={'Join us'} />
        </>
    )
}
