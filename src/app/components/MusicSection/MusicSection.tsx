import './MusicSection.css'

const MusicSection = () => {
  return (
    <section className="music-showcase">
      <div className="container">
        <h2 className="section-title">Meu Trabalho Musical</h2>
        <p className="section-description">
          Explore minhas composições, produções e projetos musicais
        </p>
        
        <div className="music-grid">
          <div className="music-card">
            <div className="music-thumbnail">
              <div className="play-button">▶</div>
            </div>
            <div className="music-info">
              <h3 className="music-title">Composições Originais</h3>
              <p className="music-description">
                Minhas criações autorais em diversos gêneros e estilos musicais
              </p>
              <div className="music-tags">
                <span className="music-tag">Instrumental</span>
                <span className="music-tag">Eletrônica</span>
                <span className="music-tag">Experimental</span>
              </div>
            </div>
          </div>
          
          <div className="music-card">
            <div className="music-thumbnail">
              <div className="play-button">▶</div>
            </div>
            <div className="music-info">
              <h3 className="music-title">Produções</h3>
              <p className="music-description">
                Trabalhos de produção, mixagem e masterização para outros artistas
              </p>
              <div className="music-tags">
                <span className="music-tag">Mixagem</span>
                <span className="music-tag">Masterização</span>
                <span className="music-tag">Arranjos</span>
              </div>
            </div>
          </div>
          
          <div className="music-card">
            <div className="music-thumbnail">
              <div className="play-button">▶</div>
            </div>
            <div className="music-info">
              <h3 className="music-title">Colaborações</h3>
              <p className="music-description">
                Projetos em conjunto com outros músicos e artistas visuais
              </p>
              <div className="music-tags">
                <span className="music-tag">Colaborativo</span>
                <span className="music-tag">Multimídia</span>
                <span className="music-tag">Live Performance</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="music-cta">
          <a href="/musica" className="primary-button">Explorar Portfolio Musical</a>
        </div>
      </div>
    </section>
  )
}

export default MusicSection