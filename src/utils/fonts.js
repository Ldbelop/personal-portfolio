import { Inter, Poppins, Calistoga } from 'next/font/google'

export const inter = Inter({
  weight: ['400','500'],
  subsets: ['latin'],
  variable: '--inter-font'
})

export const poppins = Poppins({
  weight: ['400','500','600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--poppins-font'
})

export const calistoga = Calistoga({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--calistoga-font'
})