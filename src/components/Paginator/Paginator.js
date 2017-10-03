import React from 'react'
import PropTypes from 'prop-types'

const Paginator = ({
  pagination,
  loading,
  fetch
}) => {
  const nextPage = () => {
    if (pagination.next_page) {
      fetch(pagination.page + 1)
    }
  }

  const disabled = false

  const label = loading
    ? 'Loading...'
    : 'Load more'

  return (
    <div className='c-paginator'>
      {pagination.next_page &&
        <button
          type='button'
          disabled={disabled}
          onClick={nextPage}
          className='c-paginator__button'
        >
          {label}
        </button>
      }
      {!pagination.next_page && pagination.page > 1 &&
        <div>All items were loaded</div>
      }
    </div>
  )
}

Paginator.propTypes = {
  pagination: PropTypes.object,
  loading: PropTypes.bool,
  fetch: PropTypes.func
}

export default Paginator
