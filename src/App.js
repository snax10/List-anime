import React, {useState, useEffect} from 'react'

import { SearchAnime } from "./components/SearchAnime";
import Pages from './components/Pages';

import './styles.css'
import qs from 'qs';

const api = 'https://kitsu.io/api/edge/';
const LIMIT = 12;

export default function App() {
  const [info, setInfo] = useState({})
  const [text, setText] = useState('')

  const [offset, setOffset] = useState(0); //State Paginação
  //console.log(info)

  useEffect(() => {
    const query = {
      page: {
        limit: LIMIT,
        offset,
      }
    };

    if(text) {
      query.filter = {
        text,
      };
    }

      fetch(`${api}anime?${qs.stringify(query)}`) //Transformando objeto em texto para buscar.
        .then((response) => response.json())
        .then((response) => {
          setInfo(response)
        })
  }, [text, offset]);
  
  return (
    <div className="App">
      <h1>Buscar Animes</h1>

        <SearchAnime 
          value={text} 
          onChange={(search)=> setText(search)} 
        />

          {info.meta && (
              <Pages 
                limit={LIMIT} 
                total={info.meta.count} 
                offset={offset} 
                setOffset={setOffset}
            />
          )}
  
        {info.data && (
          <ul className="animes-list">
            {info.data.map((anime) => (
              <li key={anime.id}>
                  <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle}/>
                  {anime.attributes.canonicalTitle}
              </li>
            ))}
          </ul>
        )}
    </div>   
  );
}

