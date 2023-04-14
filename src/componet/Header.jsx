import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

export default class Header extends Component {
  state = {
    carregando: false,
    name: '',
  };

  componentDidMount() {
    this.loading();
  }

  loading = async () => {
    this.setState({
      carregando: true,
    });
    const userName = await getUser();
    this.setState({
      name: userName.name,
      carregando: false,
    });
  };

  render() {
    const { carregando, name } = this.state;
    return (
      <header data-testid="header-component">
        {carregando ? <Carregando /> : <div data-testid="header-user-name">{name}</div>}
      </header>
    );
  }
}
