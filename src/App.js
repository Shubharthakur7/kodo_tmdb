import React, { useState, useEffect } from "react";
import { Provider } from 'react-redux';
import store from './app/store';
import MovieList from './components/MovieList';
import SearchBar from "./components/SearchBar";
import "./App.css";

export default function App() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query); 
  };

  return (
    <Provider store={store}>
      <SearchBar onSearch={handleSearch} />
    <MovieList searchQuery={searchQuery} />
  </Provider>
  );
}
