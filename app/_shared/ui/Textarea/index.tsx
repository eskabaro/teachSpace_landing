import type { ReactNode, TextareaHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import classnames from '@shared/lib/classnames'
import Text, { Label } from '@shared/ui/Typography'
import { VerticalFlex } from '../Flex'
import s from './Textarea.module.scss'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string
    label?: ReactNode
    counter?: {
        value?: number
        max?: number
    }
    hFull?: boolean
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ className, name, error, label, counter, hFull, ...restProps }, ref) => {
    return (
        <VerticalFlex className={classnames(className, hFull && 'h100p')} gap='1'>
            {label && (
                <Label color={error ? 'danger500' : 'neutral900'} htmlFor={name}>
                    {label}
                </Label>
            )}
            <div className={classnames('relative flex_column', hFull && 'h100p')}>
                <textarea className={classnames(error && 'error_field', hFull && 'h100p')} ref={ref} name={name} {...restProps} />
                {counter && (
                    <Text className={s.counter} size='8' lineHeight='100' color={error ? 'danger500' : 'neutral200'}>
                        {counter.value ? (counter.max && counter.value >= counter.max ? counter.max : counter.value) : 0} {counter.max ? `/ ${counter.max}` : ''}
                    </Text>
                )}
            </div>
            {error && (
                <Text size='12' color='danger500'>
                    {error}
                </Text>
            )}
        </VerticalFlex>
    )
})

Textarea.displayName = 'Textarea'

export default Textarea
