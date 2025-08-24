'use client'

import { useState } from 'react';
import './MusicSection.css'

const MusicSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const youtubeVideos = [
    {
      id: "q0P-VZ8MmTk",
      title: "Science & Soul",
      description: " ",
      tags: ['Eletronic', 'Original', '2025']
    },
    {
      id: "9qkJ_puADmI",
      title: "Where The Light Hits",
      description: " ",
      tags: ['Metal', 'Original', '2025']
    },
    {
      id: "jMHTP_qOOQ0",
      title: "Where iz Maballz",
      description: " ",
      tags: ['Eletronic', 'Original', '2025']
    }
  ];

  const openModal = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="music-showcase">
      <div className="container">
        <h2 className="section-title">Meu Trabalho Musical</h2>
        <p className="section-description">
          Explore minhas composições, produções e projetos musicais
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

        {/* Modal para exibir o vídeo */}
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
        
        <div className="music-cta">
          <a href="/musica" className="primary-button">Explorar Portfolio Musical</a>
        </div>
      </div>
    </section>
  )
}

export default MusicSection