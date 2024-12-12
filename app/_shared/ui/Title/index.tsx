'use client'
import type { FC, PropsWithChildren } from 'react'
import type { ColorsType } from '@shared/const/colors'
import classnames from '@shared/lib/classnames'
import type { BaseUiType } from '@shared/lib/types/uiClasses'
import type { BadgeProps } from '../Badge'
import Badge from '../Badge'
import Space from '../Space'
import Text from '../Typography'
import s from './Title.module.scss'

interface Props extends PropsWithChildren<unknown>, BaseUiType {
    badge: BadgeProps
    title: string
    titleColor?: ColorsType
    alignCenterMd?: boolean
}

const Title: FC<Props> = ({ badge, title, children, titleColor, alignCenterMd, ...rest }) => {
    return (
        <Space direction='vertical' gap='3' {...rest}>
            <Badge {...badge} />
            <Text className={classnames(alignCenterMd && s.alignCenter)} size='32' lgSize='28' mdSize='24' weight='700' lineHeight='120' color={titleColor}>
                {title}
            </Text>
            {children}
        </Space>
    )
}

export default Title
