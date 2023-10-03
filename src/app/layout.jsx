import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'
import Head from 'next/head'

// MAIN FONT
const  roboto = Roboto({ 
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Begin',
  description: 'My journey begins',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={`${roboto.className} `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
