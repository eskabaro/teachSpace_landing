import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import Space from '@shared/ui/Space'
import Title from '@shared/ui/Title'
import Text from '@shared/ui/Typography'
import chooseImg from './assets/choose.png'
import exportImg from './assets/export.png'
import generateImg from './assets/generate.png'
import styles from './HowToCreate.module.scss'

interface ItemProps {
    title: string
    description: string
    image: StaticImageData
}

const HowToCreate: FC = () => {
    const t = useTranslations('HowToCreate')
    const items: ItemProps[] = [
        {
            title: t('items.0.title'),
            description: t('items.0.description'),
            image: chooseImg
        },
        {
            title: t('items.1.title'),
            description: t('items.1.description'),
            image: generateImg
        },
        {
            title: t('items.2.title'),
            description: t('items.2.description'),
            image: exportImg
        }
    ]

    return (
        <Space as='section' className={styles.main} id='how-to-create'>
            <Title title={t('title1')} secondTitle={t('title2')} alignCenterMd align='center' badge={{ variant: 'secondary', icon: 'category', text: 'Key Feature' }} />
            {items.map((item, index: number) => (
                <div key={index} className={styles.item}>
                    <div className={styles.content}>
                        <Text className={styles.title}>
                            {index + 1}. {item.title}
                        </Text>
                        <Text className={styles.description}>{item.description}</Text>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image quality={100} src={item.image} alt={item.title} fill />
                    </div>
                </div>
            ))}
        </Space>
    )
}

export default HowToCreate
