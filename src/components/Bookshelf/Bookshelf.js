import React from 'react'
import PropTypes from 'prop-types'

import BookCard from 'components/BookCard'

const Bookshelf = ({
  books
}) => {
  const bookCards = books.map(book => (
    <BookCard
      title={book.edicao.titulo}
      author={book.edicao.autor}
      img={book.edicao.capa_media}
      key={book.id}
    />
  ))

  return (
    <div className='c-bookshelf'>{bookCards}</div>
  )
}

Bookshelf.propTypes = {
  books: PropTypes.array
}

export default Bookshelf
