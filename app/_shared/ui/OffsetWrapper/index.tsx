'use client'
import { useState } from 'react'
import classnames from '@shared/lib/classnames'
import type { MarginPositionType } from '@shared/lib/types'
import s from './OffsetWrapper.module.scss'

type DataType = Record<string, any> | string | number

interface Props<T extends DataType> {
    data: Array<T>
    formatter: (data: T, index: number) => React.ReactNode
    max?: number
    maxFormatter?: (data: T, index: number) => React.ReactNode
    offset?: number
    reverse?: boolean
    vertical?: boolean
}

const getStyleSide = (reverse = false, vertical = false): MarginPositionType => {
    if (!reverse && !vertical) return 'marginLeft'
    if (reverse && !vertical) return 'marginRight'
    if (reverse && vertical) return 'marginBottom'
    if (!reverse && vertical) return 'marginTop'

    return 'marginLeft'
}

const OffsetWrapper = <T extends DataType>({ data, formatter, offset: initialOffset, max, maxFormatter, reverse, vertical }: Props<T>) => {
    const [offset, setOffset] = useState(initialOffset ?? 0)

    return (
        <div
            className={classnames(s.main, reverse && s.reverse, vertical && s.vertical)}
            ref={(ref) => {
                if (!ref || initialOffset) return
                const firstChild = ref.childNodes[0] as HTMLElement

                setOffset((vertical ? firstChild.offsetHeight : firstChild.offsetWidth) / 2)
            }}
        >
            {data.map((item, index) => {
                const numMax = Number(max)

                if (numMax < index) {
                    return null
                }

                return (
                    <div style={{ [getStyleSide(reverse, vertical)]: index === 0 ? 0 : -offset }} key={offset + index}>
                        {numMax === index && data.length - index > 0 ? maxFormatter?.(item, index) : formatter(item, index)}
                    </div>
                )
            })}
        </div>
    )
}

export default OffsetWrapper
