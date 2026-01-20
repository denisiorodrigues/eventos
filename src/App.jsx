import './App.css'

function TituloFormulario(props) {
  return (
    <h2>{props.children}</h2>
  )
}

function CampoDeFormulario({children}) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}

function Label({children, htmlFor}) {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}

function CampoDeEntrada(props) {
  return (
    <input {...props} />
  )
}

function FormularioDeEvento() {
  return (
    <form className='form-evento' action="">
      <TituloFormulario>Preencha para criar um evento</TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">Qual é o nome do evento?</Label>
        <CampoDeEntrada type="text" id='nome' placeholder='Summer dev hits' />
      </CampoDeFormulario>
    </form>
  )
}

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
