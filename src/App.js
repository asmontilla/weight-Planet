import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import Resultado from './Resultado.js';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      valueDelInput: '',
      valueDelSelect: 'mercurio',
      resultado:""

    }

    this.handleOnchangeInput = this.handleOnchangeInput.bind(this)
    this.handleOnchangeSelect = this.handleOnchangeSelect.bind(this)
    this.calcPeso=this.calcPeso.bind(this)

  }

  handleOnchangeInput (e) {
    this.setState({
      valueDelInput: e.target.value
    })
  }

  calcPeso(){
    let elResultado;
    if (this.state.valueDelSelect === 'mercurio') elResultado = this.state.valueDelInput *0.0387
    else if (this.state.valueDelSelect === 'venus') elResultado = this.state.valueDelInput *0.9051
    else if (this.state.valueDelSelect === 'marte') elResultado = this.state.valueDelInput *0.3775
    else if (this.state.valueDelSelect=== 'jupiter') elResultado = this.state.valueDelInput *2.5306
    else if (this.state.valueDelSelect === 'saturno') elResultado = this.state.valueDelInput *1.0653
    else if (this.state.valueDelSelect === 'urano') elResultado = this.state.valueDelInput *0.8877
    else if (this.state.valueDelSelect === 'neptuno') elResultado = this.state.valueDelInput *1.1377
    else if (this.state.valueDelSelect === 'pluton') elResultado = this.state.valueDelInput *0.0632

    this.setState({
      resultado:elResultado
    })

  }
  handleOnchangeSelect (e) {
    this.setState({
      valueDelSelect: e.target.value
    })
  }
 
  render() {
    return (
      <div>
        <Form valueInput={this.handleOnchangeInput} valueSelec= {this.handleOnchangeSelect} valorSelect= {this.state.valueDelSelect} handleresultado={this.calcPeso}></Form>
      <Resultado planeta={this.state.valueDelSelect} peso={this.state.resultado}></Resultado>
      </div>
    );
  }
}

export default App;
