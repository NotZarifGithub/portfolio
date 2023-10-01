import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import './globals.css'
import { AR_One_Sans } from 'next/font/google'

const  aos = AR_One_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Begin',
  description: 'My journey begins',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${aos.className} max-w-[1100px] m-auto `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
