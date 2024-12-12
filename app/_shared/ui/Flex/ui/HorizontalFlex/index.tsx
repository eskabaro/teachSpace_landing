import type { ComponentType } from 'react'
import classnames from '@shared/lib/classnames'
import type { AdditionalFlexPropsType, FlexElementType, FlexGapType } from '../index'
import { Flex } from '../index'

type Props<T extends FlexElementType | ComponentType<any>> = {
    as?: T
} & Omit<FlexGapType, 'direction'> &
    AdditionalFlexPropsType<T>

export const HorizontalFlex = <T extends FlexElementType | ComponentType<any>>({ children, gap, xlGap, mdGap, className, ...flexProps }: Props<T>) => {
    return (
        <Flex className={classnames(`flex_horizontal_gap_${gap}`, xlGap && `xl_flex_horizontal_gap_${xlGap}`, mdGap && `md_flex_horizontal_gap_${mdGap}`, className)} direction={false} {...flexProps}>
            {children}
        </Flex>
    )
}
