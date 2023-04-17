import React, {Component} from "react";
import './Main.css';
import Form from './Form';
import Tarefa from "./Tarefa";



export default class  Main extends Component{
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
    modo: 'Criação',
  };

  componentDidMount(){
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if(!tarefas) return;
    this.setState({tarefas})
  }

  componentDidUpdate(prevProps,prevState){
    const {tarefas} = this.state;
    if(tarefas === prevState.tarefas) return;
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
  }

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
        modo: 'Criação'
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
      modo: 'Edição'
    });
  }


  render(){
    const {novaTarefa, tarefas,modo} = this.state;
    return (
      <div className="todo">
      <div className="conteinner">
        <h1>Lista de Tarefas</h1>
        <p>Modo:{modo}</p>
        <Form handleSubmit ={this.handleSubmit} handleCharge = {this.handleCharge} novaTarefa = {novaTarefa}/>
        <Tarefa handleDelete={this.handleDelete} handleEdit={this.handleEdit} tarefas={tarefas}/>
      </div>
      </div>
    )
  }
}

