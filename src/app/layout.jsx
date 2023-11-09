import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

import { Montserrat } from 'next/font/google'
const LogoFont = Montserrat({ 
  subsets: ['latin'],
  weight:['400','700','900']
})

export const metadata = {
  title: 'Hexashop',
  description: 'Discover a world of endless shopping possibilities ay our online store.Browser',
}
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={LogoFont.className}>
      <ThemeProvider>
      <div className="container">
      <Navbar/>
        {children}
        <Footer/>
      </div>
      </ThemeProvider>
      
        </body>
    </html>
  )
}
