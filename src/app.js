'use strict'

import React, { PureComponent } from 'react'

import './css/style.css'
import bookApi from './bookApi'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      alreadyRead: [],
      reading: [],
      wantRead: []
    }
  }

  componentWillMount () {
    this.fetchAlreadyRead()
    this.fetchReading()
    this.fetchWantRead()
  }

  handleError = (error) => {
    console.log(error)
  }

  fetchAlreadyRead = () => {
    bookApi.fetchAlreadyRead()
      .then(response => this.setState({ alreadyRead: response.data.response }))
      .catch(error => this.handleError(error))
  }

  fetchReading = () => {
    bookApi.fetchReading()
      .then(response => this.setState({ reading: response.data.response }))
      .catch(error => this.handleError(error))
  }

  fetchWantRead = () => {
    bookApi.fetchWantRead()
      .then(response => this.setState({ wantRead: response.data.response }))
      .catch(error => this.handleError(error))
  }

  renderBooks = (books = []) => (
    books.map((book, index) => {
      const cover = book.edicao.capa_media
      const title = book.edicao.titulo
      // const subtitle = book.edicao.subtitulo
      const author = book.edicao.autor
      // const publishingCompany = book.edicao.editora
      // const link = book.edicao.url

      return (
        <article>
          <h3>{title}</h3>
          <p>{author}</p>
          <img src={cover} />
        </article>
      )
    })
  )

  render () {
    const { alreadyRead, reading, wantRead } = this.state

    return (
      <div>
        <section>
          <h2>Lendo:</h2>
          {this.renderBooks(reading)}
        </section>

        <section>
          <h2>Lidos:</h2>
          {this.renderBooks(alreadyRead)}
        </section>

        <section>
          <h2>Quero ler:</h2>
          {this.renderBooks(wantRead)}
        </section>
      </div>
    )
  }
}

export default App
