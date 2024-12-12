import Link from 'next/link'
import type { FC } from 'react'
import { links } from '@shared/const/links'
import Badge from '@shared/ui/Badge'
import Button from '@shared/ui/Button'
import { VerticalFlex } from '@shared/ui/Flex'
import ResponsiveImage from '@shared/ui/ResponsiveImage'
import Space from '@shared/ui/Space'
import Title from '@shared/ui/Title'
import Text from '@shared/ui/Typography'
import phonesBottomMobileImg from './assets/phones-bottom-mobile.png'
import phonesBottomTabletImg from './assets/phones-bottom-tablet.png'
import phonesBottomImg from './assets/phones-bottom.png'
import phonesTopMobileImg from './assets/phones-top-mobile.png'
import phonesTopTabletImg from './assets/phones-top-tablet.png'
import phonesTopImg from './assets/phones-top.png'
import s from './Features.module.scss'

const Features: FC = () => {
    return (
        <VerticalFlex className={s.main} as='section' gap='6' id='features'>
            <Title title='Main Features of Our Platform' alignCenterMd align='center' badge={{ variant: 'secondary', icon: 'category', text: 'Features' }} />
            <div className={s.main_content}>
                <Space className={s.top} direction='horizontal' gap='6' lg={{ gap: '5' }} md={{ direction: 'vertical' }} sm={{ gap: '4' }}>
                    <Space className={s.item} w='60p' direction='vertical' gap='16' lg={{ gap: '6' }} md={{ w: '100p' }}>
                        <Badge variant='primary' icon='pdf' text='PDF Materials' />
                        <Space direction='vertical' gap='3'>
                            <Text size='28' lgSize='24' mdSize='22' weight='700' lineHeight='120'>
                                Effortlessly Create Lesson Materials in Minutes
                            </Text>
                            <Text size='16' lineHeight='160' color='neutral700'>
                                Generate professional educational materials with the power of AI. Choose from 17 customizable templates to quickly design engaging lessons, and easily export them as PDF files for seamless sharing
                            </Text>
                        </Space>
                        <Button as={Link} href={links.bookCall} icon='arrow-left'>
                            Book a call
                        </Button>
                    </Space>
                    <Space className={s.item} w='40p' direction='vertical' gap='6' justify='between' md={{ w: '100p', align: 'center' }}>
                        <ResponsiveImage
                            desktop={{ src: phonesTopImg, alt: '', width: 408, height: 298 }}
                            tablet={{ src: phonesTopTabletImg, width: 200, height: 294, alt: '' }}
                            mobile={{ src: phonesTopMobileImg, width: 296, height: 294, alt: '' }}
                        />
                        <Text size='28' lgSize='24' mdSize='22' weight='700' lineHeight='120'>
                            Create materials easily
                        </Text>
                    </Space>
                </Space>
                <Space className={s.bottom} direction='horizontal' gap='6' lg={{ gap: '5' }} md={{ direction: 'vertical' }} sm={{ gap: '4' }}>
                    <Space className={s.item} w='40p' direction='vertical' gap='6' justify='between' md={{ w: '100p', align: 'center' }}>
                        <Text as='h1' size='28' lgSize='24' mdSize='22' weight='700' lineHeight='120'>
                            AI-Generated Plan
                        </Text>
                        <ResponsiveImage
                            desktop={{ src: phonesBottomImg, alt: '', width: 408, height: 282 }}
                            tablet={{ src: phonesBottomTabletImg, width: 200, height: 294, alt: '' }}
                            mobile={{ src: phonesBottomMobileImg, width: 296, height: 294, alt: '' }}
                        />
                    </Space>
                    <Space className={s.item} w='60p' direction='vertical' gap='16' lg={{ gap: '6' }} md={{ w: '100p' }}>
                        <Badge variant='primary' icon='ai' text='Advanced Planning' />
                        <Space direction='vertical' gap='3'>
                            <Text size='28' lgSize='24' mdSize='22' weight='700' lineHeight='120'>
                                Personalized Plans Made Easy with TeachSpace
                            </Text>
                            <Text size='16' lineHeight='160' color='neutral700'>
                                TeachSpace empowers you to create tailored learning plans for every student. With automated planning based on each student’s unique needs, your lessons are structured, goal-focused, and easy to manage
                            </Text>
                        </Space>
                        <Button as={Link} href={links.bookCall} icon='arrow-left'>
                            Book a call
                        </Button>
                    </Space>
                </Space>
            </div>
        </VerticalFlex>
    )
}

export default Features
