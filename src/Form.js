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
          <option value="Mercurio">Mercurio</option>
          <option value="Venus">Venus</option>
          <option value="Marte">Marte</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Neptuno">Neptuno</option>
          <option value="Pluton">Plutón</option>
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