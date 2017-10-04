/* eslint-env browser */
import React, { Component } from 'react'

import Home from './modules/Home/Home'

class App extends Component {
  constructor () {
    super()
    const search = location.search.substring(1)
    const params = new URLSearchParams(search)
    this.state = {
      params: params
    }
  }

  render () {
    return <Home params={this.state.params} />
  }
}

export default App
