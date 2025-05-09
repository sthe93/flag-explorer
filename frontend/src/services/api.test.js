// src/services/api.test.js
import axios from 'axios';
import { getAllCountries, getCountryByName } from './api';

jest.mock('axios');

describe('API Service', () => {
  beforeEach(() => {
    axios.get.mockReset();
  });

  test('getAllCountries fetches data correctly', async () => {
    const mockData = [{ name: 'Testland' }];
    axios.get.mockResolvedValue({ data: mockData });

    const result = await getAllCountries();
    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/countries');
  });

  test('getCountryByName fetches data correctly', async () => {
    const mockData = { name: 'Testland' };
    axios.get.mockResolvedValue({ data: mockData });

    const result = await getCountryByName('Testland');
    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/countries/Testland');
  });
});