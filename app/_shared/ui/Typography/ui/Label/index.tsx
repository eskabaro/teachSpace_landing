import type { FC } from 'react'
import type { TextPropsType } from '../Text'
import { Text } from '../Text'

interface Props extends TextPropsType {
    as?: 'label' | 'div' | 'p' | 'span'
    htmlFor?: string
}

export const Label: FC<Props> = ({ as = 'label', htmlFor, size = '16', weight = '500', lineHeight = '120', children, ...restProps }) => {
    return (
        <Text as={as} htmlFor={htmlFor} weight={weight} lineHeight={lineHeight} size={size} {...restProps}>
            {children}
        </Text>
    )
}
