import {TituloFormulario} from '../TituloFormulario'
import {CampoDeFormulario} from '../CampoDeFormulario'
import {Label} from '../Label'
import {CampoDeEntrada} from '../CampoDeEntrada'

export function FormularioDeEvento() {
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