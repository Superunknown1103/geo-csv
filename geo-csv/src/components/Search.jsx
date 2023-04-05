import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styles from '../css/Search.module.css';
import Button from '@mui/material/Button';

const Search = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return (
        <div className={styles.searchRow}>
            <input 
                className={styles.searchBar}
                type="text"
                placeholder="Search here"
                onChange={handleSearchChange}
                value={searchInput}
            ></input>
              <Button onClick={() => { alert(searchInput) }}variant="contained" sx={{marginBottom: "0.5em"}}>Search</Button>
        </div>
    );
}

export default Search;