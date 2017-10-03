import React, { Component } from 'react'

import BookApi from '../../api/BookApi'
import { Tabs, Tab } from 'components/Tabs'
import AppHeader from 'components/AppHeader'
import Bookshelf from 'components/Bookshelf'
import Paginator from 'components/Paginator'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      alreadyRead: {
        books: [],
        pagination: {},
        loading: false
      },
      reading: {
        books: [],
        pagination: {},
        loading: false
      },
      wantRead: {
        books: [],
        pagination: {},
        loading: false
      },
      alreadyReadInitialLoad: true,
      readingInitialLoad: true,
      wantReadInitialLoad: true
    }
  }

  componentWillMount () {
    this.fetchAlreadyRead(1)
    this.fetchReading(1)
    this.fetchWantRead(1)
  }

  fetchAlreadyRead = page => {
    this.setState({ alreadyRead: { ...this.state.alreadyRead, loading: true } })

    BookApi.fetchAlreadyRead(page)
      .then(response => {
        const books = this.state.alreadyRead.books
        const booksUpdated = books.concat(response.data.response)
        const alreadyRead = {
          books: booksUpdated,
          pagination: response.data.paging,
          loading: false
        }
        this.setState({ alreadyRead: alreadyRead })
        this.setState({ alreadyReadInitialLoad: false })
      })
      .catch(error => this.handleError(error))
  }

  fetchReading = page => {
    this.setState({ reading: { ...this.state.reading, loading: true } })

    BookApi.fetchReading(page)
      .then(response => {
        const books = this.state.reading.books
        const booksUpdated = books.concat(response.data.response)
        const reading = {
          books: booksUpdated,
          pagination: response.data.paging,
          loading: false
        }
        this.setState({ reading: reading })
        this.setState({ readingInitialLoad: false })
      })
      .catch(error => this.handleError(error))
  }

  fetchWantRead = page => {
    this.setState({ wantRead: { ...this.state.wantRead, loading: true } })

    BookApi.fetchWantRead(page)
      .then(response => {
        const books = this.state.wantRead.books
        const booksUpdated = books.concat(response.data.response)
        const wantRead = {
          books: booksUpdated,
          pagination: response.data.paging,
          loading: false
        }
        this.setState({ wantRead: wantRead })
        this.setState({ wantReadInitialLoad: false })
      })
      .catch(error => this.handleError(error))
  }

  handleError = (error) => {
    console.log(error)
  }

  render () {
    const {
      alreadyRead,
      reading,
      wantRead,
      alreadyReadInitialLoad,
      readingInitialLoad,
      wantReadInitialLoad
    } = this.state

    return (
      <div className='pg-home'>
        <AppHeader title='My Bookshelf' />

        <div className='pg-home__content'>
          <Tabs initialTab={1} className='pg-custom-tabs'>
            <Tab title='Already read'>
              {!alreadyReadInitialLoad &&
                <div>
                  <Bookshelf books={alreadyRead.books} />
                  <Paginator
                    fetch={this.fetchAlreadyRead}
                    pagination={alreadyRead.pagination}
                    loading={alreadyRead.loading}
                  />
                </div>
              }
              {alreadyReadInitialLoad && <div className='c-loading'>Loading...</div>}
            </Tab>
            <Tab title='Reading'>
              {!readingInitialLoad &&
                <div>
                  <Bookshelf books={reading.books} />
                  <Paginator
                    fetch={this.fetchReading}
                    pagination={reading.pagination}
                    loading={reading.loading}
                  />
                </div>
              }
              {readingInitialLoad && <div className='c-loading'>Loading...</div>}
            </Tab>
            <Tab title='Want to read'>
              {!wantReadInitialLoad &&
                <div>
                  <Bookshelf books={wantRead.books} />
                  <Paginator
                    fetch={this.fetchWantRead}
                    pagination={wantRead.pagination}
                    loading={reading.loading}
                  />
                </div>
              }
              {wantReadInitialLoad && <div className='c-loading'>Loading...</div>}
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Home
