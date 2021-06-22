import React, {useState, useEffect} from 'react'
import { SearchAnime } from "./components/SearchAnime";

import './styles.css'

export default function App() {
  const [info, setInfo] = useState({})
  const [text, setText] = useState('')
  
  useEffect(() => {
    //if(text) {
      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response)
        })
     // }
  }, [text]);

  return (
    <div className="App">
      <h1>Buscar Animes</h1>
        <SearchAnime 
          value={text} 
          onChange={(search)=> setText(search)} 
        />

        {info.data && (
          <ul className="animes-list">
            {info.data.map((anime) => (
              <li key={anime.id}>
                  <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                  {anime.attributes.canonicalTitle}
              </li>
            ))}
          </ul>
        )}
    </div>   
  );
}

