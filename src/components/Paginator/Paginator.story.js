import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Paginator from 'components/Paginator'

const pagination = {
  first_item: 1,
  last_item: 3,
  limit: 20,
  next_page: true,
  page: 1,
  page_count: 1,
  prev_page: false,
  total: 3
}

storiesOf('Paginator', module)
  .add('demo', () => (
    <Paginator
      pagination={pagination}
      fetch={() => {}}
      loading={false}
    />
  ))
