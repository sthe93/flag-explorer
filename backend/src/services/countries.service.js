const axios = require('axios');

const API_URL = 'https://restcountries.com/v3.1';

exports.getAllCountries = async () => {
  const response = await axios.get(`${API_URL}/all`);
  return response.data.map((country) => ({
    name: country.name.common,
    flag: country.flags.png,
  }));
};

exports.getCountryByName = async (name) => {
  const response = await axios.get(`${API_URL}/name/${name}`);
  const country = response.data[0];
  return {
    name: country.name.common,
    population: country.population,
    capital: country.capital?.[0] || 'N/A',
    flag: country.flags.png,
  };
};
