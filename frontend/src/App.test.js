import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app container', () => {
  render(<App />);
  const appElement = screen.getByTestId('app-container');
  expect(appElement).toBeInTheDocument();
});