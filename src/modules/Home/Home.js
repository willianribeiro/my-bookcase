import React, { Component } from 'react'
import classnames from 'classnames'

import AppHeader from 'components/AppHeader'
import AppFooter from 'components/AppFooter'
import AppTutorial from 'components/AppTutorial'
import TabsWrapper from './TabsWrapper'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      fixedHeader: false,
      user: ''
    }

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
    this.setState({ user })
  }

  componentDidMount () {
    this.contentOffsetTop = this.contentContainer.offsetTop
    window.addEventListener('scroll', this._handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this._handleScroll)
  }

  render () {
    const { fixedHeader, user } = this.state

    const classNames = classnames(
      'pg-home',
      { 'is-header-fixed': fixedHeader }
    )

    return (
      <div className={classNames}>
        <AppHeader title='My Bookcase' hide={fixedHeader} />

        <div className='pg-home__content' ref={el => { this.contentContainer = el }}>
          {user && <TabsWrapper user={user} />}
          {!user && <AppTutorial />}
        </div>

        <AppFooter />
      </div>
    )
  }
}

export default Home
