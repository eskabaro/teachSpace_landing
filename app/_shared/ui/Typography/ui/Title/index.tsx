import type { FC } from 'react'
import type { TextPropsType } from '../Text'
import { Text } from '../Text'

interface Props extends TextPropsType {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const sizeMap = {
    h1: '32',
    h2: '32',
    h3: '24',
    h4: '22',
    h5: '20',
    h6: '18'
} as const

const mdSizeMap = {
    h1: '24',
    h2: '20',
    h3: '20',
    h4: '18',
    h5: '16',
    h6: '16'
} as const

const lineHeightMap = {
    h1: '100',
    h2: '100',
    h3: '100',
    h4: '100',
    h5: '130',
    h6: '130'
} as const

export const Title: FC<Props> = ({ variant = 'h1', weight = '600', lineHeight, size, mdSize, children, ...restProps }) => {
    return (
        <Text as={variant} size={size || sizeMap[variant]} mdSize={mdSize ?? mdSizeMap[variant]} weight={weight} lineHeight={lineHeight || lineHeightMap[variant]} {...restProps}>
            {children}
        </Text>
    )
}
