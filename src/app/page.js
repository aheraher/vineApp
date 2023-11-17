"use client"
// pages/index.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerList from './components/BeerList';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        if (searchTerm.trim() === '') {
          // If search term is empty, fetch all beers
          const response = await axios.get('https://api.punkapi.com/v2/beers');
          setSearchResults(response.data);
        } else {
          // If search term is provided, fetch beers matching the search term
          const response = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`);
          setSearchResults(response.data);
        }
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchBeers();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Wine Search App</h1>
      <div>
        <label htmlFor="search">Search Wine:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter wine name"
        />
      </div>
      <BeerList beers={searchResults} />
    </div>
  );
};

export default Home;
