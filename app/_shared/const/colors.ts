export const colors = {
    white: 'white',
    gradient: 'gradient',
    secondaryGradient: 'secondaryGradient',
    gradientSkeleton: 'gradientSkeleton',

    // Blue
    neutral15: 'neutral15',
    neutral25: 'neutral25',
    neutral50: 'neutral50',
    neutral100: 'neutral100',
    neutral150: 'neutral150',
    neutral200: 'neutral200',
    neutral300: 'neutral300',
    neutral400: 'neutral400',
    neutral500: 'neutral500',
    neutral600: 'neutral600',
    neutral700: 'neutral700',
    neutral800: 'neutral800',
    neutral900: 'neutral900',
    neutral50p: 'neutral50p',

    // Orange
    primary15: 'primary15',
    primary25: 'primary25',
    primary50: 'primary50',
    primary100: 'primary100',
    primary150: 'primary150',
    primary200: 'primary200',
    primary300: 'primary300',
    primary400: 'primary400',
    primary500: 'primary500',
    primary600: 'primary600',
    primary700: 'primary700',
    primary900: 'primary900',

    // Gray
    gray15: 'gray15',

    // Green
    success50: 'success50',
    success600: 'success600',

    // Red
    danger50: 'danger50',
    danger500: 'danger500'
} as const
export type ColorsType = (typeof colors)[keyof typeof colors]
