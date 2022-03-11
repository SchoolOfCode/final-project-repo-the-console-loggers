import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './Card';

const props = {
  id: '22',
  name: 'ingredient',
  expdate: '11/03/2022',
  quantity: '2',
  // children:,
  checkboxStatus: ['status1', 'status2'],
  setCheckboxStatus: jest.fn(),
  sortItems: ['string1'],
};

test('first test: check if the Card component renders on the page', () => {
  render(<Card {...props} />);
  const cardC = screen.getByTestId('cardC');

  expect(cardC).toBeInTheDocument();
});
test('second test: checks if Card passes down the props correctly', () => {
  render(<Card {...props} />);
  const header1 = screen.getByTestId('headerC');

  expect(header1).toHaveTextContent('ingredient');
});
