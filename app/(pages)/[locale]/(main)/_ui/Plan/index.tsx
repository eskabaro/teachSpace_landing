import { useState, type FC } from 'react'
import { links } from '@shared/const/links'
import { handleRedirectWithGTM } from '@shared/lib/utils/gtmRedirect'
import Button from '@shared/ui/Button'
import { VerticalFlex } from '@shared/ui/Flex'
import PlanCard from '@shared/ui/PlanCard'
import Space from '@shared/ui/Space'
import SwitchButtons from '@shared/ui/SwitchButtons'
import Title from '@shared/ui/Title'
import Text from '@shared/ui/Typography'
import s from './Plan.module.scss'

type PlanDuration = 'Monthly' | 'Annual'

const Plan: FC = () => {
    const [planDuration, setPlanDuration] = useState<PlanDuration>('Monthly')

    const handlePlanDurationChange = (value: PlanDuration) => {
        setPlanDuration(value)
    }

    return (
        <VerticalFlex className={s.main} as='section' gap='6' id='pricing'>
            <Title className={s.main_title} title={'Choose Your Perfect Subscription Plan'} alignCenterMd align='center' badge={{ variant: 'secondary', icon: 'crown', text: 'Plan' }} />
            <div className={s.main_content}>
                <SwitchButtons
                    className={s.main_content_switch}
                    active={planDuration}
                    onChange={handlePlanDurationChange}
                    buttons={[
                        {
                            id: 'Monthly',
                            content: 'Monthly'
                        },
                        {
                            id: 'Annual',
                            content: 'Annual'
                        }
                    ]}
                />
                <Space className={s.main_content_cards}>
                    <PlanCard
                        title='Basic'
                        description='Access to the basic TeachSpace features'
                        price={0}
                        features={['5 Listening activities in a day', '10 Text activities in a day', '5 students']}
                        period={planDuration === 'Monthly' ? '/ Month' : '/ Year'}
                        buttonText='Get Started'
                        buttonVariant='primary'
                        icon='award'
                        buttonOnClick={() => handleRedirectWithGTM(links.register)}
                    />
                    <PlanCard
                        title='Premium'
                        description='Unlock the full potential of your teaching journey with Tutory'
                        price={planDuration === 'Monthly' ? 9.99 : 99.99}
                        features={['200 Listening activities in a month', 'Unlimited Text activities', 'Unlimited students']}
                        period={planDuration === 'Monthly' ? '/ Month' : '/ Year'}
                        buttonText='Start 7-day free trial'
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
