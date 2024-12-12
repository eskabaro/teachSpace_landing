import { cookies } from 'next/headers'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import type { AuthThrowThirdPartyInputType, AuthThrowThirdPartyResponseType } from '@shared/api/authThrowThirdParty'
import { AUTH_THIRD_PARTY } from '@shared/api/authThrowThirdParty'
import { getClient } from '@shared/config/apollo/getClient'
import { routes } from '@shared/const/routes'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async signIn({ account }) {
            try {
                const { data } = await getClient().mutate<AuthThrowThirdPartyResponseType, AuthThrowThirdPartyInputType>({
                    mutation: AUTH_THIRD_PARTY,
                    variables: {
                        googleIdToken: account?.id_token!
                    }
                })

                if (!data?.authThrowThirdParty) {
                    throw new Error('No AuthThrowThirdParty data')
                }

                cookies().set('token', data.authThrowThirdParty.token)

                return true
            } catch (error: any) {
                return `${routes.authError}?message=${error.message}`
            }
        }
    }
})

export { handler as GET, handler as POST }
