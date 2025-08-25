'use client'

import Calculadora from "../components/Calculadora/Calculadora"
import "./Exemplos.css"

export default function Exemplos() {
  return (
    <div className="exemplos-container">
      <h1 className="exemplos-title">Exemplos de Programação</h1>
      
      <div className="exemplos-sections">
        {/* Section da Calculadora */}
        <section className="exemplos-section" id="calculadora">
          <div className="exemplos-section-header">
            <h2 className="exemplos-section-title">Calculadora Interativa</h2>
            <p className="exemplos-section-subtitle">
              Uma calculadora funcional desenvolvida com TypeScript e React
            </p>
          </div>
          
          <div className="exemplos-section-content">
            <div className="exemplos-description">
              <p>
                Esta calculadora demonstra conceitos fundamentais de programação como:
              </p>
              <ul className="exemplos-list">
                <li>Manipulação de estado com React Hooks</li>
                <li>Lógica de operações matemáticas</li>
                <li>Tratamento de inputs do usuário</li>
                <li>Design responsivo com CSS moderno</li>
                <li>TypeScript para type safety</li>
              </ul>
            </div>
            
            <div className="exemplos-center-content">
              <Calculadora />
            </div>
          </div>
        </section>

        {/* Section para Futuros Projetos - Exemplo 1 */}
        <section className="exemplos-section" id="todo-app">
          <div className="exemplos-section-header">
            <h2 className="exemplos-section-title">Gerenciador de Tarefas</h2>
            <p className="exemplos-section-subtitle">
              Um aplicativo para gerenciar suas tarefas diárias
            </p>
          </div>
          
          <div className="exemplos-section-content">
            <div className="exemplos-description">
              <p>
                Próximo projeto em desenvolvimento: Um gerenciador de tarefas completo com 
                funcionalidades de CRUD, filtros e persistência de dados.
              </p>
              <p>
                Tecnologias que serão utilizadas:
              </p>
              
              <div className="exemplos-tech-cards">
                <div className="exemplos-tech-card">
                  <h4>React + TypeScript</h4>
                  <p>Interface de usuário componentizada com type safety</p>
                </div>
                <div className="exemplos-tech-card">
                  <h4>LocalStorage API</h4>
                  <p>Persistência de dados no navegador do usuário</p>
                </div>
                <div className="exemplos-tech-card">
                  <h4>CSS Modules</h4>
                  <p>Estilização modularizada e escopada</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section para Futuros Projetos - Exemplo 2 */}
        <section className="exemplos-section" id="weather-api">
          <div className="exemplos-section-header">
            <h2 className="exemplos-section-title">API de Clima</h2>
            <p className="exemplos-section-subtitle">
              Integração com API externa para dados meteorológicos
            </p>
          </div>
          
          <div className="exemplos-section-content">
            <div className="exemplos-description">
              <p>
                Projeto de integração com API externa para mostrar dados meteorológicos 
                em tempo real baseado na localização do usuário.
              </p>
              
              <div className="exemplos-tech-cards">
                <div className="exemplos-tech-card">
                  <h4>Fetch API</h4>
                  <p>Requisições HTTP para APIs externas</p>
                </div>
                <div className="exemplos-tech-card">
                  <h4>Geolocation API</h4>
                  <p>Obtenção da localização do usuário</p>
                </div>
                <div className="exemplos-tech-card">
                  <h4>React Hooks</h4>
                  <p>Gerenciamento de estado e efeitos colaterais</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section para Futuros Projetos - Exemplo 3 */}
        <section className="exemplos-section" id="memory-game">
          <div className="exemplos-section-header">
            <h2 className="exemplos-section-title">Jogo da Memória</h2>
            <p className="exemplos-section-subtitle">
              Jogo interativo para testar a memória visual
            </p>
          </div>
          
          <div className="exemplos-section-content">
            <div className="exemplos-description">
              <p>
                Jogo da memória desenvolvido com React, featuring animações suaves 
                e sistema de pontuação.
              </p>
              
              <ul className="exemplos-list">
                <li>Lógica de game state management</li>
                <li>Animações CSS e transições</li>
                <li>Sistema de timer e pontuação</li>
                <li>Design responsivo para mobile</li>
                <li>Efeitos sonoros com Web Audio API</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section de Tecnologias */}
        <section className="exemplos-section" id="technologies">
          <div className="exemplos-section-header">
            <h2 className="exemplos-section-title">Tecnologias Dominadas</h2>
            <p className="exemplos-section-subtitle">
              Stack tecnológico e ferramentas de desenvolvimento
            </p>
          </div>
          
          <div className="exemplos-section-content">
            <div className="exemplos-tech-grid">
              <div className="exemplos-tech-card">
                <h4>Frontend</h4>
                <p>React, Next.js, TypeScript, HTML5, CSS3, JavaScript ES6+</p>
              </div>
              
              <div className="exemplos-tech-card">
                <h4>Backend</h4>
                <p>Node.js, Express, APIs REST, PostgreSQL, MongoDB</p>
              </div>
              
              <div className="exemplos-tech-card">
                <h4>Ferramentas</h4>
                <p>Git, GitHub, VS Code, Figma, Photoshop, Webpack</p>
              </div>
              
              <div className="exemplos-tech-card">
                <h4>Mobile</h4>
                <p>React Native, Expo, Responsive Design, PWA</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}