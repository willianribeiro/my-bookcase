import React from 'react'
import PropTypes from 'prop-types'

const AppHeader = ({
  title
}) => {
  return (
    <header className='c-app-header'>
      <h1 className='c-app-header__title'>{title}</h1>
    </header>
  )
}

AppHeader.propTypes = {
  title: PropTypes.string
}

export default AppHeader
