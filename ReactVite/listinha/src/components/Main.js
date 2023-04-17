import React, {Component} from "react";
import './Main.css';
import {TfiAngleDoubleRight} from "react-icons/tfi";
import {FaEdit,FaWindowClose} from "react-icons/fa";


export default class  Main extends Component{
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  handleCharge = (e) => {
    this.setState({
      novaTarefa:e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas} = this.state;
    var {novaTarefa} = this.state;
    const{index} = this.state;
    novaTarefa = novaTarefa.trim();
    
    if(tarefas.indexOf(novaTarefa) !== -1) return;
    if(novaTarefa === '') return;

    const novasTarefas = [...tarefas];

    if(index === -1){
    this.setState({
      tarefas: [...novasTarefas,novaTarefa],
      novaTarefa: '',
    });}
    else{
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        index:-1,
        novaTarefa: '',
      });
    }

  }

  handleDelete = (e, ind) =>{
    const {tarefas} = this.state;
    const {index} = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(ind,1);
    if(index !== -1) return;
    this.setState({
      tarefas: [...novasTarefas],
    });
  }

  handleEdit = (e,index) =>{
    const {tarefas} = this.state;
    
    
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  }

  render(){
    const {novaTarefa, tarefas} = this.state;
    return (
      <div className="todo">
      <div className="conteinner">
        <h1>Lista de Tarefas</h1>
        <form onSubmit={this.handleSubmit} action="#">
          <input  onChange={this.handleCharge} value={novaTarefa} type="text"></input>
          <button type="submit">
            <TfiAngleDoubleRight/>
          </button>
        </form>
        <ul className="tarefas">
          {tarefas.map((tarefa,index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit onClick={(e) => this.handleEdit(e,index)} className="edit"/>
                <FaWindowClose onClick={(e) => this.handleDelete(e,index)} className="close"/>
              </span>

            </li>
          ))}
        </ul>
      </div>
      </div>
    )
  }
}

