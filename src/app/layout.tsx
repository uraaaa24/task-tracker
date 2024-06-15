import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'

import Header from '@/components/layouts/header'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Task Tracker',
  description: 'A simple task tracker app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <main>
          <Header />
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  )
}
