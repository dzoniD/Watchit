import './globals.css'
import Header from '../components/header/Header';

import { Inter } from 'next/font/google'
import MobileHeader from '@/components/header/MobileHeader';
import MobileFooter from '@/components/Footer/MobileFooter';

export const metadata = {
  title: 'Watchit',
  description: 'Generated by create next app',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {false ? <Header/> : <MobileHeader/>} 
        {children}
        <MobileFooter/>
      </body>
    </html>
  )
}
