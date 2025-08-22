'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import './Header.css'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Programação', href: '/programacao' },
  { name: 'Música', href: '/musica' },
  { name: 'Contato', href: '/contato' },
  { name: 'Sobre', href: '/sobre' },
]

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const getLinkClass = (href: string) => {
    const baseClass = 'header-nav-link'
    
    const isActive = 
      pathname === href || 
      (href !== '/' && pathname.startsWith(href)) ||
      (pathname === '/' && href === '/')
    
    return isActive ? `${baseClass} header-nav-link-active` : baseClass
  }

  const getMobileLinkClass = (href: string) => {
    const baseClass = 'header-mobile-nav-link'
    
    const isActive = 
      pathname === href || 
      (href !== '/' && pathname.startsWith(href)) ||
      (pathname === '/' && href === '/')
    
    return isActive ? `${baseClass} header-mobile-nav-link-active` : baseClass
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="header-logo">
          Bruno Giusepette - Delfos-B
        </Link>

        <nav className="header-nav">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={getLinkClass(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button 
          className="header-mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Menu de navegação"
        >
          <span className="header-sr-only">Abrir menu</span>
          <div className="header-menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className={`header-mobile-nav ${isMobileMenuOpen ? 'header-mobile-nav-open' : ''}`}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={getMobileLinkClass(item.href)}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}