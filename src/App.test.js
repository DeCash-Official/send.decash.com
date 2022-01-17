import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/DeCash tokens/i);
  expect(linkElement).toBeInTheDocument();
});
