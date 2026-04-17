import { Link } from 'react-router-dom';

function Card({ country }) {
  return (
    <Link to={`/country/${country.cca3}`} className="card-link">
      <div className="card">
        <img src={country.flags.svg} alt={`Bandeira de ${country.name.common}`} />
        <div className="card-info">
          <h3>{country.name.common}</h3>
          <p><strong>População:</strong> {country.population.toLocaleString('pt-BR')}</p>
          <p><strong>Região:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital?.[0] || 'não tem'}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card;