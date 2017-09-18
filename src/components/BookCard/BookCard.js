import React from 'react'
import PropTypes from 'prop-types'

const BookCard = ({
  title,
  author,
  img
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>{author}</div>
      <img src={img} />
    </div>
  )
}

BookCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  img: PropTypes.string
}

export default BookCard
