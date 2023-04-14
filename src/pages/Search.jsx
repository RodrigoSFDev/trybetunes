import React, { Component } from 'react';
import Header from '../componet/Header';

export default class Search extends Component {
  state = {
    User: '',
    button: true,
  };

  onInputChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value,
    }, this.validar);
  };

  validar = () => {
    const { User } = this.state;
    const valor = 2;
    if (User.length >= valor) {
      this.setState({
        button: false,
      });
    }
  };

  render() {
    const { User, button } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <div>
          <input
            type="text"
            name="User"
            value={ User }
            onChange={ this.onInputChange }
            data-testid="search-artist-input"
          />
          <button
            type="button"
            disabled={ button }
            data-testid="search-artist-button"
          >
            Pesquisar

          </button>
        </div>
      </div>
    );
  }
}
