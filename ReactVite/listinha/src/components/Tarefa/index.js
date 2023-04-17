import React from "react";
import './Tarefa.css';
import PropTypes from 'prop-types';
import {FaEdit,FaWindowClose} from "react-icons/fa";

export default function Tarefa({tarefas,handleEdit,handleDelete}){
    return(
        <ul className="tarefas">
          {tarefas.map((tarefa,index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit onClick={(e) => handleEdit(e,index)} className="edit"/>
                <FaWindowClose onClick={(e) => handleDelete(e,index)} className="close"/>
              </span>

            </li>
          ))}
        </ul>
    )
}

Tarefa.propTypes= {
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    tarefas:  PropTypes.array.isRequired,
}
