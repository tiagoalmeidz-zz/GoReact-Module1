import React, { Component } from "react";
import { render } from "react-dom";

import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {
    // Método que inicia automaticamente na inicialização do Componente, Perfeito para fazer chamadas em API's
  }

  componentWillUnmount() {
    // Método que inicia quando o componente é destruido. utilizado para limpar todo tipo de evento
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <>
        <h1>Hello Rocketseat!</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </>
    );
  }
}

render(<App />, document.getElementById("app"));
