import type { FC } from 'react'
import type { IconsType } from '@shared/const/icons'
import Button from '@shared/ui/Button'
import type { ButtonVariantsType } from '@shared/ui/Button'
import Icon from '@shared/ui/Icon'
import Space from '@shared/ui/Space'
import Text, { Title } from '@shared/ui/Typography'
import PlanPrice from '../PlanPrice'
import s from './PlanCard.module.scss'

export interface PlanCardProps {
    title: string
    description: string
    price: number
    features: string[]
    period: string
    buttonText: string
    buttonVariant: ButtonVariantsType
    icon: IconsType
    buttonDisabled?: boolean
    buttonOnClick?: () => void
}

const PlanCard: FC<PlanCardProps> = ({ title, description, price, features, period, buttonText, buttonVariant, icon, buttonDisabled, buttonOnClick }) => {
    return (
        <Space className={s.planCard} direction='vertical'>
            <Space className={s.planCard_title_wrapper_content}>
                <Space className={s.planCard_title_wrapper}>
                    <Space className={s.planCard_icon_wrapper}>
                        <Icon className={s.planCard_icon} name={icon} />
                    </Space>
                    <Space className={s.planCard_title_content_text}>
                        <Title variant='h4'>{title}</Title>
                        <Text>{description}</Text>
                    </Space>
                </Space>
                <PlanPrice price={price} period={period} />
            </Space>
            <div className={s.planCard_divider} />
            <Space direction='vertical' className={s.planCard_features}>
                {features.map((feature) => (
                    <Space key={feature} direction='horizontal' align='center' gap={3}>
                        <Icon className={s.planCard_features_icon} name='check' height={24} width={24} />
                        <Text className={s.planCard_features_text}>{feature}</Text>
                    </Space>
                ))}
            </Space>
            <div className={s.planCard_divider} />
            <Button disabled={buttonDisabled} full variant={buttonVariant} onClick={buttonOnClick}>
                {buttonText}
            </Button>
        </Space>
    )
}

export default PlanCard
