import Item from "./Item";
import "./style.scss";
import { Itarefa } from "../../types/Itarefa";

interface Props {
  tarefas: Itarefa[];
  selecionaTarefa: (tarefaSeleciona: Itarefa) => void;
}


function Lista({tarefas, selecionaTarefa}: Props) {

  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item 
          {...item} 
          key={item.id} 
          selecionaTarefa={selecionaTarefa}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
