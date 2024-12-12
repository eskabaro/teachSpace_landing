'use client'
import type { PropsWithChildren } from 'react'
import { MenuDrawerProvider } from '@shared/providers/MenuDrawerProvider'
import Container from '@entities/Container'
import MenuDrawer from '@entities/MenuDrawer'
import Footer from '@widgets/Footer'
import Header from '@widgets/Header'

const layout = ({ children }: PropsWithChildren) => {
    return (
        <MenuDrawerProvider>
            <Container>
                <Header />
                {children}
                <Footer />
            </Container>
            <MenuDrawer />
        </MenuDrawerProvider>
    )
}

export default layout
