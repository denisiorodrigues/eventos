import './titulo-formulario.estilos.css'

export function TituloFormulario(props) {
  return (
    <h2 className="titulo-form">{props.children}</h2>
  )
}