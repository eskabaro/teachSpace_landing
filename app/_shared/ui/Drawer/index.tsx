import Image from 'next/image'
import { useEffect, type ReactNode } from 'react'
import classnames from '@shared/lib/classnames'
import { lockScroll, unlockScroll } from '@shared/lib/utils'
import Portal from '../Portal'
import Transition from '../Transition'
import bgImg from './assets/pattern.png'
import s from './Drawer.module.scss'
import DrawerBody from './ui/Body'
import DrawerFooter from './ui/Footer'
import DrawerHeader from './ui/Header'

interface Props {
    isOpen: boolean
    children: ReactNode
    close?: () => void
    contentClassName?: string
}

const Drawer = ({ isOpen, close, contentClassName, children }: Props): JSX.Element => {
    useEffect(() => {
        ;(isOpen ? lockScroll : unlockScroll)()
    }, [isOpen])

    return (
        <Portal>
            <Transition
                isOpen={isOpen}
                classNames={{
                    entered: s.entered,
                    entering: s.entering,
                    exited: s.exited,
                    exiting: s.exiting
                }}
            >
                <div className={s.main}>
                    <div className={s.main_layout} onClick={close}>
                        <div className={classnames(s.main_content, contentClassName)} onClick={(e) => e.stopPropagation()}>
                            <div className={s.main_overflow}>{children}</div>
                            <Image className={s.main_img} src={bgImg} width={1372} height={1552} alt='' />
                        </div>
                    </div>
                </div>
            </Transition>
        </Portal>
    )
}

Drawer.Header = DrawerHeader
Drawer.Body = DrawerBody
Drawer.Footer = DrawerFooter

export default Drawer
