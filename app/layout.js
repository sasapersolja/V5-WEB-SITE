
import './globals.css'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Sasha Persholja — Official Site',
  description: 'Music, tour dates, press kit, and contact.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
