import { useState, useEffect } from 'react';
import api from '../services/api';
import Card from '../components/Card';
import Header from '../components/Header';

function Home() {
  const [countries, setCountries] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await api.get('/all?fields=name,flags,population,region,capital,cca3');
      
        setCountries(response.data);
        
        console.log('países:', response.data);
        
      } catch (error) {
        console.error("deu ruim", error);
      }
    }
    fetchCountries();
  }, []); 

  const filteredCountries = countries.filter((country) => 
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header onSearch={setSearchTerm} />
      
      <div className="countries-grid">
        {filteredCountries.map((country) => (
          <Card key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  )
}


export default Home;