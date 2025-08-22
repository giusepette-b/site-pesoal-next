import ContatoPage from '../components/Contato/ContatoPage'  


export default function Contato() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contato</h1>
      <p>Página de contato.</p>
      <ContatoPage />
    </div>
  )
}