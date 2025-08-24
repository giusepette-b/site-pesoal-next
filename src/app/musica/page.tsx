'use client'

import { useState } from 'react';
import './MusicPage.css'

const Musica= () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeTimelineItem, setActiveTimelineItem] = useState<number>(0);
  
  const youtubeVideos = [
    {
      id: "q0P-VZ8MmTk",
      title: "Science & Soul",
      description: "Um pouco de filosofia e citações ocultas em plena audição.",
      tags: ['Eletrônica', 'Experimental', '2025']
    },
    {
      id: "9qkJ_puADmI",
      title: "Where The Light Hits",
      description: "Composição de metal progressivo, algo que esteve sempre comigo",
      tags: ['Metal Progressivo', 'Rock', '2025']
    },
    {
      id: "jMHTP_qOOQ0",
      title: "Where iz Maballz",
      description: "Sobre processos criativos...",
      tags: ['Eletrônica', 'Beats', '2025']
    }
  ];

  const timelineData = [
    {
      year: "2002",
      title: "Primeiros Passos na Música",
      description: 'Ainda criança, sentei numa bateria, e consegui acompanhar uma banda tocando "Smells like teen Spirit".'
    },
    {
      year: "2008",
      title: "Primeiros Shows",
      description: "Dentre diversos estilos, tanto brasileiros quanto internacionais, me moldei na bateria"
    },
    {
      year: "2010",
      title: "Outros instrumentos",
      description: "Começo a me interessar a praticar a fundo outros intrumentos, como guitarra, baixo, piano. Por consequência, os aprendo"
    },
    {
      year: "2015",
      title: "Hiato",
      description: "Entre ídas e vindas de bandas, de serventia, houveram algumas poucas composições."
    },
    {
      year: "2019",
      title: "Pandemia - Auge criativo",
      description: "Desde então, venho me dedicado profundamente à composição e produção musical, usando de toda minha experiência."
    }
  ];

  const openModal = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="music-journey">
      <div className="container">
        {/* Cabeçalho Hero */}
        <div className="journey-hero">
          <h1 className="hero-title">Minha Jornada Musical</h1>
          <p className="hero-subtitle">
            Explorando a interseção entre metal progressivo e eletrônica experimental
          </p>
        </div>

        {/* Seção de Introdução */}
        <div className="intro-section">
          <div className="intro-content">
            <h2>Da Descoberta à Expressão</h2>
            <div className="intro-text">
              <p>
                Minha trajetória na música começou como uma busca por expressão pessoal e 
                evoluiu para uma exploração profunda de sonoridades que conectam o orgânico 
                ao eletrônico, o caótico ao melódico.
              </p>
              <p>
                Com influências que vão do metal progressivo mais complexo às paisagens 
                sonoras eletrônicas mais atmosféricas, meu trabalho busca criar pontes 
                entre universos sonoros aparentemente distantes.
              </p>
              <p>
                Cada composição é uma jornada - um experimento em texturas, emoções 
                e narrativas sonoras que refletem minha evolução constante como artista.
              </p>
            </div>
          </div>
          <div className="intro-stats">
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Composições</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Gêneros Principais</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Possibilidades Sonoras</span>
            </div>
          </div>
        </div>

        {/* Linha do Tempo Interativa */}
        <div className="timeline-section">
          <h2>Linha do Tempo Musical</h2>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item ${index === activeTimelineItem ? 'active' : ''}`}
                onClick={() => setActiveTimelineItem(index)}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{item.year}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Gêneros e Influências */}
        <div className="genres-section">
          <h2>Explorando Universos Sonoros</h2>
          <div className="genres-grid">
            <div className="genre-card metal">
              <div className="genre-icon">🤘</div>
              <h3>Metal Progressivo</h3>
              <p>Complexidade rítmica, harmonias elaboradas e estruturas não convencionais</p>
              <ul className="influences-list">
                <li>Dream Theater</li>
                <li>Opeth</li>
                <li>Tool</li>
                <li>Between the Buried and Me</li>
              </ul>
            </div>
            <div className="genre-card electronic">
              <div className="genre-icon">🎛️</div>
              <h3>Eletrônica Experimental</h3>
              <p>Texturas atmosféricas, síntese modular e exploração de paisagens sonoras</p>
              <ul className="influences-list">
                <li>Aphex Twin</li>
                <li>Jon Hopkins</li>
                <li>Four Tet</li>
                <li>Flying Lotus</li>
              </ul>
            </div>
            <div className="genre-card fusion">
              <div className="genre-icon">⚡</div>
              <h3>Fusão de Gêneros</h3>
              <p>Interseção entre o pesado e o etéreo, o analógico e o digital</p>
              <ul className="influences-list">
                <li>Iglooghost</li>
                <li>Djent eletrônico</li>
                <li>IDM com elementos orgânicos</li>
                <li>Texturas industriais</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Seção de Trabalhos em Destaque */}
        <div className="featured-works">
          <h2>Trabalhos em Destaque</h2>
          <p className="section-description">
            Uma seleção das minhas composições e produções recentes
          </p>
          
          <div className="music-grid">
            {youtubeVideos.map((video, index) => (
              <div className="music-card" key={index}>
                <div className="music-thumbnail" onClick={() => openModal(video.id)}>
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                    alt={video.title}
                  />
                  <div className="play-button">▶</div>
                </div>
                <div className="music-info">
                  <h3 className="music-title">{video.title}</h3>
                  <p className="music-description">{video.description}</p>
                  <div className="music-tags">
                    {video.tags.map((tag, tagIndex) => (
                      <span className="music-tag" key={tagIndex}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Plataformas */}
        <div className="platforms-section">
          <h2>Onde Encontrar Minha Música</h2>
          <div className="platforms-grid">
            <a href="https://www.youtube.com/@Delfos-B" target="_blank" rel="noopener noreferrer" className="platform-card youtube">
              <div className="platform-icon">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </div>
              <h3>YouTube</h3>
              <p>Visualizações e composições completas</p>
              <span className="platform-link">Ver Canal</span>
            </a>
            
            <a href="https://open.spotify.com/artist/6GvBdcfuo4i8lI8bFegEz0?si=ZEWZcOPAQaKU58LgdLJnkw" target="_blank" rel="noopener noreferrer" className="platform-card spotify">
              <div className="platform-icon">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <h3>Spotify</h3>
              <p>Discografia completa para streaming</p>
              <span className="platform-link">Ouvir no Spotify</span>
            </a>
          </div>
        </div>

        {/* Seção de Processo Criativo */}
        <div className="process-section">
          <h2>Processo Criativo</h2>
          <div className="process-content">
            <div className="process-text">
              <p>
                Meu processo de composição geralmente começa com uma ideia orgânica - um riff de guitarra, 
                uma progressão harmônica ou um padrão rítmico - que depois é desenvolvida e expandida 
                através de camadas de produção digital.
              </p>
              <p>
                Uso uma variedade de equipamentos analógicos e digitais, desde guitarras e pedais 
                até sintetizadores modulares e softwares de produção, buscando sempre o equilíbrio 
                entre a intensidade do metal e a textura da música eletrônica.
              </p>
              <p>
                Cada peça musical é uma exploração de contrastes: peso e leveza, caos e ordem, 
                escuridão e luz - sempre com uma narrativa emocional em seu centro.
              </p>
            </div>
            <div className="process-image">
              <div className="equipment-list">
                <h4>Ferramentas e Equipamentos</h4>
                <ul>
                  <li>Guitarras e baixo</li>
                  <li>Sintetizadores modulares</li>
                  <li>Pedais de efeitos</li>
                  <li>DAW: Ableton Live</li>
                  <li>Controladores MIDI</li>
                  <li>Microfones e interface de áudio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Modal para vídeos */}
        {selectedVideo && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              <div className="youtube-embed">
                <iframe 
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Musica