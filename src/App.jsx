import './App.css'
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Banner } from './components/Banner'
import { Tema } from './components/Tema'
import { CardEvento } from './components/CardEvento';

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

  const eventos = [
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
  ];

  return (
    <>
      <main>
        <header>
          <img src="/logo.png" alt="App evento logo" />
        </header>
        <Banner />
        <FormularioDeEvento temas={temas}/>

        {temas.map((tema) => (
          <section key={tema.id} className="tema-section">
            <Tema tema={tema} />
            <CardEvento evento={eventos[0]}/>
          </section>
        ))}
      </main>
    </>
  );
}

export default App
