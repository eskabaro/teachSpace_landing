import Image from 'next/image'
import { useState, type FC } from 'react'
import Accordion from '@shared/ui/Accordion'
import { VerticalFlex } from '@shared/ui/Flex'
import LineHorizontal from '@shared/ui/LineHorizontal'
import Space from '@shared/ui/Space'
import Title from '@shared/ui/Title'
import Text from '@shared/ui/Typography'
import bottomBgImg from './assets/bg-bottom.png'
import topBgImg from './assets/bg-top.png'
import materialsImg from './assets/materials.png'
import scheduleImg from './assets/schedule.png'
import studentsImg from './assets/students.png'
import s from './ProblemSolve.module.scss'

const images = {
    '1': materialsImg,
    '2': studentsImg,
    '3': scheduleImg
}

const ProblemsSolve: FC = () => {
    const [activeId, setActiveId] = useState<'1' | '2' | '3'>('1')

    return (
        <section className={s.main} id='problems-solve'>
            <Image className={s.main_bgTop} src={topBgImg} width={1320} height={710} alt='Background' />
            <VerticalFlex className={s.main_content} gap='12'>
                <Title title='What Our Platform Solves' badge={{ variant: 'primary', icon: 'check', text: 'Problems solve' }} />
                <div className={s.content}>
                    <Space h='100p' direction='vertical' gap='6' justify='between' lg={{ justify: 'start', gap: '5' }}>
                        <Accordion
                            id='1'
                            activeId={activeId}
                            setActiveId={setActiveId}
                            header={() => (
                                <Text size='22' lgSize='20' mdSize='18' weight='600' lineHeight='120'>
                                    Preparing materials is time-consuming.
                                </Text>
                            )}
                            body={() => (
                                <Text size='16' lineHeight='160'>
                                    With TeachSpace, you can effortlessly generate AI-powered PDFs in just minutes, perfect for lessons or independent practice, complete with seamless export options.
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
                                    Keeping track of each student’s learning plan.
                                </Text>
                            )}
                            body={() => (
                                <Text size='16' lineHeight='160'>
                                    Our platform enables you to create personalized learning plans tailored to each student’s goals or aligned with uploaded textbooks, all done automatically to meet their unique needs.{' '}
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
                                    Tracking scheduled lessons for each student.
                                </Text>
                            )}
                            body={() => (
                                <Text size='16' lineHeight='160'>
                                    Use our lesson schedule display and automatic scheduling to stay organized and plan lessons effortlessly.
                                </Text>
                            )}
                        />
                    </Space>
                    <Image className={s.slide} src={images[activeId]} width={524} height={390} alt='' />
                </div>
            </VerticalFlex>
            <Image className={s.main_bgBottom} src={bottomBgImg} width={1320} height={710} alt='Background' />
        </section>
    )
}

export default ProblemsSolve
