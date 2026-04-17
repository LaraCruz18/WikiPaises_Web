import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

function Detail() {
  const { code } = useParams(); 
  
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountryDetail() {
      try {
        const response = await api.get(`/alpha/${code}`);
        setCountry(response.data[0]);
      } catch (error) {
        console.error("deu erro", error);
      } finally {
        setLoading(false); 
      }
    }

    fetchCountryDetail();
  }, [code]);

  if (loading) {
    return <h2 style={{ padding: '20px' }}>Carregando...</h2>;
  }

  if (!country) {
    return <h2>País não encontrado!</h2>;
  }

  const languages = country.languages ? Object.values(country.languages).join(', ') : 'não informado';
  const currencies = country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'não informado';

  return (
    <div className="detail-page">
      <Link to="/" className="back-button">
        Voltar
      </Link>

      <div className="detail-container">
        <img src={country.flags.svg} alt={`Bandeira de ${country.name.common}`} className="detail-flag" />
        
        <div className="detail-info">
          <h2>{country.name.common} ({country.cca3})</h2>
          <p><strong>Nome Oficial:</strong> {country.name.official}</p>
          <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
          <p><strong>Continente:</strong> {country.continents?.[0]}</p>
          <p><strong>População:</strong> {country.population.toLocaleString('pt-BR')}</p>
          <p><strong>Área:</strong> {country.area.toLocaleString('pt-BR')} km²</p>
          <p><strong>Idiomas:</strong> {languages}</p>
          <p><strong>Moeda:</strong> {currencies}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail;