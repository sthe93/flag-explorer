// src/pages/DetailPage.test.js
import { render, screen, waitFor } from '@testing-library/react';
import DetailPage from './DetailPage';

// Mock useParams directly without importing react-router-dom
const mockUseParams = jest.fn().mockReturnValue({ name: 'Testland' });
jest.mock('react-router-dom', () => ({
  useParams: () => mockUseParams()
}));

// Mock API service
jest.mock('../services/api', () => ({
  getCountryByName: jest.fn().mockResolvedValue({
    name: 'Testland',
    flag: 'test.png',
    capital: 'Testville',
    population: 1000000
  })
}));

test('displays country details', async () => {
  render(<DetailPage />);
  
  // Verify loading state
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  // Wait for data to load
  await waitFor(() => {
    expect(screen.getByText('Testland')).toBeInTheDocument();
  });
});