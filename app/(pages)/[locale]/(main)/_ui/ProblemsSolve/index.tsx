import Image from 'next/image'
import { useState, type FC } from 'react'
import Accordion from '@shared/ui/Accordion'
import { VerticalFlex } from '@shared/ui/Flex'
import LineHorizontal from '@shared/ui/LineHorizontal'
import ResponsiveImage from '@shared/ui/ResponsiveImage'
import Space from '@shared/ui/Space'
import Title from '@shared/ui/Title'
import Text from '@shared/ui/Typography'
import bottomBgImg from './assets/bg-bottom.png'
import topBgImg from './assets/bg-top.png'
import materialsMobileImg from './assets/materials-mobile.png'
import materialsImg from './assets/materials.png'
import scheduleMobileImg from './assets/schedule-mobile.png'
import scheduleImg from './assets/schedule.png'
import studentsMobileImg from './assets/students-mobile.png'
import studentsImg from './assets/students.png'
import s from './ProblemSolve.module.scss'

const imagesDesktop = {
    '1': materialsImg,
    '2': studentsImg,
    '3': scheduleImg
}

const imagesMobile = {
    '1': materialsMobileImg,
    '2': studentsMobileImg,
    '3': scheduleMobileImg
}

const ProblemsSolve: FC = () => {
    const [activeId, setActiveId] = useState<'1' | '2' | '3'>('1')

    return (
        <section className={s.main} id='problems-solve'>
            <Image className={s.main_bgTop} src={topBgImg} width={1320} height={710} alt='Background' />
            <VerticalFlex className={s.main_content} gap='12'>
                <Title title='What Problems We Solve' badge={{ variant: 'primary', icon: 'check', text: 'Problems solve' }} />
                <div className={s.content}>
                    <Space h='100p' direction='vertical' gap='6' justify='between' lg={{ justify: 'start', gap: '5' }}>
                        <Accordion
                            id='1'
                            activeId={activeId}
                            setActiveId={setActiveId}
                            header={() => (
                                <Text size='22' lgSize='20' mdSize='18' weight='600' lineHeight='120'>
                                    Speed up lesson preparation and homework creation.
                                </Text>
                            )}
                            body={() => (
                                <Text size='16' lineHeight='160'>
                                    With TeachSpace, you can effortlessly generate AI-powered materials in just minutes, perfect for lessons or independent practice. Easily export them as PDFs or publish them online to share with your students.
                                </Text>
                            )}
                        />
                        <LineHorizontal color='neutral100' />
                        <Accordion
                            id='2'
                            activeId={activeId}
                            setActiveId={setActiveId}
                            header={() => (
                                <Text size='22' lgSize='20' mdSize='18' weight='600' lineHeight='120'>
                                    Automates homework checking with AI.
                                </Text>
                            )}
                            body={() => (
                                <Text size='16' lineHeight='160'>
                                    After homework is completed, AI reviews all tasks without predefined correct answers within minutes.{' '}
                                </Text>
                            )}
                        />
                        <LineHorizontal color='neutral100' />
                        <Accordion
                            id='3'
                            activeId={activeId}
                            setActiveId={setActiveId}
                            header={() => (
                                <Text size='22' lgSize='20' mdSize='18' weight='600' lineHeight='120'>
                                    Lesson planning and schedule tracking.
                                </Text>
                            )}
                            body={() => (
                                <Text size='16' lineHeight='160'>
                                    Our platform enables you to create personalized learning plans tailored to each student’s goals, all done automatically to meet their unique needs. Additionally, you can customize the program and track scheduled
                                    lessons with ease.
                                </Text>
                            )}
                        />
                    </Space>
                    {/* <Image className={s.slide} src={images[activeId]} width={524} height={390} alt='' /> */}
                    <ResponsiveImage
                        desktop={{ classNameBlock: s.slide, src: imagesDesktop[activeId], alt: '', placeholder: 'empty', loading: 'eager' }}
                        mobile={{ classNameBlock: s.slide, src: imagesMobile[activeId], alt: '', placeholder: 'empty', loading: 'eager' }}
                    />
                </div>
            </VerticalFlex>

            <Image className={s.main_bgBottom} src={bottomBgImg} width={1320} height={710} alt='Background' />
        </section>
    )
}

export default ProblemsSolve
