import { usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useTransition, type FC } from 'react'
import { locales } from '@shared/const/locales'
import { useLocale } from '@shared/lib/hooks'
import { closeMenu } from '@shared/state'
import Dropdown from '@shared/ui/Dropdown'
import Icon from '@shared/ui/Icon'
import s from './LanguageDropdown.module.scss'

interface Props {
    menuPosition?: 'left' | 'center' | 'right'
    label?: string
}

const LanguageDropdown: FC<Props> = ({ label, menuPosition }) => {
    const t = useTranslations()
    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocale()
    const [isPending, startTransition] = useTransition()

    return (
        <Dropdown
            hasArrow
            icon={locale}
            menuPosition={menuPosition}
            value={t(`Locales.${locale}`)}
            loading={isPending}
            menu={(_, setIsOpen) =>
                Object.keys(locales).map((key) => (
                    <button
                        className={s.button}
                        onClick={() => {
                            if (key !== locale) {
                                const newPathname = pathname
                                    .split('/')
                                    .map((path) => (path === locale ? key : path))
                                    .join('/')

                                startTransition(() => router.replace(newPathname))
                            }
                            closeMenu()
                            setIsOpen(false)
                        }}
                        type='button'
                        key={key}
                    >
                        <Icon name={key} />
                        {t(`Locales.${key}`)}
                    </button>
                ))
            }
        />
    )
}

export default LanguageDropdown
