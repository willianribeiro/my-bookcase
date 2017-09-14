import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Tabs, Tab } from 'components/Tabs'

storiesOf('Button', module)
  .add('demo', () => (
    <Tabs initialTab={1}>
      <Tab title='Already read'>
        Books I have read.
      </Tab>
      <Tab title='Reading'>
        Books I'm reading.
      </Tab>
      <Tab title='Want to read'>
        Books I would like to read.
      </Tab>
    </Tabs>
  ))
