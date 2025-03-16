import Link from 'next/link'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import { links } from '@shared/const/links'
import Button from '@shared/ui/Button'
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

    return (
        <section className={s.main} id='join-us'>
            <Space className={s.main_content} gap='6' direction='vertical'>
                <Title title={t('title')} badge={{ variant: 'blue', icon: 'user-add', text: 'Join us' }} titleColor='white'>
                    <Text size='16' lineHeight='160' color='primary100'>
                        {t('description')}
                    </Text>
                </Title>
                <Space direction='horizontal' gap='6' sm={{ gap: '4' }}>
                    <Button className={s.button} as={Link} href={links.register} variant='secondary'>
                        {t('joinUs')}
                    </Button>
                </Space>
            </Space>
            <ResponsiveImage desktop={{ className: s.main_img, src: phonesImg, alt: '' }} tablet={{ className: s.main_img, src: phonesMobileImg, alt: '' }} mobile={{ className: s.main_img, src: shotImg, alt: '' }} />
        </section>
    )
}

export default JoinUs
