import './App.css'
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Banner } from './components/Banner'

function App() {

  return (
    <>
      <main>
        <header>
          <img src="/logo.png" alt="App evento logo" />
        </header>
        
        <Banner />
        
        <FormularioDeEvento />
      </main>
    </>
  )
}

export default App
