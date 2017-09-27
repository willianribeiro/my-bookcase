import React from 'react'
import PropTypes from 'prop-types'

const BookCard = ({
  title,
  author,
  img
}) => {
  return (
    <div className='c-book-card'>
      <div className='c-book-card__cover'>
        <div className='c-book-card__book'>
          <div className='c-book-card__book-front'>
            <img src={img} className='c-book-card__img' />
          </div>
          <div className='c-book-card__book-back'></div>
          <div className='c-book-card__book-side'></div>
        </div>
      </div>
      <div>
        <div className='c-book-card__title'>
          {title}
        </div>
        <div className='c-book-card__author'>
          {author}
        </div>
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
