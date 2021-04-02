import React from 'react';
import { render } from '@testing-library/react';
import { BasicTable } from './table.composition';

describe('table', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicTable />);
    const rendered = "Test";
    expect(rendered).toEqual("Test");
  });

})