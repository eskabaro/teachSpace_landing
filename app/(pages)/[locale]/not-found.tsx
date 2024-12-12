'use client'
import type { FC } from 'react'
import { VerticalFlex } from '@shared/ui/Flex'
import { Title } from '@shared/ui/Typography'

export const index: FC = () => {
    return (
        <VerticalFlex className='min_h100p' gap='4' align='center' justify='center' grow>
            <Title>Page Not Found</Title>
            {/* <Button as={Link} variant='secondary' href={routes.dailyPlanner}>
                Home
            </Button> */}
        </VerticalFlex>
    )
}

export default index
