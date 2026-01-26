import "./card-evento.estilos.css";

export function CardEvento({evento}) {
    return (
      <div className="card-evento">
        <img src={evento.capa} alt={evento.titulo} />
        <div className="card-evento corpo">
          <p className="card-evento tag"> {evento.tema.nome}</p>
          <p className="card-evento data">{evento.data.toLocaleDateString("pt-BR")}</p>
          <h4 className="card-evento titulo">{evento.titulo}</h4>
        </div>
      </div>
    );
}