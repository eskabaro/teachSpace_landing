'use client'
import Link from 'next/link'
import type { FC } from 'react'
import { links } from '@shared/const/links'
import Button from '@shared/ui/Button'
import Logo from '@shared/ui/Logo'
import Space from '@shared/ui/Space'
import Text from '@shared/ui/Typography'
import s from './Footer.module.scss'

const Footer: FC = () => {
    return (
        <footer className={s.footer}>
            <Space direction='vertical' gap='6' justify='center' w='50p' lg={{ gap: '3', w: '100p' }}>
                <Logo width={200} />
                <Text as='h1' size='32' lgSize='28' mdSize='24' weight='700' lineHeight='120'>
                    Focus on Students, <br /> Not on Routine
                </Text>
            </Space>
            <Space className={s.footer_links} direction='horizontal' justify='between'>
                <Space direction='vertical' justify='center' gap='6'>
                    <Button as={Link} href={links.register} iconColor='neutral300' leftIcon='arrow-left' variant='transparent'>
                        Sign up
                    </Button>
                </Space>
                <Space direction='vertical' gap='6'>
                    <Button as={Link} href={links.contactUs} iconColor='neutral300' leftIcon='arrow-left' variant='transparent'>
                        Telegram
                    </Button>
                    <Button as={Link} href={links.whatsApp} iconColor='neutral300' leftIcon='arrow-left' variant='transparent'>
                        WhatsApp
                    </Button>
                    <Button as={Link} href={links.bookCall} iconColor='neutral300' leftIcon='arrow-left' variant='transparent'>
                        Book a call
                    </Button>
                </Space>
            </Space>
        </footer>
    )
}

export default Footer
