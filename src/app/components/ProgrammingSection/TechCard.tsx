'use client'

interface TechCardProps {
  title: string
  description: string
  icon?: string
}

const TechCard = ({ title, description, icon }: TechCardProps) => {
  return (
    <div className="tech-card">
      {icon && <div className="tech-icon">{icon}</div>}
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default TechCard