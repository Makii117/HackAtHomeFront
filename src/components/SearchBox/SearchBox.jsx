import React from 'react';

import './searchBox.scss';

export const SearchBox=({placeholder,handleChange})=>{
    <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
    />
}

export default SearchBox;