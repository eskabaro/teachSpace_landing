import type { FC } from 'react'
import Space from '@shared/ui/Space'
import Text, { Title } from '@shared/ui/Typography'
import s from './PlanPrice.module.scss'

interface PlanPriceProps {
    price: number
    period: string
}

const PlanPrice: FC<PlanPriceProps> = ({ price, period }) => {
    return (
        <Space direction='vertical' gap={0} xl={{ gap: 1 }} md={{ gap: 0 }} justify='center'>
            <Title className={s.planPrice_title} variant='h4'>
                {price > 0 ? (
                    <>
                        <span className={s.planPrice_price_currency}>$</span>
                        {price}
                    </>
                ) : (
                    'Free'
                )}
            </Title>
            <Text className={s.planPrice_period}>{price > 0 ? `${period}` : 'For a life time'}</Text>
        </Space>

    )
}

export default PlanPrice
