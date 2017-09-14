import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Tab = ({
  title,
  className,
  children
}) => {
  const classNames = classnames(
    className,
    'c-tab'
  )

  return (
    <div className={classNames}>
      content: {children}
    </div>
  )
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.any
}

Tab.defaultProps = {
  className: null,
  children: null
}

export default Tab
