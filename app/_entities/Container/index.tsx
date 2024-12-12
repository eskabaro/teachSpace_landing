import Image from 'next/image'
import type { FC, PropsWithChildren } from 'react'
import footerBgLeft from '@shared/assets/images/footer-bg-left.png'
import footerBgRight from '@shared/assets/images/footer-bg-right.png'
import s from './Container.module.scss'

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className={s.main}>
            <div className={s.main_wrapper}>{children}</div>
            <Image className={s.main_bgLeft} src={footerBgLeft} width={1440} height={352} alt='' />
            <Image className={s.main_bgRight} src={footerBgRight} width={1440} height={352} alt='' />
        </div>
    )
}

export default Container
