import type { FC } from 'react'
import type { IconsType } from '@shared/const/icons'
import Each from '@shared/ui/Each'
import Icon from '@shared/ui/Icon'
import Space from '@shared/ui/Space'
import Title from '@shared/ui/Title'
import Text from '@shared/ui/Typography'
import s from './WhyUs.module.scss'

const items = [
    {
        icon: 'message-outline',
        title: 'Custom Materials',
        subTitle: 'Quickly design lesson materials tailored to your needs with AI support.'
    },
    {
        icon: 'copy-outline',
        title: '17 Templates',
        subTitle: 'Select from 17 types of templates for diverse lesson formats.'
    },

    {
        icon: 'pdf-outline',
        title: 'Simple Export to PDF',
        subTitle: 'Easily download completed materials in PDF format for convenient sharing.'
    },
    {
        icon: 'tag-outline',
        title: 'Fast, Free, and Easy',
        subTitle: 'Generate high-quality materials for free in just a few clicks.'
    },
    {
        icon: 'edit-outline',
        title: 'Personalized Plans',
        subTitle: 'Creates a custom plan for each student based on their info and goals.'
    },
    {
        icon: 'export-outline',
        title: 'Resource Upload',
        subTitle: 'Quickly add PDFs and materials to build lessons from your resources.'
    }
]

const WhyUs: FC = () => {
    return (
        <Space className={s.main} direction='vertical' gap='6' as='section' align='center' lg={{ gap: '5' }} md={{ gap: '4' }} id='why-us'>
            <Title title='Why Choose TeachSpace?' alignCenterMd align='center' badge={{ variant: 'secondary', icon: 'message', text: 'Why us?' }} />
            <div className={s.main_content}>
                <Each
                    of={items}
                    render={(item) => (
                        <Space className={s.item} direction='vertical' gap='6'>
                            <div className={s.item_icon}>
                                <Icon name={item.icon as IconsType} width={22} height={22} color='primary500' />
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
