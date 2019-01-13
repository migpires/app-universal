import React, { Component } from 'react';
import {Helmet} from "react-helmet";
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
        <Helmet>
              <meta charSet="utf-8" />
              <title>Universal App</title>
              <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
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
