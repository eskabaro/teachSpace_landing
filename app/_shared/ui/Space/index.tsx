import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react'
import type { ColorsType } from '@shared/const/colors'
import { extractUiProps, type BaseUiType, type UiComponentType, type UiType } from '@shared/lib/types/uiClasses'
import classNamesResolver, { uiClasses } from '@shared/lib/uiClasses'
import classnames from '../../lib/classnames'

type AdditionalFPropsType<T extends UiComponentType | ComponentType<any>> = T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : ComponentPropsWithoutRef<T>
export type Props<T extends UiComponentType | ComponentType<any>> = UiType<
    BaseUiType,
    {
        as?: UiComponentType
        children?: ReactNode
        className?: string
        color?: ColorsType
        backgroundColor?: ColorsType
    }
> &
    AdditionalFPropsType<T>

const Space = <T extends UiComponentType | ComponentType<any>>({ as: Component = 'div', children, className, color, backgroundColor, ...restProps }: Props<T>): JSX.Element => {
    const [uiProps, componentProps] = extractUiProps(restProps)

    return (
        <Component className={classnames(uiClasses(uiProps), classNamesResolver('color_', color), classNamesResolver('background_', backgroundColor), className)} {...componentProps}>
            {children}
        </Component>
    )
}

export default Space
