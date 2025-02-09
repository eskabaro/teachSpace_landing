import StylelintWebpackPlugin from 'stylelint-webpack-plugin'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./app/(app)/_config/i18n/index.ts')

const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [{ protocol: 'https', hostname: '*' }]
    },
    env: {
        CONTACT_US_LINK: process.env.CONTACT_US_LINK,
        BOOK_CALL_LINK: process.env.BOOK_CALL_LINK,
        WHATS_APP_LINK: process.env.WHATS_APP_LINK,
        REGISTER_LINK: process.env.REGISTER_LINK
    },

    webpack: (config) => {
        config.plugins.push(
            new StylelintWebpackPlugin({
                fix: true
            })
        )
        return config
    }
}

export default withNextIntl(nextConfig)
