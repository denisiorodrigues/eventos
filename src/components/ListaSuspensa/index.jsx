import './lista-suspensa.estilos.css'

export function ListaSuspensa({temas}) {
    return (
        <select className="lista-suspensa-form" defaultValue="">
            <option value="">Selecionar tema</option>  
            {temas.map((tema) => (
                <option key={tema.id} value={tema.id}>{tema.nome}</option>
            ))}
        </select>
    )
}