import React from "react";
import Botao from "../Botao";
import "./style.scss";
import { Itarefa } from "../../types/Itarefa";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
}

function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = React.useState("");
  const [tempo, setTempo] = React.useState("00:00");

  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() },
    ]);
    setTarefa("");
    setTempo("00:00");
  }

  return (
    <form className="novaTarefa" onSubmit={adicionarTarefa}>
      <div className="inputContainer">
        <label htmlFor="tarefa">Adicionar um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(event) => setTarefa(event.target.value)}
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="">Tempo</label>
        <input
          type="time"
          step={"1"}
          name="tempo"
          id="tempo"
          value={tempo}
          onChange={(event) => setTempo(event.target.value)}
          min={"00:00:00"}
          max={"01:30:00"}
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}

export default Formulario;