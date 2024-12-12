import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react'
import classnames from '@shared/lib/classnames'
import type { GapType } from '@shared/lib/types'

export type FlexElementType = 'section' | 'ul' | 'li' | 'div' | 'nav' | 'form' | 'button' | 'header'
export type AdditionalFlexPropsType<T extends FlexElementType | ComponentType<any>> = T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : ComponentPropsWithoutRef<T>
export interface FlexType {
    children?: ReactNode
    width?: 'fit-content' | 'full'
    align?: 'center' | 'start' | 'end'
    justify?: 'center' | 'start' | 'end' | 'between'
    direction?: 'row' | 'column' | false
    grow?: boolean
    wrap?: boolean
    className?: string
}
type Props<T extends FlexElementType | ComponentType<any>> = {
    as?: T
} & FlexType &
    AdditionalFlexPropsType<T>

export interface FlexGapType extends FlexType {
    gap: GapType
    xlGap?: GapType
    mdGap?: GapType
}

export const Flex = <T extends FlexElementType | ComponentType<any> = 'div'>({ as, children, width, align, justify, direction = 'row', grow, wrap, className, ...restProps }: Props<T>) => {
    const Component = as || 'div'

    return (
        <Component
            className={classnames(
                width && (width === 'full' ? 'w100p' : width),
                direction === 'row' && 'flex',
                direction === 'column' && 'flex_column',
                align && `align_${align}`,
                justify && `justify_${justify}`,
                grow && 'grow',
                wrap && 'flex_wrap',
                className
            )}
            {...restProps}
        >
            {children}
        </Component>
    )
}
