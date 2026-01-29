import { Bricolage_Grotesque, Inter, Lusitana, Plus_Jakarta_Sans } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
    weight: ['500', '700'],
    subsets: ['latin'],
    variable: '--font-body',
});

export const briColage = Bricolage_Grotesque({
    weight: ['500', '700'],
    subsets: ['latin'],
    variable: '--font-display',
})
