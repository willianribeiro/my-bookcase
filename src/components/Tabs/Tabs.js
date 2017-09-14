import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tabs extends Component {
  constructor () {
    super()
    this.state = {
      currentTabIndex: 0
    }

    this.extractTitles = this.extractTitles.bind(this)
    this.changeTabIndex = this.changeTabIndex.bind(this)
    this.renderNavigator = this.renderNavigator.bind(this)
  }

  componentWillMount () {
    const { initialTab } = this.props

    if (initialTab) {
      this.changeTabIndex(initialTab)
    }
  }

  extractTitles () {
    const { children } = this.props
    return children.map((tab) => tab.props.title)
  }

  changeTabIndex (index) {
    this.setState({
      currentTabIndex: index
    })
  }

  renderNavigator () {
    const titles = this.extractTitles()

    return (
      <nav className='c-tabs-navigator'>
        {
          titles.map((title, index) => (
            <strong onClick={() => this.changeTabIndex(index)} key={index}>
              {title} |
            </strong>
          ))
        }
      </nav>
    )
  }

  render () {
    const { children } = this.props
    const { currentTabIndex } = this.state

    return (
      <div className='c-tabs'>
        {this.renderNavigator()}
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
