import Image, { type ImageProps } from 'next/image'
import { type FC } from 'react'
import classnames from '@shared/lib/classnames'
import s from './ResponsiveImage.module.scss'

type ImageType = {
    classNameBlock?: string
} & ImageProps

interface Props {
    desktop: ImageType
    tablet?: ImageType
    mobile: ImageType
}

const ResponsiveImage: FC<Props> = ({ desktop, tablet, mobile }) => {
    const renderImage = (props: ImageType, className: string) => {
        const { classNameBlock, ...imageProps } = props

        if (!props) return null

        return (
            <div className={classnames(className, props.classNameBlock)}>
                <Image quality={100} {...imageProps} alt='' />
            </div>
        )
    }

    return (
        <>
            {renderImage(desktop, s.desktopImage)}
            {renderImage(tablet ? tablet : desktop, s.tabletImage)}
            {renderImage(mobile, s.mobileImage)}
        </>
    )
}

export default ResponsiveImage
