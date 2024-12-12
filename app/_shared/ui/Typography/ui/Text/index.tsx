'use client'
import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react'
import type { ColorsType } from '@shared/const/colors'
import classnames from '@shared/lib/classnames'
import s from './Text.module.scss'

export type TextWeightType = '400' | '500' | '600' | '700'
export type TextSizeType = '8' | '10' | '12' | '14' | '16' | '18' | '20' | '22' | '24' | '28' | '32' | '36'
export type TextAlignType = 'center' | 'left' | 'right'
export type TextLineHeightType = '100' | '120' | '130' | '140' | '150' | '160'
export interface TextPropsType {
    children?: ReactNode
    weight?: TextWeightType
    size?: TextSizeType
    mdSize?: TextSizeType
    lgSize?: TextSizeType
    lineHeight?: TextLineHeightType
    align?: 'left' | 'center' | 'right'
    color?: ColorsType
    className?: string
    noWrap?: boolean
    lineThrough?: boolean
    isEllipse?: boolean
}
type TextElementType = 'div' | 'p' | 'a' | 'button' | 'span' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type AdditionalTextPropsType<T extends TextElementType | ComponentType> = T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : ComponentPropsWithoutRef<T>
type Props<T extends TextElementType | ComponentType> = {
    as?: T
} & TextPropsType &
    AdditionalTextPropsType<T>

export const Text = <T extends TextElementType | ComponentType<any> = 'p'>({ as, children, size, mdSize, lgSize, weight, lineHeight, color, align, noWrap, lineThrough, className, isEllipse, ...restProps }: Props<T>) => {
    const Component = as || 'p'

    return (
        <Component
            className={classnames(
                size && s[`size${size}`],
                mdSize && s[`mdSize${mdSize}`],
                lgSize && s[`lgSize${lgSize}`],
                weight && s[`weight${weight}`],
                lineHeight && s[`lineHeight${lineHeight}`],
                color && `color_${color}`,
                align && `text_${align}`,
                noWrap && 'nowrap',
                lineThrough && 'lineThrough',
                isEllipse && s.ellipse,
                className
            )}
            {...restProps}
        >
            {children}
        </Component>
    )
}
