import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* MusicCard que deverá exibir o nome da música (propriedade trackName no objeto recebido pela API) e um player para tocar o preview da música (propriedade previewUrl no objeto recebido pela API). */
export default class MusicCard extends Component {
  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <div>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  /*   trackId: PropTypes.number.isRequired, */
  trackName: PropTypes.string.isRequired,
};
