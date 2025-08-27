'use client'

import './ContatoPage.css'

export default function ContactPage() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Entre em Contato</h1>
          <p className="contact-subtitle">
            Estou disponível para projetos, colaborações e oportunidades. Vamos conversar!
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">📧</div>
              <h3>Email</h3>
              <p>bruno.giusepette@gmail.com</p>
              <a href="mailto:bruno.giusepette@gmail.com" className="contact-link">
                Enviar mensagem
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>+55 (11) 98388-1295</p>
              <a href="https://wa.me/5511983881295" className="contact-link" target="_blank" rel="noopener noreferrer">
                Iniciar conversa
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">🌐</div>
              <h3>Redes Sociais</h3>
              <p>Conecte-se nas redes</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/bruno-giusepette-643956224/" aria-label="LinkedIn">
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/giusepette-b" className="social-links" aria-label="GitHub">
                  <span>GitHub</span>
                </a>
                <a href="https://www.instagram.com/giuse9319/" className="social-links" aria-label="Instagram">
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-illustration">
            <div className="illustration-container">
              <div className="illustration-icon">👨‍💻</div>
              <h3>Vamos Trabalhar Juntos?</h3>
              <p>Entre em contato através de um dos canais ao lado. Respondo rapidamente!</p>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h2>Pronto para começar seu projeto?</h2>
          <p>Entre em contato hoje mesmo para uma consulta gratuita</p>
          <div className="contact-cta-buttons">
            <a href="mailto:bruno.giusepette@gmail.com" className="cta-button cta-button-primary">
              <span>Enviar Email</span>
            </a>
            <a href="https://wa.me/5511983881295" className="cta-button cta-button-secondary">
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}