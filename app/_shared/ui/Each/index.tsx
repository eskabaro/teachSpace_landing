import { Children, type ReactNode } from 'react'

interface Props<T> {
    of: Array<T>
    render: (item: T, index: number) => ReactNode
}

const Each = <T,>({ of, render }: Props<T>) => {
    return Children.toArray(of.map((item, index) => render(item, index)))
}

export default Each
