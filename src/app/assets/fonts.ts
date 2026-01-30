import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google'

export const plusJakartaSans = Plus_Jakarta_Sans({
    weight: ['500', '700'],
    subsets: ['latin'],
    variable: '--font-body',
    display: 'swap',
});

export const briColage = Bricolage_Grotesque({
    weight: ['500', '700'],
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap',
})
