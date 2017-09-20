import React from 'react'
import PropTypes from 'prop-types'

const BookCard = ({
  title,
  author,
  img
}) => {
  return (
    <div className='c-book-card'>
      <div className='c-book-card__cover' >
        <img src={img} />
      </div>

      <div className='c-book-card__infos' >
        <div className='c-book-card__title'>{title}</div>
        <div className='c-book-card__author'>{author}</div>
      </div>
    </div>
  )
}

BookCard.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  author: PropTypes.string,
  img: PropTypes.string
}

export default BookCard
