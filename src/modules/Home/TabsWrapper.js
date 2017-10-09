import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GenericTab from './GenericTab'
import BookApi from 'services/BookApi'
import { Tabs } from 'components/Tabs'

class TabsWrapper extends Component {
  constructor () {
    super()
    this.state = {
      alreadyRead: {
        books: [],
        pagination: {},
        loading: false,
        error: ''
      },
      reading: {
        books: [],
        pagination: {},
        loading: false,
        error: ''
      },
      wantRead: {
        books: [],
        pagination: {},
        loading: false,
        error: ''
      },
      alreadyReadInitialLoad: true,
      readingInitialLoad: true,
      wantReadInitialLoad: true
    }
  }

  componentWillMount () {
    const page = 1

    if (this.props.user) {
      this.fetchAlreadyRead(page)
      this.fetchReading(page)
      this.fetchWantRead(page)
    } else {
      this.setState({ alreadyReadInitialLoad: false })
      this.setState({ readingInitialLoad: false })
      this.setState({ wantReadInitialLoad: false })
    }
  }

  fetchAlreadyRead = page => {
    this.setState({ alreadyRead: { ...this.state.alreadyRead, loading: true } })

    BookApi.fetchAlreadyRead(this.props.user, page)
      .then(response => {
        const books = this.state.alreadyRead.books
        const booksUpdated = books.concat(response.data.response)
        const pagination = response.data.paging || {}

        const alreadyRead = {
          books: booksUpdated,
          pagination: pagination,
          loading: false
        }
        this.setState({ alreadyRead: alreadyRead })
        this.setState({ alreadyReadInitialLoad: false })
      })
      .catch(error => {
        this.setState({ alreadyReadInitialLoad: false })
        this.setState({
          alreadyRead: { ...this.state.alreadyRead, loading: false, error: error }
        })
        console.error(error)
      })
  }

  fetchReading = page => {
    this.setState({ reading: { ...this.state.reading, loading: true } })

    BookApi.fetchReading(this.props.user, page)
      .then(response => {
        const books = this.state.reading.books
        const booksUpdated = books.concat(response.data.response)
        const pagination = response.data.paging || {}

        const reading = {
          books: booksUpdated,
          pagination: pagination,
          loading: false
        }
        this.setState({ reading: reading })
        this.setState({ readingInitialLoad: false })
      })
      .catch(error => {
        this.setState({ readingInitialLoad: false })
        this.setState({
          reading: { ...this.state.reading, loading: false, error: error }
        })
        console.error(error)
      })
  }

  fetchWantRead = page => {
    this.setState({ wantRead: { ...this.state.wantRead, loading: true } })

    BookApi.fetchWantRead(this.props.user, page)
      .then(response => {
        const books = this.state.wantRead.books
        const booksUpdated = books.concat(response.data.response)
        const pagination = response.data.paging || {}

        const wantRead = {
          books: booksUpdated,
          pagination: pagination,
          loading: false
        }
        this.setState({ wantRead: wantRead })
        this.setState({ wantReadInitialLoad: false })
      })
      .catch(error => {
        this.setState({ wantReadInitialLoad: false })
        this.setState({
          wantRead: { ...this.state.wantRead, loading: false, error: error }
        })
        console.error(error)
      })
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

    const alreadyReadTitle = alreadyRead.pagination
      ? `Already read (${alreadyRead.pagination.total || 0})`
      : ''

    const readingTitle = reading.pagination
      ? `Reading (${reading.pagination.total || 0})`
      : ''

    const wantReadTitle = wantRead.pagination
      ? `Want to read (${wantRead.pagination.total || 0})`
      : ''

    return (
      <Tabs initialTab={1} className='pg-custom-tabs'>
        <GenericTab
          title={alreadyReadTitle}
          properties={alreadyRead}
          fetch={this.fetchAlreadyRead}
          initialLoad={alreadyReadInitialLoad}
        />
        <GenericTab
          title={readingTitle}
          properties={reading}
          fetch={this.fetchReading}
          initialLoad={readingInitialLoad}
        />
        <GenericTab
          title={wantReadTitle}
          properties={wantRead}
          fetch={this.fetchWantRead}
          initialLoad={wantReadInitialLoad}
        />
      </Tabs>
    )
  }
}

TabsWrapper.propTypes = {
  user: PropTypes.string
}

export default TabsWrapper
