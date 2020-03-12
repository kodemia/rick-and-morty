import React, { Component } from "react";
import "./App.css";

import api from './lib/api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    api.getCharacterCount()
      .then(count => {
        this.setState({
          count
        })
      })
      .catch(error => console.log(error))

    api.getCharacterById(1)
      .then(character => console.log(character))
      .catch()
  }

  render() {
    return (
      <div className="App">
        <div className="App-container">WIP / Character count {this.state.count}</div>
      </div>
    )
  }
}

export default App;
