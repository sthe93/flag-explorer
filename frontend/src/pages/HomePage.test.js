import { render, screen, waitFor } from '@testing-library/react';
import HomePage from './HomePage';
import { getAllCountries } from '../services/api';

// Mock child components
jest.mock('../components/CountryGrid', () => ({ countries }) => (
  <div data-testid="country-grid-mock">
    {countries.map(c => <div key={c.name}>{c.name}</div>)}
  </div>
));

// Mock API service
jest.mock('../services/api');

test('displays loading then countries', async () => {
  const mockCountries = [
    { name: 'Testland', flag: 'test.png', capital: 'Testville', population: 1000000 }
  ];
  
  getAllCountries.mockResolvedValue(mockCountries);
  
  render(<HomePage />);
  
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  await waitFor(() => {
    expect(screen.getByText('Flag Explorer')).toBeInTheDocument();
    expect(screen.getByTestId('country-grid-mock')).toBeInTheDocument();
  });
});