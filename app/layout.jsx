import '/styles/globals.css'

import NavBar from '@/components/NavBar'

export const metadata = {
  title: 'To do',
  description: 'Create your to do list',
  icons: {
    icon: "/4021693.png"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#5874a2]'>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
