import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className='flex justify-center pt-3 fixed h-screen w-[70px] bg-gradient-to-r from-blue-950 to-blue-950/90'>
            <div className='text-white'>
              {/* FIXME: Change logo */}
              Logo
            </div>
          </div>
          <div className='pl-[70px]'>
            {children}
          </div>
          </body>
      </html>
    </ClerkProvider>
  )
}
