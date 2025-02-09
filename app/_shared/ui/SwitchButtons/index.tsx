import { type ReactNode } from 'react'
import classnames from '@shared/lib/classnames'
import s from './SwitchButtons.module.scss'

interface Props<T> {
    active: T
    onChange: (activeButton: T) => void
    buttons:
        | Array<T>
        | Array<{
              id: T
              content: ReactNode
          }>

    full?: boolean
    className?: string
}

const SwitchButtons = <T extends string | number>({ active, onChange, buttons, full, className }: Props<T>) => {
    return (
        <div className={classnames(s.main, full && s.full, className)}>
            {buttons.map((button) => {
                const id = typeof button === 'object' ? button.id : button
                const content = typeof button === 'object' ? button.content : button

                return (
                    <button className={classnames(s.main_button, id === active && s.active)} onClick={() => onChange(id)} disabled={id === active} type='button' key={id}>
                        {content}
                    </button>
                )
            })}
        </div>
    )
}

export default SwitchButtons
