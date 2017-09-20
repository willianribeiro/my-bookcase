import React from 'react'
import { storiesOf } from '@kadira/storybook'

import AppHeader from 'components/AppHeader'

storiesOf('AppHeader', module)
  .add('demo', () => (
    <AppHeader
      title='Lorem ipsum dolor'
    />
  ))
