'use strict'

import React, { PureComponent } from 'react'

import './css/style.css'
import bookApi from './bookApi'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      books: null
    }
  }

  componentWillMount () {
    // bookApi.fetchWantRead()
    //   .then((response) => {
    //     console.log('fetchWantRead() success');
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log('fetchWantRead() error');
    //     console.log(error);
    //   });

    // bookApi.fetchAlreadyRead()
    //   .then((response) => {
    //     console.log('fetchAlreadyRead() success');
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log('fetchAlreadyRead() error');
    //     console.log(error);
    //   });

    // bookApi.fetchReading()
    //   .then((response) => {
    //     console.log('fetchReading() success');
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log('fetchReading() error');
    //     console.log(error);
    //   });

    bookApi.fetchAll()
      .then((response) => {
        const books = {}
        const wantRead = response[0].data.response
        const alreadyRead = response[1].data.response
        const reading = response[2].data.response
        books.wantRead = wantRead
        books.alreadyRead = alreadyRead
        books.reading = reading
        this.setState({ books: books })
      })
  }

  renderBooks = (books) => {
    if (books) {
      return books.reading.map((book, index) => {
        const cover = book.edicao.capa_media
        const title = book.edicao.titulo
        // const subti  tle = book.edicao.subtitulo
        const author = book.edicao.autor
        // const publishingCompany = book.edicao.editora
        // const link = book.edicao.url

        return (
          <article>
            <h2>{title}</h2>
            <p>{author}</p>
            <img src={cover} />
          </article>
        )
      })
    }

    return 'carregando...'
  }

  render () {
    const { books } = this.state

    return (
      <div>
        {this.renderBooks(books)}
      </div>
    )
  }
}

export default App
