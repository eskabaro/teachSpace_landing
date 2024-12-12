'use client'
import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import classnames from '@shared/lib/classnames'
import Background from '../Background'
import Button from '../Button'
import Flex, { HorizontalFlex } from '../Flex'
import s from './Accordion.module.scss'

interface Props<T extends string> {
    id: T
    activeId: T
    setActiveId: (id: T) => void
    header: (isOpen: boolean, toggle: () => void) => ReactNode
    body: (isOpen: boolean, toggle: () => void) => ReactNode
    withoutArrow?: boolean
    wrapperClassName?: string
}

const Accordion = <T extends string>({ id, activeId, setActiveId, header, body, withoutArrow, wrapperClassName }: Props<T>): JSX.Element => {
    const bodyRef = useRef<HTMLDivElement | null>(null)
    const [bodyHeight, setBodyHeight] = useState<number | undefined>(undefined)
    const isOpened = activeId === id
    const toggle = () => setActiveId(activeId === id && !isOpened ? ('' as T) : id)

    useEffect(() => {
        const element = bodyRef.current

        if (!element) return

        const updateHeight = () => isOpened && setBodyHeight(element.scrollHeight)

        const resizeObserver = new ResizeObserver(updateHeight)
        const mutationObserver = new MutationObserver(updateHeight)

        resizeObserver.observe(element)
        mutationObserver.observe(element, {
            childList: true,
            subtree: true,
            characterData: true
        })

        setBodyHeight(element.scrollHeight)

        return () => {
            resizeObserver.unobserve(element)
            resizeObserver.disconnect()
            mutationObserver.disconnect()
        }
    }, [isOpened])

    return (
        <Background className={classnames(s.main, isOpened && s.opened)}>
            <Flex direction='column' grow>
                <HorizontalFlex className={s.header} as='button' type='button' align='center' justify='between' gap='3' onClick={toggle}>
                    {header(isOpened, toggle)}
                    {!withoutArrow && <Button className={s.toggler} as='div' variant='transparent' size='large' icon='arrow-top' mode='icon' />}
                </HorizontalFlex>
                <div
                    ref={bodyRef}
                    className={s.body}
                    style={{
                        maxHeight: isOpened ? bodyHeight : 0
                    }}
                >
                    <div className={classnames(s.body_wrapper, wrapperClassName)}>{body(isOpened, toggle)}</div>
                </div>
            </Flex>
        </Background>
    )
}

export default Accordion
