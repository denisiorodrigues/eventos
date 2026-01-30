import "./formulario-de-evento.estilos.css";

import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";

export function FormularioDeEvento({temas}) {

  return (
    <>
      <form className="form-evento" action="">
        <TituloFormulario>Preencha para criar um evento</TituloFormulario>
        <div className="campos">
          <CampoDeFormulario>
            <Label htmlFor="nome">Qual é o nome do evento?</Label>
            <CampoDeEntrada
              type="text"
              id="nome"
              placeholder="Summer dev hits"
            />
          </CampoDeFormulario>
          <CampoDeFormulario>
            <Label htmlFor="dataEvento">Qual é a data do evento?</Label>
            <CampoDeEntrada
              type="date"
              id="dataEvento"
              placeholder="dd/MM/aaaa"
            />
          </CampoDeFormulario>
          <CampoDeFormulario>
            <Label htmlFor="dataEvento">Tema do evento</Label>
            <ListaSuspensa id="temaEvento" placeholder="Selecione uma opção" temas={temas}/>
          </CampoDeFormulario>
        </div>
        <div className="acoes">
          <Botao>Criar evento</Botao>
        </div>
      </form>

      
    </>
  );
}
