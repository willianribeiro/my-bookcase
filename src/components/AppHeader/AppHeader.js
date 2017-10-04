import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const AppHeader = ({
  title,
  hide
}) => {
  const classNames = classnames(
    'c-app-header',
    { 'is-hidden': hide }
  )

  return (
    <header className={classNames}>
      <h1 className='c-app-header__title'>{title}</h1>
    </header>
  )
}

AppHeader.propTypes = {
  title: PropTypes.string,
  hide: PropTypes.bool
}

export default AppHeader
