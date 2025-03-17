import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState, type FC } from 'react'
import Accordion from '@shared/ui/Accordion'
import { VerticalFlex } from '@shared/ui/Flex'
import LineHorizontal from '@shared/ui/LineHorizontal'
import Space from '@shared/ui/Space'
import Title from '@shared/ui/Title'
import Text from '@shared/ui/Typography'
import bottomBgImg from './assets/bg-bottom.png'
import topBgImg from './assets/bg-top.png'
import exportImg from './assets/export.png'
import materialsImg from './assets/materials.png'
import studentsImg from './assets/students.png'
import s from './ProblemSolve.module.scss'

const imagesDesktop = {
    '1': materialsImg,
    '2': exportImg,
    '3': studentsImg
}

const ProblemsSolve: FC = () => {
    const t = useTranslations('ProblemsSolve')
    const [activeId, setActiveId] = useState<'1' | '2' | '3'>('1')

    return (
        <section className={s.main} id='problems-solve'>
            <Image className={s.main_bgTop} src={topBgImg} width={1320} height={710} alt='Background' />
            <VerticalFlex className={s.main_content} gap='12'>
                <Title title={t('title')} badge={{ variant: 'primary', icon: 'check', text: 'Problems solve' }} />
                <div className={s.content}>
                    <Space h='100p' direction='vertical' gap='6' justify='between' lg={{ justify: 'start', gap: '5' }}>
                        <Accordion
                            id='1'
                            activeId={activeId}
                            setActiveId={setActiveId}
                            header={() => (
                                <Text size='22' lgSize='20' mdSize='18' weight='600' lineHeight='120'>
                                    {t('accordion.0.title')}
                                </Text>
                            )}
                            body={() => (
                                <Text size='16' lineHeight='160'>
                                    {t('accordion.0.description')}
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
                                    {t('accordion.1.title')}
                                </Text>
                            )}
                            body={() => (
                                <Text size='16' lineHeight='160'>
                                    {t('accordion.1.description')}
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
                                    {t('accordion.2.title')}
                                </Text>
                            )}
                            body={() => (
                                <Text size='16' lineHeight='160'>
                                    {t('accordion.2.description')}
                                </Text>
                            )}
                        />
                    </Space>
                    <Image quality={100} className={s.slide} src={imagesDesktop[activeId]} width={524} height={390} alt='' />
                </div>
            </VerticalFlex>

            <Image className={s.main_bgBottom} src={bottomBgImg} width={1320} height={710} alt='Background' />
        </section>
    )
}

export default ProblemsSolve
