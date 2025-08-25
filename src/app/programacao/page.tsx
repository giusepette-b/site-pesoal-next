import TodoApp from "../components/Todo/TodoApp"
import Calculadora from "../components/Calculadora/Calculadora"
import "./Exemplos.css"

export default function Exemplos() {
  return (
    <div className="exemplos-container">
      <h1 className="exemplos-title">Exemplos de Programação</h1>
      
      <div className="exemplos-sections">
        {/* Section do Todo App */}
        <section className="exemplos-section" id="todo-app">
          <div className="exemplos-section-header">
            <h2 className="exemplos-section-title">Gerenciador de Tarefas</h2>
            <p className="exemplos-section-subtitle">
              Aplicativo completo com CRUD, filtros e persistência de dados
            </p>
          </div>
          
          <div className="exemplos-section-content">
            <TodoApp />
          </div>
        </section>

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
      </div>
    </div>
  )
}