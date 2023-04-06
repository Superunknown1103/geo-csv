import './App.css';
import MapComponent from './components/MapComponent.jsx';
import Search from './components/Search.jsx';
import ResultTable from './components/ResultTable.jsx';
import React, { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState({});
  const [results, setResults] = useState({});

  return (
    <div className="App">
      <Search setSearch={setSearch} />
      <div className="mapResultsStack">
        <ResultTable />
        <MapComponent results={results} setResults={setResults} search={search} />
      </div>
    </div>
  );
}

export default App;
