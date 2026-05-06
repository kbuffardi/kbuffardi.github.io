import './globals.css'
import { Ubuntu } from 'next/font/google'
import Script from 'next/script'

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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SZXJ22FZC5" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-SZXJ22FZC5');
      `}</Script>
      <body className={typeface.className}>{children}</body>
    </html>
  )
}
