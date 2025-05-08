import { Link } from 'react-router-dom';

function CountryDetail({ country }) {
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <Link to="/" style={{ display: 'block', marginBottom: '20px' }}>← Back to all countries</Link>
            <h1>{country.name}</h1>
            <img 
                src={country.flag} 
                alt={`Flag of ${country.name}`} 
                style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
            />
            <div style={{ marginTop: '20px' }}>
                <p><strong>Capital:</strong> {country.capital}</p>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            </div>
        </div>
    );
}

export default CountryDetail;