import type { KeyboardEventHandler, MouseEvent, ReactNode } from 'react'
import classnames from '@shared/lib/classnames'
import Icon from '../Icon'
import Spinner from '../Spinner'
import s from './Checkbox.module.scss'

type CheckboxElementType = 'button' | 'div'
export interface CheckboxPropsType {
    as?: CheckboxElementType
    variant?: 'success' | 'primary'
    checked?: boolean
    onChange?: (checked: boolean, event: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void
    onKeyUp?: KeyboardEventHandler<HTMLButtonElement | HTMLDivElement>
    onKeyDown?: KeyboardEventHandler<HTMLButtonElement | HTMLDivElement>
    text?: ReactNode
    className?: string
    circleClassName?: string
    disabled?: boolean
    loading?: boolean
    reverse?: boolean
    role?: string
    tabIndex?: number
    type?: 'button' | 'submit' | 'reset'
}

const Checkbox = ({ as, variant = 'success', checked, onChange, onKeyUp, onKeyDown, text, disabled, loading, reverse, className, circleClassName, type = 'button', ...restProps }: CheckboxPropsType) => {
    const Component = as || 'button'
    const isDisabled = disabled || loading

    return (
        <Component
            className={classnames(s.main, s[variant], checked && s.checked, isDisabled && s.disabled, reverse && 'reverse', className, circleClassName)}
            onClick={(event: MouseEvent<HTMLButtonElement | HTMLDivElement>) => onChange?.(!checked, event)}
            onKeyUp={onKeyUp}
            onKeyDown={onKeyDown}
            disabled={isDisabled}
            {...restProps}
            type={Component === 'button' ? type : undefined}
        >
            <div className={s.main_icon}>
                {loading ? (
                    <Spinner color='neutral200' size='16' />
                ) : (
                    <>
                        <Icon className={s.main_success} name={variant === 'primary' ? 'checked' : 'success'} />
                        <div className={classnames(s.main_circle, circleClassName)} />
                    </>
                )}
            </div>
            {text}
        </Component>
    )
}

export default Checkbox
