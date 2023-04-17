import React from "react";
import {TfiAngleDoubleRight} from "react-icons/tfi";
import './Form.css'
import PropTypes from 'prop-types';

export default function Form({handleCharge,handleSubmit,novaTarefa}){
    return(
        <form className="form" onSubmit={handleSubmit} action="#">
          <input  onChange={handleCharge} value={novaTarefa} type="text"></input>
          <button type="submit">
            <TfiAngleDoubleRight/>
          </button>
        </form>

    )
}

Form.propTypes= {
    handleCharge: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}
