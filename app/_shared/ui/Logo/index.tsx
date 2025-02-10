import Image from 'next/image'
import Link from 'next/link'
import { type FC } from 'react'
import LogoImg from '@shared/assets/images/logo.svg'
import classnames from '@shared/lib/classnames'

interface Props {
    width?: number
    height?: number
    onClick?: () => void
    className?: string
}

const Logo: FC<Props> = ({ onClick, width = 140, height = 48, className }) => {
    return (
        <Link href={'/'} className={classnames('hover-opacity', className)} onClick={onClick}>
            <Image src={LogoImg} width={width} height={height} priority quality={100} alt='Tutory Logo' />
        </Link>
    )
}

export default Logo
