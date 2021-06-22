import React from 'react'

export function Search({ value, onChange }) {
    function handleChange(event) {
        onChange(event.target.value);
    }

    return(
        <input 
            type="search" 
            value={value} 
            onChange={handleChange} 
        />
    )
}