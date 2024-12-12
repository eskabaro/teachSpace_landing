export const lockScroll = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.body.style.paddingRight = `${scrollbarWidth}px`
    document.body.classList.add('scroll-lock')

    const fixedElements = document.querySelectorAll<HTMLElement>('.fixed')

    fixedElements.forEach((el) => {
        el.style.paddingRight = `${scrollbarWidth}px`
    })
}

export const unlockScroll = () => {
    document.body.style.removeProperty('padding-right')
    document.body.classList.remove('scroll-lock')

    const fixedElements = document.querySelectorAll<HTMLElement>('.fixed')

    fixedElements.forEach((el) => {
        el.style.removeProperty('padding-right')
    })
}
