import type { FC } from 'react'
import ResponsiveImage from '../ResponsiveImage'
import Space from '../Space'
import macbookImg from './assets/macbook.png'
import s from './VideoFrame.module.scss'

interface VideoFrameProps {
    videoId: string
}

const VideoWrapper: FC<VideoFrameProps> = ({ videoId }) => {
    return (
        <Space className={s.main}>
            <ResponsiveImage desktop={{ classNameBlock: s.preview, src: macbookImg, alt: '', placeholder: 'empty', priority: true }} mobile={{ classNameBlock: s.preview, src: macbookImg, alt: '', placeholder: 'empty', priority: true }} />
            <iframe className={s.main_video} src={`https://www.youtube.com/embed/${videoId}`} allow='accelerometer; clipboard-write; encrypted-media; gyroscope' allowFullScreen />
        </Space>
    )
}

export default VideoWrapper
