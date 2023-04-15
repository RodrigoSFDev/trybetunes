import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Header from '../componet/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Carregando from '../componet/Carregando';

export default class Search extends Component {
  state = {
    musica: '',
    button: true,
    carregando: false,
    album: [],
    artista: '',
  };

  pesquisa = async () => {
    this.setState({
      carregando: true,
      musica: '',
    });
    const { musica } = this.state;
    const procura = await searchAlbumsAPI(musica);
    this.setState({
      carregando: false,
      artista: `Resultado de álbuns de: ${musica}`,
      album: [...procura],
    });
  };

  onInputChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value,
    }, this.validar);
  };

  validar = () => {
    const { musica } = this.state;
    const valor = 2;
    if (musica.length >= valor) {
      this.setState({
        button: false,
      });
    }
  };

  render() {
    const { musica, button, carregando, album, artista } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <section>
          {carregando ? <Carregando />
            : (
              <>
                <div>
                  <input
                    type="text"
                    name="musica"
                    value={ musica }
                    onChange={ this.onInputChange }
                    data-testid="search-artist-input"
                  />
                  <button
                    type="button"
                    disabled={ button }
                    onClick={ this.pesquisa }
                    data-testid="search-artist-button"
                  >
                    Pesquisar

                  </button>
                </div>
                <div>
                  <p>
                    {artista}
                  </p>
                </div>
                <div>
                  {album.length > 0
                    ? album.map((albums, index) => (
                      <div key={ index }>
                        <img src={ albums.artworkUrl100 } alt={ albums.collectionName } />
                        <h3>{albums.artistName}</h3>
                        <p>{albums.collectionName}</p>
                        <Link
                          key={ albums.collectionId }
                          to={ `/album/${albums.collectionId}` }
                          data-testid={ `link-to-album-${albums.collectionId}` }
                        >
                          Ver

                        </Link>
                      </div>)) : (<p>Nenhum álbum foi encontrado</p>)}
                </div>

              </>
            )}
        </section>
      </div>
    );
  }
}
