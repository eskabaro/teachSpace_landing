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
        title: 'AI Homework Review',
        subTitle: 'Quickly and accurately check homework with AI, saving time and improving feedback quality.'
    },
    {
        icon: 'pdf-outline',
        title: 'Simple Export to PDF',
        subTitle: 'Easily download completed materials in PDF format for convenient sharing or use during lessons.'
    },

    {
        icon: 'copy-outline',
        title: '21 Templates',
        subTitle: 'Create a variety of materials suitable for both lessons and homework assignments.'
    },
    {
        icon: 'status-up',
        title: 'Lesson Tracking',
        subTitle: 'Conveniently manage scheduled lessons and reschedule them if needed.'
    },
    {
        icon: 'magicpen',
        title: 'AI Customizable Learning Plan',
        subTitle: 'Automatically generate and customize learning plans tailored to each student’s goals and progress.'
    },
    {
        icon: 'user-edit',
        title: 'Student Tests',
        subTitle: 'Easily share tests with students and review their results in minutes.'
    }
]

const WhyUs: FC = () => {
    return (
        <Space className={s.main} direction='vertical' gap='6' as='section' align='center' lg={{ gap: '5' }} md={{ gap: '4' }} id='why-us'>
            <Title title='Why Choose Tutory?' alignCenterMd align='center' badge={{ variant: 'secondary', icon: 'message', text: 'Why us?' }} />
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
