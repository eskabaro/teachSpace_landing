import Link from 'next/link'
import type { FC } from 'react'
import { links } from '@shared/const/links'
import Button from '@shared/ui/Button'
import Each from '@shared/ui/Each'
import ResponsiveImage from '@shared/ui/ResponsiveImage'
import Space from '@shared/ui/Space'
import Title from '@shared/ui/Title'
import Text from '@shared/ui/Typography'
import phonesMobileImg from './assets/phones-mobile.png'
import phonesImg from './assets/phones.png'
import shotImg from './assets/shot.png'
import s from './JoinUs.module.scss'

const list = ['Early access to all platform features', 'Opportunity to share your insights and suggestions', 'Help improve the platform for a better user experience']

const JoinUs: FC = () => {
    return (
        <section className={s.main} id='join-us'>
            <Space className={s.main_content} direction='vertical' justify='between' gap='6'>
                <Title title='Join Our Closed Tutor' secondTitle='Focus Group!' badge={{ variant: 'blue', icon: 'user-add', text: 'Join us' }} titleColor='white'>
                    <Space direction='vertical' gap='3'>
                        <Text size='16' lineHeight='160' color='primary100'>
                            Join Our Closed Tutor Focus Group to Gain Early Access to All Platform Features, Share Your Valuable Feedback and Suggestions, and Help Shape the Future of the Platform to Create an Even Better and More Effective User
                            Experience for Educators and Students!
                        </Text>
                        <Space as='ul' direction='vertical'>
                            <Each
                                of={list}
                                render={(item) => (
                                    <li className={s.listItem}>
                                        <Text size='16' weight='500' color='primary100' lineHeight='120'>
                                            {item}
                                        </Text>
                                    </li>
                                )}
                            />
                        </Space>
                    </Space>
                </Title>
                <Space direction='horizontal' gap='6' sm={{ gap: '4' }}>
                    <Button className={s.button} as={Link} href={links.bookCall} variant='border'>
                        Book a call
                    </Button>
                    <Button className={s.button} as={Link} href={links.contactUs} variant='secondary'>
                        Contact us
                    </Button>
                </Space>
            </Space>
            <ResponsiveImage desktop={{ className: s.main_img, src: phonesImg, alt: '' }} tablet={{ className: s.main_img, src: phonesMobileImg, alt: '' }} mobile={{ className: s.main_img, src: shotImg, alt: '' }} />
        </section>
    )
}

export default JoinUs
