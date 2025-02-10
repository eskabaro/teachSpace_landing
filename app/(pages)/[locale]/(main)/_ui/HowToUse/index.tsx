import Image from 'next/image'
import { Fragment, type FC } from 'react'
import { VerticalFlex } from '@shared/ui/Flex'
import Icon from '@shared/ui/Icon'
import Space from '@shared/ui/Space'
import Title from '@shared/ui/Title'
import Text from '@shared/ui/Typography'
import bookImg from './assets/book.png'
import calendarImg from './assets/calendar.png'
import macbookImg from './assets/macbook.png'
import userImg from './assets/user.png'
import s from './HowToUse.module.scss'

const items = [
    {
        title: 'Sign up',
        subTitle: 'Sign up for free to start using the service.',
        img: userImg
    },
    {
        title: 'Add your students',
        subTitle: 'Add student info, set levels, and upload PDFs. Tutory will create a personalized learning plan automatically.',
        img: calendarImg
    },
    {
        title: 'Create materials',
        subTitle: 'Quickly generate lesson materials with AI. Choose from 17 templates and export your work to PDF.',
        img: bookImg
    }
]

const HowToUse: FC = () => {
    return (
        <VerticalFlex className={s.main} as='section' gap='6' align='center'>
            <Title title='Simple Steps to Get Started' align='center' badge={{ variant: 'secondary', icon: 'mouse', text: 'How to use?' }} />
            <div className={s.main_content}>
                {items.map((item, index) => {
                    const isLast = index + 1 === items.length

                    return (
                        <Fragment key={index}>
                            <Space className={s.item} direction='vertical' gap='6'>
                                <div className={s.item_icon}>{index + 1}</div>
                                <Image className={s.item_img} src={item.img} width={160} height={160} alt={item.title} />
                                <Space direction='vertical' gap='3'>
                                    <Text size='22' weight='600' lineHeight='120'>
                                        {item.title}
                                    </Text>
                                    <Text size='16' lineHeight='160' color='neutral700'>
                                        {item.subTitle}
                                    </Text>
                                </Space>
                            </Space>
                            {!isLast && <Icon className={s.icon} name='arrow-top' color='neutral200' width={48} height={48} />}
                        </Fragment>
                    )
                })}
            </div>
            <div className={s.macbook}>
                <Image src={macbookImg} width={1320} height={798} alt='Macbook' priority />
            </div>
        </VerticalFlex>
    )
}

export default HowToUse
