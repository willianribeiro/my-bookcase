import React, {Component } from 'react'

import MockBookApi from '../api/MockBookApi'
import { Tabs, Tab } from 'components/Tabs'
import BookCard from 'components/BookCard'

class Home extends Component {
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

  fetchAlreadyRead = () => {
    MockBookApi.fetchAlreadyRead()
      .then(response => this.setState({ alreadyRead: response.data.response }))
      .catch(error => this.handleError(error))
  }

  fetchReading = () => {
    MockBookApi.fetchReading()
      .then(response => this.setState({ reading: response.data.response }))
      .catch(error => this.handleError(error))
  }

  fetchWantRead = () => {
    MockBookApi.fetchWantRead()
      .then(response => this.setState({ wantRead: response.data.response }))
      .catch(error => this.handleError(error))
  }

  handleError = (error) => {
    console.log(error)
  }

  buildBookCards = (books = []) => (
    books.map((book, index) => {
      const cover = book.edicao.capa_media
      const title = book.edicao.titulo
      // const subtitle = book.edicao.subtitulo
      const author = book.edicao.autor
      // const publishingCompany = book.edicao.editora
      // const link = book.edicao.url

      return (
        <BookCard
          title={title}
          author={author}
          img={cover}
          key={book.id}
        />
      )
    })
  )

  renderBooks = (books) => {
    const shelf = this.buildBookCards(books)
    return <div className="c-shelf"> { shelf }</div>
  }

  render () {
    const { alreadyRead, reading, wantRead } = this.state

    return (
      <Tabs initialTab={1}>
        <Tab title='Already read'>
          {this.renderBooks(alreadyRead)}
        </Tab>
        <Tab title='Reading'>
          {this.renderBooks(reading)}
        </Tab>
        <Tab title='Want to read'>
          {this.renderBooks(wantRead)}
        </Tab>
      </Tabs>
    )
  }
}

export default Home
