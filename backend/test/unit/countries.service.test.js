const axios = require('axios');
const countriesService = require('../../src/services/countries.service');

jest.mock('axios');

describe('Countries Service', () => {
  describe('getAllCountries', () => {
    it('should return formatted countries', async () => {
      const mockData = [
        { name: { common: 'Testland' }, flags: { png: 'test.png' } },
      ];
      axios.get.mockResolvedValue({ data: mockData });

      const result = await countriesService.getAllCountries();
      expect(result).toEqual([{ name: 'Testland', flag: 'test.png' }]);
    });
  });

  describe('getCountryByName', () => {
    it('should return formatted country details', async () => {
      const mockData = [
        {
          name: { common: 'Testland' },
          population: 1000000,
          capital: ['Test City'],
          flags: { png: 'test.png' },
        },
      ];
      axios.get.mockResolvedValue({ data: mockData });

      const result = await countriesService.getCountryByName('Testland');
      expect(result).toEqual({
        name: 'Testland',
        population: 1000000,
        capital: 'Test City',
        flag: 'test.png',
      });
    });
  });
});
