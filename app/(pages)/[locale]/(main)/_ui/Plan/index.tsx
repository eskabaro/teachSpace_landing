import { useTranslations } from 'next-intl'
import { useState, type FC } from 'react'
import { links } from '@shared/const/links'
import { handleRedirectWithGTM } from '@shared/lib/utils/gtmRedirect'
import { VerticalFlex } from '@shared/ui/Flex'
import PlanCard from '@shared/ui/PlanCard'
import Space from '@shared/ui/Space'
import SwitchButtons from '@shared/ui/SwitchButtons'
import Title from '@shared/ui/Title'
import s from './Plan.module.scss'

type PlanDuration = 'Monthly' | 'Annual'

const Plan: FC = () => {
    const t = useTranslations('Plan')
    const [planDuration, setPlanDuration] = useState<PlanDuration>('Monthly')

    const handlePlanDurationChange = (value: PlanDuration) => {
        setPlanDuration(value)
    }

    return (
        <VerticalFlex className={s.main} as='section' gap='6' id='pricing'>
            <Title className={s.main_title} title={t('title')} alignCenterMd align='center' badge={{ variant: 'secondary', icon: 'crown', text: 'Plan' }} />
            <div className={s.main_content}>
                <SwitchButtons
                    className={s.main_content_switch}
                    active={planDuration}
                    onChange={handlePlanDurationChange}
                    buttons={[
                        {
                            id: 'Monthly',
                            content: t('switch.Monthly')
                        },
                        {
                            id: 'Annual',
                            content: t('switch.Annual')
                        }
                    ]}
                />
                <Space className={s.main_content_cards}>
                    <PlanCard
                        title={t('cards.0.title')}
                        description={t('cards.0.description')}
                        price={0}
                        features={[t('cards.0.features.0'), t('cards.0.features.1'), t('cards.0.features.2')]}
                        period={planDuration === 'Monthly' ? '/ Month' : '/ Year'}
                        buttonText={t('cards.0.button')}
                        buttonVariant='primary'
                        icon='award'
                        buttonOnClick={() => handleRedirectWithGTM(links.register)}
                    />
                    <PlanCard
                        title={t('cards.1.title')}
                        description={t('cards.1.description')}
                        price={planDuration === 'Monthly' ? 9.99 : 99.99}
                        features={[t('cards.1.features.0'), t('cards.1.features.1'), t('cards.1.features.2')]}
                        period={planDuration === 'Monthly' ? '/ Month' : '/ Year'}
                        buttonText={t('cards.1.button')}
                        buttonVariant='primary'
                        icon='crown'
                        buttonOnClick={() => handleRedirectWithGTM(links.register)}
                    />
                </Space>
            </div>
        </VerticalFlex>
    )
}

export default Plan
