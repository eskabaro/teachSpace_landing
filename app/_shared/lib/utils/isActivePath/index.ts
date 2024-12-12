import type { LocaleType } from '@shared/const/locales'
import { locales } from '@shared/const/locales'
import type { RoutesType } from '@shared/const/routes'
import { routes } from '@shared/const/routes'

const isActivePath = (fullPathname: string, keyRoute: RoutesType): boolean => {
    const href = routes[keyRoute]
    const pathnameWithoutLang =
        fullPathname
            .split('/')
            .filter((path) => !locales[path as LocaleType])
            .join('/') || '/'

    const mainHrefs: Array<(typeof routes)[keyof typeof routes]> = ['/', '/create-lesson', '/change-lesson']

    if (mainHrefs.includes(href) && mainHrefs.includes(pathnameWithoutLang as any)) {
        return true
    }

    if (href !== '/' && pathnameWithoutLang.startsWith(href)) {
        return true
    }

    return false
}

export default isActivePath
