import React from 'react'
import { storiesOf } from '@kadira/storybook'

import BookCard from 'components/BookCard'

storiesOf('BookCard', module)
  .add('demo', () => (
    <BookCard />
  ))
