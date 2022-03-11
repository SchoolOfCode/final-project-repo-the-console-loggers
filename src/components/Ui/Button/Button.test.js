import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Button from './Button';
// import { useNavigate } from 'react-router-dom';
const props = {
  text: 'Test Button',
  backgroundColor: 'red',
  textColor: 'white',
  width: '20px',
  icon: 'none',
  handleClick: jest.fn(),
};
test('first test: check if the Button component renders on the page', () => {
  render(<Button {...props} />);
  const textButton = screen.getByTestId('buttonx');

  // userEvent.click(buttonEl);
  expect(textButton).toBeInTheDocument(); //toHaveTextContent();
});
test('second test: checks if Button gets the correct text as props', () => {
  render(<Button {...props} />);
  const textButton = screen.getByText(props.text);

  // userEvent.click(buttonEl);
  expect(textButton).toHaveTextContent('Test Button');
});
test('third test: checks if Button gets the correct function on click event', () => {
  const mockFn = jest.fn();
  render(<Button handleClick={mockFn} text={props.text} />);
  const textButton = screen.getByText(props.text);
  userEvent.click(textButton);
  expect(mockFn).toHaveBeenCalled();
});
