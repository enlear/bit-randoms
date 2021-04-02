import React from 'react';
import { render } from '@testing-library/react';
import { BasicTimeline } from './timeline.composition';

describe('timeline', () => {

  it('Should contain 5 timeline items', () => {
    const { getAllByText } = render(<BasicTimeline />);
    const rendered = getAllByText('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
    expect(rendered).toHaveLength(5);
  });

})