import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react'
import { type IconsType } from '@shared/const/icons'
import classnames from '@shared/lib/classnames'
import Icon from '../Icon'
import Spinner from '../Spinner'
import s from './LinkButton.module.scss'

type ButtonElementType = 'a' | 'button' | 'div'
type AdditionalButtonPropsType<T extends ButtonElementType | ComponentType<any>> = T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : ComponentPropsWithoutRef<T>
type Props<T extends ButtonElementType | ComponentType<any>> = {
    as?: T
    icon?: IconsType
    children?: ReactNode
    loading?: boolean
    disabled?: boolean
    reverse?: boolean
    underline?: boolean
} & AdditionalButtonPropsType<T>

const LinkButton = <T extends ButtonElementType | ComponentType<any> = 'button'>({ as, children, disabled, loading, icon, reverse, underline = true, className, ...restProps }: Props<T>) => {
    const Component = as || 'button'

    return (
        <Component disabled={loading || disabled} className={classnames(s.main, reverse && 'reverse', underline && s.underline, className)} {...restProps}>
            {icon && !loading && <Icon name={icon} />}
            {loading && <Spinner />}
            <div className={s.main_content}>{children}</div>
        </Component>
    )
}

export default LinkButton
