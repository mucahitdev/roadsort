import './globals.css'
import { Quicksand } from 'next/font/google'

const inter = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'ROADSORT',
  description: 'roadsort',
}

export default function RootLayout({ children }) {
  console.log(inter)
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
