import Status from "./StatusBadge";
import Tecnologia from "./TecnologiaTag";





function ProjetoCards (props){

    return (
        <>
            <div className="projeto-card">
            <h2>{props.titulo}</h2>
            <p>{props.descricao}</p>
            <p>{props.responsavel}</p>
            <Status status={props.status}/>
            <Tecnologia nome={props.tecnologias} />
            <p>{props.destaques}</p>
            </div>
        </>
    )
}

export default ProjetoCards;