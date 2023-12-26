import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/cartContext/CartContext'
import { Navbar } from '@/components/Navbar/Navbar'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Market',
  description: 'test SEO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className='container'>
          <div className='wrapper'>
            <CartProvider>
              <Navbar/>
              {children}
            </CartProvider>
          </div>
        </div>
      </body>
    </html>
  )
}
