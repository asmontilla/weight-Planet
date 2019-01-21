import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Resultado extends Component {
  render() {
    return (
      <div>
        <h3>Tu peso en {this.props.planeta} es :{this.props.peso}</h3>
      
       
      </div>
    );
  }
}

export default Resultado;