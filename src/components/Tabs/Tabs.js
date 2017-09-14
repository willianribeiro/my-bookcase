import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TabNavigator from './TabNavigator'

class Tabs extends Component {
  constructor () {
    super()
    this.state = {
      currentTabIndex: 0
    }
    this.extractTitles = this.extractTitles.bind(this)
    this.changeTabIndex = this.changeTabIndex.bind(this)
  }

  componentWillMount () {
    this.changeTabIndex(this.props.initialTab)
  }

  extractTitles () {
    return this.props.children.map((tab) => tab.props.title)
  }

  changeTabIndex (index) {
    if (index === undefined) return

    this.setState({
      currentTabIndex: index
    })
  }

  render () {
    const { children } = this.props
    const { currentTabIndex } = this.state
    const tabs = this.extractTitles()

    return (
      <div className='c-tabs'>
        <TabNavigator tabs={tabs} onTabClick={this.changeTabIndex} />
        {children[currentTabIndex]}
      </div>
    )
  }
}

Tabs.propTypes = {
  initialTab: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.any
}

Tabs.defaultProps = {
  initialTab: 0,
  className: null,
  children: null
}

export default Tabs
