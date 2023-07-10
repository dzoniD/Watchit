import './globals.css'
import Header from '../components/header/Header';

export const metadata = {
  title: 'Watchit',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}</body>
    </html>
  )
}
