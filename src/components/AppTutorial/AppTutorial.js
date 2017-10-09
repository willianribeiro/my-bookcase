import React from 'react'
import PropTypes from 'prop-types'

const AppTutorial = ({ params }) => {
  return (
    <div style={{ textAlign: 'center', padding: '32px' }}>
      You need to provide an <strong>user id</strong> as a parameter on URL
      (Eg.: <strong>http://url.com.br/?user=42</strong>).
    </div>
  )
}

AppTutorial.propTypes = {
  params: PropTypes.any
}

export default AppTutorial
