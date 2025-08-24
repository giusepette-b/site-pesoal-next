'iuse client';
import './SobrePage.css'

import UnderConstruction from "../components/UnderContruction/UnderConstruction";

export default function Sobre() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">Sobre Mim</h1>
          <p className="about-subtitle">
            Desenvolvedor Fullstack e Músico - Explorando a interseção entre tecnologia e arte
          </p>
        </div>

        <div className="about-content">
          {/* Seção de Programação */}
          <div className="programming-section">
            <div className="section-header">
              <div className="section-icon">💻</div>
              <h2 className="section-title">Desenvolvimento Fullstack</h2> 
            </div>
            <p className = "p-description">Estudo desenvolvimento de sistemas já fazem mais de 8 anos. Porém, agora, me sinto preparado para poder exercer a função com proeficiência</p>
            <div className="section-content">
              <div className="skill-category">
                <h3 className="category-title">Frontend</h3>
                <ul className="skills-list">
                  <li className="skill-item">
                    <span className="skill-icon">⚛️</span>
                    React & Next.js
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">🎨</span>
                    TypeScript
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">📱</span>
                    Responsive Design
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">✨</span>
                    CSS & Sass
                  </li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3 className="category-title">Backend</h3>
                <ul className="skills-list">
                  <li className="skill-item">
                    <span className="skill-icon">🟢</span>
                    Node.js
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">🗃️</span>
                    PostgreSQL & MongoDB
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">🔌</span>
                    API Development
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">🚀</span>
                    Strapi CMS
                  </li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3 className="category-title">Ferramentas & Métodos</h3>
                <ul className="skills-list">
                  <li className="skill-item">
                    <span className="skill-icon">📦</span>
                    Git & GitHub
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">🔧</span>
                    DevOps & Deployment
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">🧪</span>
                    Testing (Jest, RTL)
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">📊</span>
                    Agile & Scrum
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Seção de Música */}
          <div className="music-section">
            <div className="section-header">
              <div className="section-icon">🎵</div>
              <h2 className="section-title">Produção Musical</h2>
            </div>
             <p className = "p-description">Música é o campo que mais possuo experiência, são mais de 15 anos compondo, tocando e produzindo</p>
            <div className="section-content">
              <div className="skill-category">
                <h3 className="category-title">Instrumentos</h3>
                <ul className="skills-list">
                  <li className="skill-item">
                    <span className="skill-icon">🎸</span>
                    Guitarra
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">🎹</span>
                    Teclado & Piano
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">🥁</span>
                    Produção de Batidas
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">🎤</span>
                    Vocais & Composição
                  </li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3 className="category-title">Produção</h3>
                <ul className="skills-list">
                  <li className="skill-item">
                    <span className="skill-icon">🎚️</span>
                    Mixagem & Masterização
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">🔊</span>
                    Sound Design
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">📀</span>
                    Produção Musical
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">🎛️</span>
                    DAWs (FL Studio, Ableton)
                  </li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3 className="category-title">Gêneros & Estilos</h3>
                <ul className="skills-list">
                  <li className="skill-item">
                    <span className="skill-icon">🎸</span>
                    Rock Alternativo
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">🎧</span>
                    Eletrônica & Lo-Fi
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">🎶</span>
                    Música Experimental
                  </li>
                  <li className="skill-item">
                    <span className="skill-icon">🎼</span>
                    Trilhas Sonoras
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}