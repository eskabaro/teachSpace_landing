'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import { links } from '@shared/const/links'
import { handleRedirectWithGTM } from '@shared/lib/utils/gtmRedirect'
import Button from '@shared/ui/Button'
import Logo from '@shared/ui/Logo'
import Space from '@shared/ui/Space'
import Text from '@shared/ui/Typography'
import s from './Footer.module.scss'

const Footer: FC = () => {
    const t = useTranslations('Footer')

    return (
        <footer className={s.footer}>
            <Space direction='vertical' gap='6' justify='center' w='100p' lg={{ gap: '3' }}>
                <Logo width={132} />
                <Text as='h1' size='32' lgSize='28' mdSize='24' weight='700' lineHeight='120'>
                    {t('title')}
                </Text>
            </Space>
            <Space className={s.footer_links} direction='horizontal' justify='between'>
                <Space direction='vertical' justify='center' gap='6'>
                    <Button onClick={() => handleRedirectWithGTM(links.register)} iconColor='neutral300' leftIcon='arrow-left' variant='transparent'>
                        {t('signUp')}
                    </Button>
                    <Button as={Link} href='/privacy' iconColor='neutral300' leftIcon='arrow-left' variant='transparent'>
                        {t('privacy')}
                    </Button>
                    <Button as={Link} href='/terms' iconColor='neutral300' leftIcon='arrow-left' variant='transparent'>
                        {t('terms')}
                    </Button>
                </Space>
                <Space direction='vertical' gap='6'>
                    <Button as={Link} href={links.contactUs} iconColor='neutral300' leftIcon='arrow-left' variant='transparent'>
                        {t('telegram')}
                    </Button>
                    <Button as={Link} href={links.whatsApp} iconColor='neutral300' leftIcon='arrow-left' variant='transparent'>
                        {t('whatsApp')}
                    </Button>
                    <Button as={Link} href={links.bookCall} iconColor='neutral300' leftIcon='arrow-left' variant='transparent'>
                        {t('bookCall')}
                    </Button>
                </Space>
            </Space>
        </footer>
    )
}

export default Footer
