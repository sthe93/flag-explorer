import { Link } from 'react-router-dom';
import CountryCard from './CountryCard';

function CountryGrid({ countries }) {
    return (
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
            padding: '20px'
        }}>
            {countries.map(country => (
                <Link key={country.name} to={`/country/${country.name}`} style={{ textDecoration: 'none' }}>
                    <CountryCard country={country} />
                </Link>
            ))}
        </div>
    );
}

export default CountryGrid;