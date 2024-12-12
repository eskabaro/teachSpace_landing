import type { ComponentType, ReactNode } from 'react'
import classnames from '@shared/lib/classnames'
import type { GapType } from '@shared/lib/types'
import type { FlexGapType } from '../Flex'
import { VerticalFlex } from '../Flex'
import type { AdditionalFlexPropsType, FlexElementType } from '../Flex/ui'
import s from './Background.module.scss'

type Props<T extends FlexElementType | ComponentType<any>> = {
    as?: T
    children?: ReactNode
    padding?: GapType
    mdPadding?: GapType
    gap?: GapType
    className?: string
} & Omit<FlexGapType, 'gap'> &
    AdditionalFlexPropsType<T>

const Background = <T extends FlexElementType | ComponentType<any>>({ children, padding = '6', mdPadding = '4', gap = '6', className, ...restProps }: Props<T>) => {
    return (
        <VerticalFlex className={classnames(s.main, `p${padding}`, `md_p${mdPadding}`, className)} gap={gap} {...restProps}>
            {children}
        </VerticalFlex>
    )
}

export default Background
