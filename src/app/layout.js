import '../styles/globals.css'
import localFont from 'next/font/local'; 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'


const lexend = localFont({
  src: [
    {
      path: '../../public/font/Lexend[wght].woff', 
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-lexend',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lexend.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Whatsapp/>
      </body>
    </html>
  )
}