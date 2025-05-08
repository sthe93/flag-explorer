import { useState, useEffect } from 'react';
import CountryGrid from '../components/CountryGrid';
import { getAllCountries } from '../services/api';

function HomePage() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const data = await getAllCountries();
                setCountries(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCountries();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Flag Explorer</h1>
            <CountryGrid countries={countries} />
        </div>
    );
}

export default HomePage;