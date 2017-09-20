import React, {Component } from 'react'

import MockBookApi from '../api/MockBookApi'
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

  render () {
    const { alreadyRead, reading, wantRead } = this.state

    return (
      <div>
        <AppHeader title={'User\'s Bookshelf'} />

        <div className='pg-home'>
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
