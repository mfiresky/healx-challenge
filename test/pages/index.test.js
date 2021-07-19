import React from 'react';

import {render, screen} from '../test-utils';
import HomePage from '@pages/index';

describe('SearchPage', () => {
  it('should render the heading', () => {
    render(<HomePage />);

    const heading = screen.getByText(/Journals/i);

    expect(heading).toBeInTheDocument();
  });
});
