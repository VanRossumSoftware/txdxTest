import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Toggle } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Toggle isOn={false} handleChange={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});