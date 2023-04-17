import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Carregando from './Carregando';

export default class MusicCard extends Component {
  state = {
    fav: false,
    carregando: false,
  };

  onInputChange = async (event, musica) => {
    const { target: { checked, name } } = event;
    this.setState({
      carregando: true,
    });
    this.setState({
      [name]: checked,
    });
    await addSong(musica);
    this.setState({
      carregando: false,
    });
  };

  render() {
    const { fav, carregando } = this.state;
    const { trackId, previewUrl, trackName } = this.props;
    return (
      <div>
        <div>
          <p>{ trackName }</p>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
          <div>
            { carregando ? <Carregando /> : (
              <label htmlFor={ trackId }>
                Favorita
                <input
                  type="checkbox"
                  id={ trackId }
                  name="fav"
                  checked={ fav }
                  onChange={ this.onInputChange }
                  data-testid={ `checkbox-music-${trackId}` }
                />
              </label>
            ) }
          </div>
        </div>

      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
};
