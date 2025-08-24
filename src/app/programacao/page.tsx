import Calculadora from "../components/Calculadora/Calculadora"
import ProgrammingSection from "../components/ProgrammingSection/ProgrammingSection"

export default function Exemplos() {
  return (
    <div className="programming-container">
      <h1 className="programming-title">Projetos de Programação</h1>
      
      <div className="programming-sections">
        {/* Section da Calculadora */}
        <ProgrammingSection
          title="Calculadora Interativa"
          subtitle="Uma calculadora funcional desenvolvida com TypeScript e React"
          id="calculadora"
        >
          <div className="section-description">
            <p>
              Esta calculadora demonstra conceitos fundamentais de programação como:
            </p>
            <ul className="section-list">
              <li>Manipulação de estado com React Hooks</li>
              <li>Lógica de operações matemáticas</li>
              <li>Tratamento de inputs do usuário</li>
              <li>Design responsivo com CSS moderno</li>
              <li>TypeScript para type safety</li>
            </ul>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Calculadora />
          </div>
        </ProgrammingSection>

        {/* Section para Futuros Projetos - Exemplo 1 */}
        <ProgrammingSection
          title="Gerenciador de Tarefas"
          subtitle="Um aplicativo para gerenciar suas tarefas diárias"
          id="todo-app"
        >
          <div className="section-description">
            <p>
              Próximo projeto em desenvolvimento: Um gerenciador de tarefas completo com 
              funcionalidades de CRUD, filtros e persistência de dados.
            </p>
            <p>
              Tecnologias que serão utilizadas:
            </p>
            
            <div className="tech-cards">
              <div className="tech-card">
                <h4>React + TypeScript</h4>
                <p>Interface de usuário componentizada com type safety</p>
              </div>
              <div className="tech-card">
                <h4>LocalStorage API</h4>
                <p>Persistência de dados no navegador do usuário</p>
              </div>
              <div className="tech-card">
                <h4>CSS Modules</h4>
                <p>Estilização modularizada e escopada</p>
              </div>
            </div>
          </div>
        </ProgrammingSection>

        {/* Section para Futuros Projetos - Exemplo 2 */}
        <ProgrammingSection
          title="API de Clima"
          subtitle="Integração com API externa para dados meteorológicos"
          id="weather-api"
        >
          <div className="section-description">
            <p>
              Projeto de integração com API externa para mostrar dados meteorológicos 
              em tempo real baseado na localização do usuário.
            </p>
            
            <div className="tech-cards">
              <div className="tech-card">
                <h4>Fetch API</h4>
                <p>Requisições HTTP para APIs externas</p>
              </div>
              <div className="tech-card">
                <h4>Geolocation API</h4>
                <p>Obtenção da localização do usuário</p>
              </div>
              <div className="tech-card">
                <h4>React Hooks</h4>
                <p>Gerenciamento de estado e efeitos colaterais</p>
              </div>
            </div>
          </div>
        </ProgrammingSection>

        {/* Section para Futuros Projetos - Exemplo 3 */}
        <ProgrammingSection
          title="Jogo da Memória"
          subtitle="Jogo interativo para testar a memória visual"
          id="memory-game"
        >
          <div className="section-description">
            <p>
              Jogo da memória desenvolvido com React, featuring animações suaves 
              e sistema de pontuação.
            </p>
            
            <ul className="section-list">
              <li>Lógica de game state management</li>
              <li>Animações CSS e transições</li>
              <li>Sistema de timer e pontuação</li>
              <li>Design responsivo para mobile</li>
              <li>Efeitos sonoros com Web Audio API</li>
            </ul>
          </div>
        </ProgrammingSection>

        {/* Section de Tecnologias */}
        <ProgrammingSection
          title="Tecnologias Dominadas"
          subtitle="Stack tecnológico e ferramentas de desenvolvimento"
          id="technologies"
        >
          <div className="section-grid">
            <div className="tech-card">
              <h4>Frontend</h4>
              <p>React, Next.js, TypeScript, HTML5, CSS3, JavaScript ES6+</p>
            </div>
            
            <div className="tech-card">
              <h4>Backend</h4>
              <p>Node.js, Express, APIs REST, PostgreSQL, MongoDB</p>
            </div>
            
            <div className="tech-card">
              <h4>Ferramentas</h4>
              <p>Git, GitHub, VS Code, Figma, Photoshop, Webpack</p>
            </div>
            
            <div className="tech-card">
              <h4>Mobile</h4>
              <p>React Native, Expo, Responsive Design, PWA</p>
            </div>
          </div>
        </ProgrammingSection>
      </div>
    </div>
  )
}
