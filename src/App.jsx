import './App.css'
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Banner } from './components/Banner'
import { Tema } from './components/Tema'

function App() {
  const temas = [
    { id: 1, nome: "front-end" },
    { id: 2, nome: "back-end" },
    { id: 3, nome: "devops" },
    { id: 4, nome: "inteligência artificial" },
    { id: 5, nome: "data science" },
    { id: 6, nome: "cloud" },
    { id: 7, nome: "database" },
  ];

  return (
    <>
      <main>
        <header>
          <img src="/logo.png" alt="App evento logo" />
        </header>
        <Banner />
        <FormularioDeEvento />

        {temas.map((tema) => (
          <section key={tema.id} className="tema-section">
            <Tema tema={tema} />
          </section>
        ))}
      </main>
    </>
  );
}

export default App
