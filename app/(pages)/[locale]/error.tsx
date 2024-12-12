'use client'
import Button from '@shared/ui/Button'
import { VerticalFlex } from '@shared/ui/Flex'
import { Title } from '@shared/ui/Typography'

const index = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
        <VerticalFlex className='min_h100p' gap='4' align='center' justify='center' grow>
            <Title>{error.message}</Title>
            <Button onClick={reset} type='button'>
                Reset
            </Button>
        </VerticalFlex>
    )
}

export default index
