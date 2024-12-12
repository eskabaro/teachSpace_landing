import type { ComponentPropsWithoutRef, ComponentType, MouseEventHandler, ReactNode } from 'react'
import type { ColorsType } from '@shared/const/colors'
import { type IconsType } from '@shared/const/icons'
import classnames from '@shared/lib/classnames'
import Icon from '../Icon'
import s from './Button.module.scss'

export type ButtonElementType = 'a' | 'button' | 'div' | ComponentType<any>
export type ButtonSizesType = 'large' | 'medium' | 'small'
export type ButtonVariantsType = 'primary' | 'secondary' | 'transparent' | 'border'
export type AdditionalButtonPropsType<T extends ButtonElementType> = T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : ComponentPropsWithoutRef<T>
export type ButtonPropsType<T extends ButtonElementType> = {
    as?: T
    size?: ButtonSizesType
    variant?: ButtonVariantsType
    icon?: IconsType
    leftIcon?: IconsType
    iconColor?: ColorsType
    children?: ReactNode
    full?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    reverse?: boolean
    mode?: 'icon'
} & AdditionalButtonPropsType<T>

export const buttonSizes: Record<ButtonSizesType, string> = {
    large: s.large,
    medium: s.medium,
    small: s.small
}

export const buttonVariants: Record<ButtonVariantsType, string> = {
    primary: s.primary,
    secondary: s.secondary,
    transparent: s.transparent,
    border: s.border
}

const Button = <T extends ButtonElementType = 'button'>({ as, size = 'large', variant = 'primary', children, iconColor, full, disabled, onClick, icon, leftIcon, reverse, className, mode, ...restProps }: ButtonPropsType<T>) => {
    const Component = as || 'button'

    return (
        <Component onClick={onClick} disabled={disabled} className={classnames(s.main, buttonSizes[size], buttonVariants[variant], mode && s[`mode-${mode}`], full && s.full, reverse && 'reverse', className)} {...restProps}>
            {leftIcon && <Icon name={leftIcon} color={iconColor} />}
            {children}
            {icon && <Icon name={icon} />}
        </Component>
    )
}

export default Button
