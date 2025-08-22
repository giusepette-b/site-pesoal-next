import type { Metadata } from 'next'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meu Site Didático',
  description: 'Site de apresentação com exemplos didáticos de programação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}