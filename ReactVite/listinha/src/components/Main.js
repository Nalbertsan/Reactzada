import React, {Component} from "react";
import './Main.css'
import {TfiAngleDoubleRight} from "react-icons/tfi"

export default class  Main extends Component{
  state = {
    novaTarefa: '',
    tarefas: ['Beber café','Beber água'],
  };

  handleCharge = (e) => {
    this.setState({
      novaTarefa:e.target.value,
    });
  }

  render(){
    const {novaTarefa, tarefas} = this.state;
    return (
      <div className="todo">
      <div className="conteinner">
        <h1>Lista de Tarefas</h1>
        <form action="#">
          <input onChange={this.handleCharge} value={novaTarefa} type="text"></input>
          <button type="submit">
            <TfiAngleDoubleRight/>
          </button>
        </form>
        <ul className="tarefas">
          {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
      </div>
      </div>
    )
  }
}

