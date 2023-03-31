import '../styles/globals.css'

import Nav from "../components/Nav"

export const metadata = {
  title: 'Primera pagina con Next 13',
  description: 'Generated by Next.js'
}

 
export default function RootLayout ({ children }) {
 return (
    <html lang="en">
      <head>
        <title>Mi Primera pagina con nextjs 13</title>
      </head>
      <body>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
