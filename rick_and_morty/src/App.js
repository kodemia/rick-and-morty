import React, { Component } from "react";
import "./App.css";

import api from "./lib/api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      characters: []
    };
  }

  componentDidMount() {
    api.getAllCharacters().then(({ results }) => {
      const characters = results.map(({ id, name, image }) => {
        return { id, name, image };
      });
      this.setState({
        characters: characters
      });
    });
  }

  _renderCards = ({ id, name, image }) => {
    return (
      <div key={id} id={id} className="Card">
        <div className="Card-image">
          <figure>
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="Card-description">
          <div className="Card-name">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <div className="App-container">
          <h1>Rick and morty characters {this.state.count}</h1>
          <div className="Cards-container">
            {characters.map(c => this._renderCards(c))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
