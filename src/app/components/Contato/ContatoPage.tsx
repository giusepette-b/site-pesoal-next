'use client'

import { useState } from 'react'
import './ContatoPage.css'
import UnderConstruction from '../UnderContruction/UnderConstruction'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulação de envio (substitua por sua API real)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simula delay
      
      // Aqui você faria a requisição para sua API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Entre em Contato</h1>
          <p className="contact-subtitle">
            Estou disponível para projetos, colaborações e oportunidades. Vamos conversar!
          </p>
        </div>
        <UnderConstruction /> 
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
              <p>+55 (11) 98388-1295 </p>
              <span className="contact-info-label">Disponível das 9h às 18h</span>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">🌐</div>
              <h3>Redes Sociais</h3>
              <p>LinkedIn / GitHub / Instagram</p>
              <span className="contact-info-label">Me siga para updates</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nome Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Seu nome completo"
                />
              
              </div>
              

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Assunto *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Selecione um assunto</option>
                <option value="projeto">Projeto de Desenvolvimento</option>
                <option value="colaboracao">Colaboração Musical</option>
                <option value="orcamento">Orçamento</option>
                <option value="duvida">Dúvida</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensagem *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                required
                rows={5}
                placeholder="Descreva sua proposta ou dúvida..."
              />
            </div>

            <button 
              type="submit" 
              className="form-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            {submitStatus === 'success' && (
              <div className="form-message form-message-success">
                ✅ Mensagem enviada com sucesso! Retornarei em breve.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-message form-message-error">
                ❌ Erro ao enviar mensagem. Tente novamente ou use outro método de contato.
              </div>
            )}
          </form>
        </div>

        <div className="contact-cta">
          <h2>Prefere conectar diretamente?</h2>
          <p>Me encontre nas redes sociais ou envie um email diretamente</p>
          <div className="contact-cta-buttons">
            <a href="mailto:bruno.giusepette@gmail.com" className="cta-button cta-button-primary">
              Enviar Email
            </a>
            <a href="https://wa.me/5511983881295" className="cta-button cta-button-secondary">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}