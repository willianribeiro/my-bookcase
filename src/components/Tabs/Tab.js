import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tab extends Component {
  render() {
    const {
      title,
      className,
      children,
    } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Tab
