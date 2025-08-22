import Link from 'next/link'
import MusicSection from './components/MusicSection/MusicSection'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome - Bem-vindo <span className="hero-accent">Bruno Giusepette Alves - 
            Delfos-B</span>
          </h1>
          <p className="hero-description">
            Um espaço para aprender e compartilhar conhecimentos sobre desenvolvimento web
            com exemplos práticos em JavaScript, HTML, CSS, React, Next.js e muito mais se tratando de programação.
            Aqui, você encontrará meu trabalho musical, incluindo composições originais, produções e colaborações com outros artistas.
          </p>
          <div className="hero-buttons">
            <Link href="/programacao" className="primary-button">
              Sobre Programação
            </Link>
            <Link href="/musica" className="primary-button">
              Sobre Delfos-B
            </Link>
            <Link href="/sobre" className="secondary-button">
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

      

      {/* Features Section */}
      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <span>JS</span>
            </div>
            <h2 className="feature-title">JavaScript</h2>
            <p className="feature-description">
              Exemplos práticos de JavaScript puro para entender os fundamentos da linguagem.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <span>CSS</span>
            </div>
            <h2 className="feature-title">HTML & CSS</h2>
            <p className="feature-description">
              Técnicas modernas de HTML e CSS para criar interfaces responsivas e acessíveis.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <span>R</span>
            </div>
            <h2 className="feature-title">React & Next.js</h2>
            <p className="feature-description">
              Projetos com React e Next.js mostrando conceitos avançados de desenvolvimento.
            </p>
          </div>
        </div>
      </section>
      {/* Seção Musical como Componente Separado */}
      <MusicSection />
    </div>
  )
}