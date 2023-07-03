import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import './globals.css'
 
export const metadata: Metadata = {
  title: 'EASYB2B Onboard',
  description: 'Next Gereration B2B Buy and Sales',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='background'>{children}</body>
    </html>
  )
}