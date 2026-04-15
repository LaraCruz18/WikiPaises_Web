function Card({ country }) {
  return (
    <div className="card">
      <img src={country.flags.svg} alt={`Bandeira de ${country.name.common}`} />
      
      <div className="card-info">
        <h3>{country.name.common}</h3>
        <p><strong>População:</strong> {country.population}</p>
        <p><strong>Região:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital?.[0] || 'Não tem'}</p>
      </div>
    </div>
  )
}

export default Card;