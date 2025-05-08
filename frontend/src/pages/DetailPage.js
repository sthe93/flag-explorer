import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetail from '../components/CountryDetail';
import { getCountryByName } from '../services/api';

function DetailPage() {
    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const data = await getCountryByName(name);
                setCountry(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCountry();
    }, [name]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!country) return <div>Country not found</div>;

    return <CountryDetail country={country} />;
}

export default DetailPage;