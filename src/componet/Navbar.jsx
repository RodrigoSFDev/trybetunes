import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import NotFound from '../pages/NotFound';
import ProfileEdit from '../pages/ProfileEdit';

export default class Navbar extends Component {
  render() {
    const { User, button, onInputChange } = this.props;
    console.log(User);
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Login
              User={ User }
              button={ button }
              onInputChange={ onInputChange }
              { ...props }
            />
            ) }
          />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route path="/album/:id" component={ Album } />
          <Route exact path="/*" component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

Navbar.propTypes = {
  User: PropTypes.string.isRequired,
  button: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
