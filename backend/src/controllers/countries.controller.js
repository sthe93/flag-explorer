const countriesService = require('../services/countries.service');

exports.getAllCountries = async (req, res) => {
  try {
    const countries = await countriesService.getAllCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCountryByName = async (req, res) => {
  try {
    const country = await countriesService.getCountryByName(req.params.name);
    if (!country) {
      return res.status(404).json({ message: 'Country not found' });
    }
    res.json(country);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
