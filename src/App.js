import React, {useState} from 'react'
import { Search } from "./components/Search";

import './styles.css'

export default function App() {
  const [text, setText] = useState('')
  console.log(text)

  return (
    <div className="App">
      <h1>Buscar Animes</h1>
        <Search 
          value={text} 
          onchange={(search)=> setText(search)} 
        />
    </div>   
  );
}

