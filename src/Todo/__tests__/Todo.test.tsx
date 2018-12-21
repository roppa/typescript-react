import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Todo from '../Todo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
