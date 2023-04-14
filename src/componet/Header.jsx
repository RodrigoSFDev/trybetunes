import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
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
        <Link to="/search" data-testid="link-to-search">Search</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
        <Link to="/profile" data-testid="link-to-profile">Profile</Link>
      </header>
    );
  }
}
