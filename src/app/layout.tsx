import './globals.css'
import { Ubuntu } from 'next/font/google'

const typeface = Ubuntu({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Dr. Kevin Buffardi',
  description: 'Scholar website for Kevin Buffardi\'s research and teaching',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={typeface.className}>{children}</body>
    </html>
  )
}
