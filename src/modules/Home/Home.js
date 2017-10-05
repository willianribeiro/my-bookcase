import React, { Component } from 'react'
import classnames from 'classnames'

import BookApi from 'services/BookApi'
import { Tabs } from 'components/Tabs'
import AppHeader from 'components/AppHeader'
import GenericTab from './GenericTab'

class Home extends Component {
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
      wantReadInitialLoad: true,
      fixedHeader: false
    }

    this.user = null
    this.contentContainer = null
    this.contentOffsetTop = null
  }

  // private functions
  _handleScroll = e => {
    if (this._shouldFixHeader(e)) {
      this.setState({ fixedHeader: true })
    } else if (this._shouldUnfixHeader(e)) {
      this.setState({ fixedHeader: false })
    }
  }

  _shouldFixHeader = e => (
    document.body.scrollTop >= this.contentOffsetTop && !this.state.fixedHeader
  )

  _shouldUnfixHeader = e => (
    document.body.scrollTop < this.contentOffsetTop && this.state.fixedHeader
  )

  // lifecycle functions
  componentWillMount () {
    const user = this.props.params.get('user')
    const page = 1

    if (user) {
      this.user = user
      this.fetchAlreadyRead(page)
      this.fetchReading(page)
      this.fetchWantRead(page)
    } else {
      this.setState({ alreadyReadInitialLoad: false })
      this.setState({ readingInitialLoad: false })
      this.setState({ wantReadInitialLoad: false })
    }
  }

  componentDidMount () {
    this.contentOffsetTop = this.contentContainer.offsetTop
    window.addEventListener('scroll', this._handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this._handleScroll)
  }

  // public functions
  fetchAlreadyRead = page => {
    this.setState({ alreadyRead: { ...this.state.alreadyRead, loading: true } })

    BookApi.fetchAlreadyRead(this.user, page)
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

    BookApi.fetchReading(this.user, page)
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

    BookApi.fetchWantRead(this.user, page)
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
      wantReadInitialLoad,
      fixedHeader
    } = this.state

    const classNames = classnames(
      'pg-home',
      { 'is-header-fixed': fixedHeader }
    )

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
      <div className={classNames}>
        <AppHeader title='My Bookshelf' hide={fixedHeader} />

        <div className='pg-home__content' ref={el => { this.contentContainer = el }}>
          {this.user &&
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
          }
          {!this.user &&
            <div style={{textAlign: 'center', padding: '32px'}}>
              You need to provide an <strong>user id</strong> as a parameter on URL
              (Eg.: <strong>http://url.com.br/?user=42</strong>).
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Home
