import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Todo from '../Todo'

storiesOf('Todo', module)
  .add('Todo page', () => <Todo />)
