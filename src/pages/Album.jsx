import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../componet/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../componet/MusicCard';

export default class Album extends Component {
  state = {
    album: '',
    musicas: [],
  };

  componentDidMount() {
    this.novoAlbum();
  }

  novoAlbum = async () => {
    const { match: { params: { id } } } = this.props;
    const musica = await getMusics(id);

    const [alb, ...musicTotal] = musica;

    this.setState({
      album: alb,
      musicas: musicTotal,

    });
  };

  render() {
    const { album, musicas } = this.state;
    const verifMusicas = musicas.length > 0;
    return (
      <div data-testid="page-album">
        <Header />
        <div data-testid="artist-name">{ album.artistName }</div>
        <div data-testid="album-name">{ album.collectionName }</div>
        <section>
          {verifMusicas && musicas.map((music, index) => (
            <MusicCard
              key={ index }
              trackName={ music.trackName }
              previewUrl={ music.previewUrl }
              trackId={ music.trackId }
            />
          ))}
        </section>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
