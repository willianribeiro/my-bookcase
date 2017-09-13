import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tabs extends Component {
  constructor () {
    super()
    this.state = {
      currentTabIndex: 0
    }
  }

  componentWillMount() {
    const { initialTab } = this.props

    if (initialTab) {
      this.setState({ currentTabIndex: initialTab })
    }
  }

  extractTitles = () => {
    const { children } = this.props
    return children.map((tab) => tab.props.title)
  }

  render() {
    const {
      initialTab,
      className,
      children,
    } = this.props

    // console.log(this.extractTitles())

    return (
      <div className="c-tabs">
        <nav>

        </nav>
        { children[this.state.currentTabIndex] }
      </div>
    )
  }
}

Tabs.propTypes = {

}

export default Tabs
