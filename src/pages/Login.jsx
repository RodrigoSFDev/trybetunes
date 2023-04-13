import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Carregando from '../componet/Carregando';

export default class Login extends Component {
  state = {
    carregando: false,
  };

  loading = async () => {
    const { User, history } = this.props;
    this.setState({
      carregando: true,
    });
    await createUser({ name: User });
    history.push('/search');
  };

  render() {
    const { User, button, onInputChange } = this.props;
    const { carregando } = this.state;
    return (
      <div>
        { carregando ? <Carregando /> : (
          <div data-testid="page-login">
            <h1>Login</h1>
            <input
              type="text"
              onChange={ onInputChange }
              name="User"
              value={ User }
              data-testid="login-name-input"
            />
            <button
              type="button"
              data-testid="login-submit-button"
              disabled={ button }
              onClick={ this.loading }
            >
              Entar

            </button>

          </div>
        )}

      </div>
    );
  }
}

Login.propTypes = {
  User: PropTypes.string.isRequired,
  button: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  history: PropTypes.shape.isRequired,
  push: PropTypes.func.isRequired,
};
