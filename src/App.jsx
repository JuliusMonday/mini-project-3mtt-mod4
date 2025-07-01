
import React, { useState } from 'react';
import ListComponent from './components/ListComponent';
import './App.css';
    const App = () => {
      const [characters, setCharacters] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      React.useEffect(() => {
        setLoading(true);
        fetch('https://rickandmortyapi.com/api/character')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setCharacters(data.results);
            setLoading(false);
          })
          .catch(error => {
            setError(error.message);
            setLoading(false);
          });
      }, []);

      if (loading) {
        return <p>Loading...</p>;
      }

      if (error) {
        return <p>Error: {error}</p>;
      }

      return (
        <div>
          <h1>Rick and Morty Characters</h1>
          <ListComponent
            items={characters}
            renderItem={character => (
              <div className='character'>
                <img className='character-image'
                  src={character.image} 
                  alt={character.name} 
                />
                <p className='character-name'>{character.name}</p>
              </div>
            )}
          />
        </div>
      );
    };

 export default App;