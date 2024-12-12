'use client'
import Link from 'next/link'
import type { FC } from 'react'
import { links } from '@shared/const/links'
import { useMenuContext } from '@shared/providers/MenuDrawerProvider'
import Button from '@shared/ui/Button'
import Drawer from '@shared/ui/Drawer'
import Space from '@shared/ui/Space'

const MenuDrawer: FC = () => {
    const { isOpen, setIsOpen } = useMenuContext()

    return (
        <Drawer isOpen={isOpen} close={() => setIsOpen(false)}>
            <Drawer.Header close={() => setIsOpen(false)} />
            <Drawer.Body>
                <Space direction='vertical' gap='6'>
                    <Button as={Link} href={links.contactUs} leftIcon='arrow-left' variant='transparent'>
                        Telegram
                    </Button>
                    <Button as={Link} href={links.whatsApp} leftIcon='arrow-left' variant='transparent'>
                        WhatsApp
                    </Button>
                    <Button as={Link} href={links.bookCall} leftIcon='arrow-left' variant='transparent'>
                        Book a call
                    </Button>
                </Space>
            </Drawer.Body>
        </Drawer>
    )
}

export default MenuDrawer
