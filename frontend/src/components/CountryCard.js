function CountryCard({ country }) {
    return (
        <div style={{ 
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center'
        }}>
            <img 
                src={country.flag} 
                alt={`Flag of ${country.name}`} 
                style={{ width: '100%', height: 'auto' }}
            />
            <h3>{country.name}</h3>
        </div>
    );
}

export default CountryCard;