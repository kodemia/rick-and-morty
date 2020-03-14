import React, { Component } from "react";
import "./App.css";

import api from "./lib/api";
import pickle from "./images/pickle-rick.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      characters: [],
      activeCharacter: {},
      modalActive: false
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

  _setActiveCharacter(id) {
    api.getCharacterById(id).then(data => {
      console.log(data);
      this.setState({
        activeCharacter: data,
        modalActive: true
      });
    });
  }

  _unsetActiveCharacter() {
    this.setState({
      activeCharacter: {},
      modalActive: false
    });
  }

  _renderCards = ({ id, name, image }) => {
    return (
      <div
        key={id}
        id={id}
        className="Card"
        onClick={e => this._setActiveCharacter(id)}
      >
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
    const { characters, modalActive, activeCharacter } = this.state;
    return (
      <div className="App">
        <div className="App-container">
          <h1>Rick and morty characters {this.state.count}</h1>
          <div className="Cards-container">
            {characters.map(c => this._renderCards(c))}
          </div>
        </div>

        {modalActive ? (
          <div className="Modal" onClick={e => this._unsetActiveCharacter()}>
            <div className="Pickle-container">
              <figure>
                <img src={pickle} alt="pickle-rick" />
              </figure>
            </div>

            <div className="Card-detail">
              <div className="Card-image">
                <figure>
                  <img src={activeCharacter.image} alt={activeCharacter.name} />
                </figure>
              </div>
              <div className="Card-detail-description">
                <div className="Card-name">
                  <h3>{activeCharacter.name}</h3>
                  <div className="Characteristic">
                    <p>Status</p>
                    <p className="Characteristic-value">
                      {activeCharacter.status}
                    </p>
                  </div>
                  <div className="Characteristic">
                    <p>Specie</p>
                    <p className="Characteristic-value">
                      {activeCharacter.species}
                    </p>
                  </div>
                  <div className="Characteristic">
                    <p>Gender</p>
                    <p className="Characteristic-value">
                      {activeCharacter.gender}
                    </p>
                  </div>
                  <div className="Characteristic">
                    <p>Origin</p>
                    <p className="Characteristic-value">
                      {activeCharacter.origin.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
