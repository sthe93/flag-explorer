// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

// Create manual mocks for router components
const MockRouter = ({ children }) => <div data-testid="router">{children}</div>;
const MockRoutes = ({ children }) => <div data-testid="routes">{children}</div>;
const MockRoute = ({ element }) => <div data-testid="route">{element}</div>;

jest.mock('react-router-dom', () => ({
  BrowserRouter: MockRouter,
  Routes: MockRoutes,
  Route: MockRoute,
  // Add any other router components you use
}));

// Mock child components
jest.mock('./pages/HomePage', () => () => <div>HomePage Mock</div>);
jest.mock('./pages/DetailPage', () => () => <div>DetailPage Mock</div>);

test('renders app container', () => {
  render(<App />);
  expect(screen.getByTestId('app-container')).toBeInTheDocument();
  expect(screen.getByTestId('router')).toBeInTheDocument();
});