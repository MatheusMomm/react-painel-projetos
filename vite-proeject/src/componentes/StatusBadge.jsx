import "./StatusBadge.css"

function Status(props){

    return (
        <>
            <p className={
                props.status === 'Concluído' ? 'Concluido' :
                props.status === 'Em Andamento' ? 'Andamento' :
                props.status === 'Pendente' ? 'Pendente' : ''
            }>
                {props.status}
            </p>
        </>
    )
}

export default Status;