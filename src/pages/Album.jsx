import React, { Component } from 'react';
import Header from '../componet/Header';

export default class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
      </div>
    );
  }
}
