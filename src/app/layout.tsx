import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Layout } from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seraph - Modern Server Management',
  description: 'Modern server management for the cloud era.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}