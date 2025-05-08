import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Assuming backend runs on 3001

export const getAllCountries = async () => {
    const response = await axios.get(`${API_BASE_URL}/countries`);
    return response.data;
};

export const getCountryByName = async (name) => {
    const response = await axios.get(`${API_BASE_URL}/countries/${name}`);
    return response.data;
};