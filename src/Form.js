import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Form extends Component {


  render() {
    return (
      <div className="back">
        <h1 class="h1"> Calcula tu peso en otro Planeta !!!</h1>
        <label>
        <input type="number" placeholder="Peso en la Tierra" onChange={this.props.valueInput} />
        </label>
        <label>
        <select value={this.props.valorSelect}
          onChange={this.props.valueSelec}>
          <option value="mercurio">Mercurio</option>
          <option value="venus">Venus</option>
          <option value="marte">Marte</option>
          <option value="jupiter">Jupiter</option>
          <option value="saturno">Saturno</option>
          <option value="urano">Urano</option>
          <option value="neptuno">Neptuno</option>
          <option value="pluton">Plutón</option>
        </select>
        </label>

        <label>
        <button onClick={this.props.handleresultado}>CALCULAR PESO</button>
        </label>


      </div>
    );
  }
}

export default Form;