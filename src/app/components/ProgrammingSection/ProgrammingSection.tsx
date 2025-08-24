'use client'

import { ReactNode } from 'react'
import './Programming.css'

interface ProgrammingSectionProps {
  title: string
  subtitle?: string
  children: ReactNode
  id?: string
  className?: string
}

const ProgrammingSection = ({ 
  title, 
  subtitle, 
  children, 
  id, 
  className = '' 
}: ProgrammingSectionProps) => {
  return (
    <section 
      id={id} 
      className={`programming-section ${className}`}
    >
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      
      <div className="section-content">
        {children}
      </div>
    </section>
  )
}

export default ProgrammingSection