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
      wantRead: []
    }
  }

  componentWillMount () {
    this.fetchAlreadyRead()
    this.fetchReading()
    this.fetchWantRead()
  }

  fetchAlreadyRead = () => {
    BookApi.fetchAlreadyRead()
      .then(response => this.setState({ alreadyRead: response.data.response }))
      .catch(error => this.handleError(error))
  }

  fetchReading = () => {
    BookApi.fetchReading()
      .then(response => this.setState({ reading: response.data.response }))
      .catch(error => this.handleError(error))
  }

  fetchWantRead = () => {
    BookApi.fetchWantRead()
      .then(response => this.setState({ wantRead: response.data.response }))
      .catch(error => this.handleError(error))
  }

  handleError = (error) => {
    console.log(error)
  }

  render () {
    const { alreadyRead, reading, wantRead } = this.state

    return (
      <div className='pg-home'>
        <AppHeader title='My Bookshelf' />

        <div className='pg-home__content'>
          <Tabs initialTab={1} className='pg-custom-tabs'>
            <Tab title='Already read'>
              <Bookshelf books={alreadyRead} />
            </Tab>
            <Tab title='Reading'>
              <Bookshelf books={reading} />
            </Tab>
            <Tab title='Want to read'>
              <Bookshelf books={wantRead} />
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Home
