import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import type { IconsType } from '@shared/const/icons'
import Each from '@shared/ui/Each'
import Icon from '@shared/ui/Icon'
import Space from '@shared/ui/Space'
import Title from '@shared/ui/Title'
import Text from '@shared/ui/Typography'
import s from './WhyUs.module.scss'

const WhyUs: FC = () => {
    const t = useTranslations('WhyUs')

    const items = [
        {
            icon: 'message-outline',
            title: t('items.0.title'),
            subTitle: t('items.0.subTitle')
        },
        {
            icon: 'pdf-outline',
            title: t('items.1.title'),
            subTitle: t('items.1.subTitle')
        },

        {
            icon: 'copy-outline',
            title: t('items.2.title'),
            subTitle: t('items.2.subTitle')
        },
        {
            icon: 'status-up',
            title: t('items.3.title'),
            subTitle: t('items.3.subTitle')
        },
        {
            icon: 'magicpen',
            title: t('items.4.title'),
            subTitle: t('items.4.subTitle')
        },
        {
            icon: 'user-edit',
            title: t('items.5.title'),
            subTitle: t('items.5.subTitle')
        }
    ]

    return (
        <Space className={s.main} direction='vertical' gap='6' as='section' align='center' lg={{ gap: '5' }} md={{ gap: '4' }} id='why-us'>
            <Title title={t('title')} alignCenterMd align='center' badge={{ variant: 'secondary', icon: 'message', text: 'Why us?' }} />
            <div className={s.main_content}>
                <Each
                    of={items}
                    render={(item) => (
                        <Space className={s.item} direction='vertical' gap='6'>
                            <div className={s.item_icon}>
                                <Icon name={item.icon as IconsType} width={24} height={24} color='primary500' />
                            </div>

                            <Space direction='vertical' gap='3'>
                                <Text size='22' lgSize='20' mdSize='18' weight='600' lineHeight='120'>
                                    {item.title}
                                </Text>
                                <Text size='16' lineHeight='160' color='neutral700'>
                                    {item.subTitle}
                                </Text>
                            </Space>
                        </Space>
                    )}
                />
            </div>
        </Space>
    )
}

export default WhyUs
