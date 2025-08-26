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
              <span className="contact-info-label">Resposta em até 24h</span>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>+55 (11) 98388-1295</p>
              <span className="contact-info-label">Disponível das 9h às 18h</span>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">🌐</div>
              <h3>Redes Sociais</h3>
              <p>LinkedIn / GitHub / Instagram</p>
              <span className="contact-info-label">Me siga para updates</span>
            </div>
          </div>

          <div className="contact-form-placeholder">
            <h3>Formulário Temporariamente Indisponível</h3>
            <p>No momento, o formulário de contato está em manutenção.</p>
            <p>Por favor, utilize um dos métodos de contato ao lado para entrar em contato comigo.</p>
            <div className="placeholder-actions">
              <a href="mailto:bruno.giusepette@gmail.com" className="cta-button cta-button-primary">
                Enviar Email Direto
              </a>
              <a href="https://wa.me/5511983881295" className="cta-button cta-button-secondary">
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h2>Vamos trabalhar juntos?</h2>
          <p>Entre em contato através dos canais acima para discutir seu projeto</p>
          <div className="contact-cta-buttons">
            <a href="mailto:bruno.giusepette@gmail.com" className="cta-button cta-button-primary">
              Enviar Email
            </a>
            <a href="https://wa.me/5511983881295" className="cta-button cta-button-secondary">
              WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/bruno-giusepette-643956224/" className="cta-button cta-button-tertiary">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}