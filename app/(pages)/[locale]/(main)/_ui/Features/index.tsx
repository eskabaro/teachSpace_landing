import type { FC } from 'react'
import { links } from '@shared/const/links'
import { handleRedirectWithGTM } from '@shared/lib/utils/gtmRedirect'
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
            <Title className={s.main_title} title={'Main Features of Our Platform'} alignCenterMd align='center' badge={{ variant: 'secondary', icon: 'category', text: 'Features' }} />
            <div className={s.main_content}>
                <Space className={s.top} direction='horizontal' gap='6' lg={{ gap: '5' }} md={{ direction: 'vertical' }} sm={{ gap: '4' }}>
                    <Space className={s.item} w='60p' direction='vertical' gap='16' lg={{ gap: '6' }} md={{ w: '100p' }} sm={{ gap: '3' }}>
                        <Badge variant='primary' icon='pdf' text='PDF Materials' />
                        <Space direction='vertical' gap='3'>
                            <Text size='28' lgSize='24' mdSize='22' weight='700' lineHeight='120'>
                                AI Learning Plans
                            </Text>
                            <Text size='16' lineHeight='160' color='neutral700'>
                                Tutory allows you to generate personalized learning plans automatically, tailored to the unique goals and needs of each student. The AI analyzes provided data to structure the plan effectively, helping teachers save
                                time and focus on teaching.
                            </Text>
                        </Space>
                        <Button onClick={() => handleRedirectWithGTM(links.register)} icon='arrow-left'>
                            Get Started
                        </Button>
                    </Space>
                    <Space className={s.item} w='42p' direction='vertical' gap='6' justify='between' md={{ w: '100p', align: 'center' }}>
                        <ResponsiveImage
                            desktop={{ src: phonesTopImg, alt: '', width: 408, height: 298 }}
                            tablet={{ src: phonesTopTabletImg, width: 200, height: 294, alt: '' }}
                            mobile={{ className: s.imageWidth, src: phonesTopMobileImg, width: 296, height: 294, alt: '' }}
                        />
                        <Text align='center' size='28' lgSize='24' mdSize='22' weight='700' lineHeight='120'>
                            Lesson Tracking and Rescheduling
                        </Text>
                    </Space>
                </Space>
                <Space className={s.bottom} direction='horizontal' gap='6' lg={{ gap: '5' }} md={{ direction: 'vertical' }} sm={{ gap: '4' }}>
                    <Space className={s.item} w='42p' direction='vertical' gap='6' justify='between' md={{ w: '100p', align: 'center' }}>
                        <Text align='center' as='h1' size='28' lgSize='24' mdSize='22' weight='700' lineHeight='120'>
                            In-Platform <br /> Test Creation
                        </Text>
                        <ResponsiveImage
                            desktop={{ src: phonesBottomImg, alt: '', width: 408, height: 282 }}
                            tablet={{ src: phonesBottomTabletImg, width: 200, height: 294, alt: '' }}
                            mobile={{ className: s.imageWidth, src: phonesBottomMobileImg, width: 296, height: 294, alt: '' }}
                        />
                    </Space>
                    <Space className={s.item} w='60p' direction='vertical' gap='16' lg={{ gap: '6' }} md={{ w: '100p' }} sm={{ gap: '3' }}>
                        <Badge variant='primary' icon='ai' text='Advanced Planning' />
                        <Space direction='vertical' gap='3'>
                            <Text size='28' lgSize='24' mdSize='22' weight='700' lineHeight='120'>
                                Lesson Assignment Creation
                            </Text>
                            <Text size='16' lineHeight='160' color='neutral700'>
                                Create engaging and interactive assignments directly on the platform. Whether for in-class activities or independent practice, the platform offers multiple templates and tools to help teachers quickly design materials
                                that fit their teaching style.
                            </Text>
                        </Space>
                        <Button onClick={() => handleRedirectWithGTM(links.register)} icon='arrow-left'>
                            Get Started
                        </Button>
                    </Space>
                </Space>
            </div>
        </VerticalFlex>
    )
}

export default Features
