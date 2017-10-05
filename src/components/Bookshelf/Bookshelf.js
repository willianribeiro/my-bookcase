import React from 'react'
import PropTypes from 'prop-types'

import BookCard from 'components/BookCard'

const Bookshelf = ({
  books
}) => {
  const skoobUrl = 'https://skoob.com.br'

  const bookCards = books.map(book => (
    <BookCard
      title={book.edicao.titulo}
      author={book.edicao.autor}
      img={book.edicao.capa_media}
      url={skoobUrl + book.edicao.url}
      key={book.id}
    />
  ))

  return (
    <div className='c-bookshelf'>
      {bookCards.length > 0 && bookCards}
      {bookCards.length === 0 &&
        <div style={{textAlign: 'center', padding: '32px'}}>
          There is no books here ¯\_(ツ)_/¯
        </div>
      }
    </div>
  )
}

Bookshelf.propTypes = {
  books: PropTypes.array
}

export default Bookshelf
