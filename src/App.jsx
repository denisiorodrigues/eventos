import './App.css'
import { FormularioDeEvento } from './components/FormularioDeEvento'

function App() {

  return (
    <>
      <main>
        <header>
          <img src="/logo.png" alt="App evento logo" />
        </header>
        <section className='banner'>
          <img src="/banner.png" alt="banner de uma moca com fones de ouvido" />
        </section>

        <FormularioDeEvento />
      </main>
    </>
  )
}

export default App
