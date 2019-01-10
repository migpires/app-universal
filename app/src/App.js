import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: "Universal App"
    }
  }

  clickHandler = () =>
    this.setState({ label: "Universal App with Events!" })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            { this.state.label }
          </p>
          <button
            className="App-link"
            onClick={ this.clickHandler }
          >
            Check Events
          </button>
        </header>
      </div>
    );
  }
}

export default App;
