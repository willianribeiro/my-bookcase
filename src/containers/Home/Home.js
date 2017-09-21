import React, {Component } from 'react'

import BookApi from '../../api/BookApi'
import { Tabs, Tab } from 'components/Tabs'
import Bookshelf from 'components/Bookshelf'
import AppHeader from 'components/AppHeader'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      alreadyRead: [],
      reading: [],
      wantRead: [],
      loadingAlreadyRead: true,
      loadingReading: true,
      loadingWantRead: true
    }
  }

  componentWillMount () {
    this.fetchAlreadyRead()
    this.fetchReading()
    this.fetchWantRead()
  }

  fetchAlreadyRead = () => {
    BookApi.fetchAlreadyRead()
      .then(response => {
        this.setState({ alreadyRead: response.data.response })
        this.setState({ loadingAlreadyRead: false })
      })
      .catch(error => this.handleError(error))
  }

  fetchReading = () => {
    BookApi.fetchReading()
      .then(response => {
        this.setState({ reading: response.data.response })
        this.setState({ loadingReading: false })
      })
      .catch(error => this.handleError(error))
  }

  fetchWantRead = () => {
    BookApi.fetchWantRead()
      .then(response => {
        this.setState({ wantRead: response.data.response })
        this.setState({ loadingWantRead: false })
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
      loadingAlreadyRead,
      loadingReading,
      loadingWantRead
    } = this.state

    return (
      <div className='pg-home'>
        <AppHeader title='My Bookshelf' />

        <div className='pg-home__content'>
          <Tabs initialTab={1} className='pg-custom-tabs'>
            <Tab title='Already read'>
              {!loadingAlreadyRead && <Bookshelf books={alreadyRead} />}
              {loadingAlreadyRead && <div className='c-loading'>Loading...</div>}
            </Tab>
            <Tab title='Reading'>
              {!loadingReading && <Bookshelf books={reading} />}
              {loadingReading && <div className='c-loading'>Loading...</div>}
            </Tab>
            <Tab title='Want to read'>
              {!loadingWantRead && <Bookshelf books={wantRead} />}
              {loadingWantRead && <div className='c-loading'>Loading...</div>}
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Home
