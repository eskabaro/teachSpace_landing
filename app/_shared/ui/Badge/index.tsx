'use client'
import type { FC } from 'react'
import type { ColorsType } from '@shared/const/colors'
import type { IconsType } from '@shared/const/icons'
import classnames from '@shared/lib/classnames'
import Icon from '../Icon'
import Text from '../Typography'
import s from './Badge.module.scss'

export interface BadgeProps {
    text: string
    icon: IconsType
    variant?: 'primary' | 'secondary' | 'blue'
}

const color = {
    primary: 'primary500',
    secondary: 'neutral700',
    blue: 'white'
}

const Badge: FC<BadgeProps> = ({ text, icon, variant = 'primary' }) => (
    <div className={classnames(s.badge, s[variant])}>
        <div className={s.badge_icon}>
            <Icon name={icon} color={color[variant] as ColorsType} />
        </div>
        <Text weight='500' color={color[variant] as ColorsType}>
            {text}
        </Text>
    </div>
)

export default Badge
