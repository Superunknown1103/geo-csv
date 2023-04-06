import React, { useState } from 'react';
import styles from '../css/Search.module.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Search = (props) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    let funBtnColors = [
        '#eccc68',
        '#ff7f50',
        '#ff6b81',
        '#7bed9f',
        '#70a1ff'
    ]

    let commonlySearchedItems = [
        'Restaurants',
        'Hotels',
        'Local Businesses',
        'Schools',
        'Gyms'
    ].map((item) => {
        return <Button onClick={() => { 
            setSearchInput(item)
        }} sx={{ color: "white", backgroundColor: funBtnColors[Math.floor(Math.random() * funBtnColors.length)], margin: "0.5em"}}>{item}</Button>
    });
    return (
        <div className={styles.searchRow}>
            <input
                className={styles.searchBar}
                type="text"
                placeholder="Search here"
                onChange={handleSearchChange}
                value={searchInput}
            ></input>
            <Button onClick={() => { props.setSearch({query: searchInput}) }} variant="contained" sx={{ marginBottom: "0.5em" }}>Search</Button>
            <span className={styles.suggestions}>
                Commonly Searched Items:
                    {commonlySearchedItems}
            </span>
        </div>
    );
}

export default Search;