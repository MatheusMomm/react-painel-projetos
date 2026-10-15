import './App.css'
import { bancoDados } from "./db"
import Status from './componentes/StatusBadge'
import Tecnologia from './componentes/TecnologiaTag'
import ProjetoCards from './componentes/ProjetoCards'
import Secao from './componentes/Secao'

function App() {
  return (
    <>
      {
        bancoDados.map((i, index) => (
          <Status key={index} status={i.status} />
        ))
      }

      <Tecnologia nome="react" />


      <Secao titulo="Projetos da turma">
        {bancoDados.map((i, index) => (
          <ProjetoCards
            key={index}
            titulo={i.titulo}
            status={i.status}
            descricao={i.descricao}
            responsavel={i.responsavel}
            tecnologias={i.tecnologias}
            destaques={i.destaques}
          />
        ))}
      </Secao>

    </>
  )
}

export default App