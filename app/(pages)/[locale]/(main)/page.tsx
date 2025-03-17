'use client'
import type { FC } from 'react'
import HowToCreate from './_ui/HowToCreate'
import JoinUs from './_ui/JoinUs'
import Preview from './_ui/Preview'
import ProblemsSolve from './_ui/ProblemsSolve'
import WhyUs from './_ui/WhyUs'

const page: FC = () => {
    return (
        <main>
            <Preview />
            <ProblemsSolve />
            <WhyUs />
            <HowToCreate />
            <JoinUs />
        </main>
    )
}

export default page
