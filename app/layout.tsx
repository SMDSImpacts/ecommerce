import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav, AdsBar, MenuBar, Footer, FooterSub } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sell on ShopOK | Shop Online',
  description: 'ShopOK is your online Shop in Enugu Nigeria',
  keywords: ['ShopOk', 'Shop in Enugu', 'online shop in Enugu']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="app">
          <div className=''>
            <div className=''>
              <AdsBar />
            </div>
            <div className='sticky top-0 sticky-top-offset-56 flex flex-col w-full'>
            <div className='navcolor text-white' >
              <div className='max-w-screen-xl mx-auto'>
              <Nav />
              </div>
            </div>
            <div className='bg-pink-900 text-white'>
              <div className="max-w-screen-xl mx-auto">
                <MenuBar />
              </div>
              </div>
            </div>
            <div>{children}</div>
            <div>
              <FooterSub />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
