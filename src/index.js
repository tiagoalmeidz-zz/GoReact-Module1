import React, { Component } from "react";
import { render } from "react-dom";

class Button extends Component {
  render() {
    return <a href="">Enviar</a>;
  }
}

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello Rocketseat!</h1>
        <Button />
      </>
    );
  }
}

render(<App />, document.getElementById("app"));
