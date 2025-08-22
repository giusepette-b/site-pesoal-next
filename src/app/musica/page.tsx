import UnderConstruction from "../components/UnderContruction/UnderConstruction";

export default function Musica() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Música</h1>
      <p>Esta é a página dedicada à música.</p>
      <p>Em breve, adicionaremos conteúdo relacionado à música.</p>
      <UnderConstruction />
    </div>
  );
}