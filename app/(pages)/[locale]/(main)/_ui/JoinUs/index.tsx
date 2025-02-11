import Link from 'next/link'
import { useTranslations } from 'next-intl'
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
import shotImg from './assets/Shot.png'
import s from './JoinUs.module.scss'

const JoinUs: FC = () => {
    const t = useTranslations('JoinUs')

    const list = [t('list.0'), t('list.1'), t('list.2')]

    return (
        <section className={s.main} id='join-us'>
            <Space className={s.main_content} direction='vertical' justify='between' gap='6'>
                <Title title='Join Our Closed Tutor' secondTitle='Focus Group!' badge={{ variant: 'blue', icon: 'user-add', text: 'Join us' }} titleColor='white'>
                    <Space direction='vertical' gap='3'>
                        <Text size='16' lineHeight='160' color='primary100'>
                            {t('title')}
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
                        {t('button')}
                    </Button>
                    <Button className={s.button} as={Link} href={links.contactUs} variant='secondary'>
                        {t('contactButton')}
                    </Button>
                </Space>
            </Space>
            <ResponsiveImage desktop={{ className: s.main_img, src: phonesImg, alt: '' }} tablet={{ className: s.main_img, src: phonesMobileImg, alt: '' }} mobile={{ className: s.main_img, src: shotImg, alt: '' }} />
        </section>
    )
}

export default JoinUs
