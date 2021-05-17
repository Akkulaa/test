import React from 'react';
import { render } from '@testing-library/react';
import TestComponent from './TestComponent';

test('renders the testing component', () => {
  render(<TestComponent />);
});
