import "./formulario-de-evento.estilos.css";

import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";
import { Tema } from "../Tema";

export function FormularioDeEvento() {
  const temas = [
    { id: 1, nome: "front-end" },
    { id: 2, nome: "back-end" },
    { id: 3, nome: "devops" },
    { id: 4, nome: "inteligência artificial" },
    { id: 5, nome: "data science" },
    { id: 6, nome: "cloud" },
  ];

  return (
    <form className="form-evento" action="">
      <TituloFormulario>Preencha para criar um evento</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual é o nome do evento?</Label>
          <CampoDeEntrada type="text" id="nome" placeholder="Summer dev hits" />
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
          <ListaSuspensa id="temaEvento" placeholder="Selecione uma opção" />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
      <section className="tema-section">
        <Tema tema={temas[0]} />
      </section>
      <section className="tema-section">
        <Tema tema={temas[1]} />
      </section>
      <section className="tema-section">
        <Tema tema={temas[2]} />
      </section>
      <section className="tema-section">
        <Tema tema={temas[3]} />
      </section>
      <section className="tema-section">
        <Tema tema={temas[4]} />
      </section>
      <section className="tema-section">
        <Tema tema={temas[5]} />
      </section>
    </form>
  );
}
