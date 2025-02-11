'use client'
import Link from 'next/link'
import type { FC } from 'react'
import classnames from '@shared/lib/classnames'
import Text from '@shared/ui/Typography'
import s from './MenuLinks.module.scss'

interface Props {
    // icon: IconsType
    text: string
    href: string
    onClick?: () => void
}

const MenuLink: FC<Props> = ({ href, text, onClick }) => {

    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }

    return (
        <Text as={Link} className={classnames(s.link, href)} href={href} color='neutral400' weight='500' lineHeight='120' type='button' onClick={handleClick}>
            {text}
        </Text>
    )
}

export default MenuLink
