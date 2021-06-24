import React from 'react'

import '../styles/searchAnime.css'

export function SearchAnime({ value, onChange }) {
    
    function handleChange(event) {
        onChange(event.target.value);
    }

    return(
        <input
            className="search-input"
            type="search" 
            placeholder="Pesquisar"
            value={value} 
            onChange={handleChange} 
        />
    )
}