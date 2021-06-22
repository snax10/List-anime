import React from 'react'

export function SearchAnime({ value, onChange }) {
    function handleChange(event) {
        onChange(event.target.value);
    }

    return(
        <input
            className="search-input"
            type="search" 
            value={value} 
            onChange={handleChange} 
        />
    )
}