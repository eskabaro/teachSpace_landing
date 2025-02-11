import { Atma } from 'next/font/google'
import Link from 'next/link'
import type { FC } from 'react'
import type { IconsType } from '@shared/const/icons'
import { links } from '@shared/const/links'
import classnames from '@shared/lib/classnames'
import { handleRedirectWithGTM } from '@shared/lib/utils/gtmRedirect'
import Button from '@shared/ui/Button'
import Each from '@shared/ui/Each'
import Flex from '@shared/ui/Flex'
import Icon from '@shared/ui/Icon'
import ResponsiveImage from '@shared/ui/ResponsiveImage'
import Space from '@shared/ui/Space'
import Text, { Title } from '@shared/ui/Typography'
import VideoWrapper from '@shared/ui/VideoWrapper'
import mobileBgImg from './assets/mobile-bg.png'
import bgImg from './assets/preview-bg.png'
import tabletBgImg from './assets/tablet-bg.png'
import s from './Preview.module.scss'

const list = [
    {
        icon: 'book',
        text: 'Create a convenient learning plan.'
    },
    {
        icon: 'chart-success',
        text: 'Check homework effortlessly with AI.'
    },
    {
        icon: 'status-up',
        text: 'Track your students’ progress.'
    },
    {
        icon: 'magicpen',
        text: 'Design high-quality lessons with AI.'
    }
]

const Preview: FC = () => {
    return (
        <Flex className={s.main} as='section'>
            <ResponsiveImage
                desktop={{
                    classNameBlock: s.main_bg,
                    src: bgImg,
                    quality: 100,
                    priority: true,
                    alt: '',
                    placeholder: 'blur'
                }}
                tablet={{ classNameBlock: s.main_bg, src: tabletBgImg, quality: 100, priority: true, alt: '', placeholder: 'blur' }}
                mobile={{ classNameBlock: s.main_bg, src: mobileBgImg, quality: 100, priority: true, alt: '', placeholder: 'blur' }}
            />

            <Space direction='vertical' align='center' w='100p' gap='12' lg={{ gap: '5' }}>
                <Space direction='vertical' gap='6' align='center' lg={{ gap: '5' }}>
                    <Space className={s.title} direction='vertical' gap='3'>
                        <Title size='36' lgSize='32' mdSize='28' weight='700' lineHeight='120' align='center'>
                            Focus on Students, Not on Routine
                        </Title>
                        <Text size='18' lgSize='16' mdSize='14' lineHeight='140' color='neutral600' align='center'>
                            Tutory allows you to dedicate more time to your students by saving time on lesson planning, creating homework assignments, and preparing materials for lesson
                        </Text>
                        <Badge />
                    </Space>
                    <Button onClick={() => handleRedirectWithGTM(links.register)}>Get started for free</Button>
                </Space>
                <VideoWrapper videoId='UvzIhvdLpls' />
                <Space className={s.list} gap='6' lg={{ gap: '5' }} direction='horizontal' justify='center' as='ul'>
                    <Each
                        of={list}
                        render={({ icon, text }, index) => {
                            const isLast = index + 1 === list.length

                            return (
                                <>
                                    <Space direction='horizontal' lg={{ direction: 'vertical', gap: '3' }} gap='6' align='center' as='li'>
                                        <Icon name={icon as IconsType} width={48} height={48} color='neutral300' />
                                        <Text as='span' size='16' lineHeight='140' color='neutral700'>
                                            {text}
                                        </Text>
                                    </Space>
                                    {!isLast && <div className={s.verticalLine} />}
                                </>
                            )
                        }}
                    />
                    <div className={s.block} />
                </Space>
            </Space>
        </Flex>
    )
}

export const atma = Atma({ subsets: ['latin'], weight: ['500'] })

const Badge: FC = () => {
    return (
        <div className={s.badge}>
            <div className={s.badge_wrapper}>
                <svg className={s.arrow} width='90' height='50' viewBox='0 0 90 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M1.32307 48.5288C15.3778 44.2163 26.1002 36.9252 29.4428 21.98C30.5681 16.949 29.1066 9.80617 22.6156 15.0637C16.5859 19.9476 16.7371 31.5538 21.8704 37.0934C29.5736 45.4066 41.4943 41.4866 49.6631 35.7181C62.301 26.7937 74.186 16.7794 83.9115 4.75343C85.8926 2.30381 66.3656 5.98042 73.1729 5.56777C77.9776 5.27651 81.9049 3.81392 86.3591 2.14223C89.5665 0.938479 87.9188 2.78397 86.6566 5.07726C84.6054 8.8043 83.2034 14.1056 83.6926 18.3765'
                        stroke='#95B0DE'
                        strokeWidth='2'
                        strokeLinecap='round'
                    />
                </svg>
                <svg className={s.arrowMobile} width='39' height='60' viewBox='0 0 39 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M5.73979 58.5023C11.4727 51.0956 13.9495 43.1152 8.71369 33.2486C6.95118 29.9272 2.75602 26.2771 1.65667 31.5994C0.635458 36.5436 6.22164 43.249 11.6886 44.6865C19.8926 46.8439 24.6307 40.409 26.4162 34.2047C29.1786 24.606 31.0077 14.635 30.688 4.24483C30.6229 2.12841 21.5603 11.071 25.1316 8.45958C27.6524 6.61635 29.1322 4.39673 30.8045 1.87183C32.0086 0.0536822 31.9718 1.70221 32.3606 3.47719C32.9925 6.36188 34.73 9.93707 37.0256 12.2535'
                        stroke='#95B0DE'
                        strokeWidth='2'
                        strokeLinecap='round'
                    />
                </svg>
                <div className={classnames(s.text, atma.className)}>Powered by AI</div>
            </div>
        </div>
    )
}

export default Preview
