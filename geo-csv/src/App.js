import './App.css';
import MapComponent from './components/MapComponent.jsx';
import Search from './components/Search.jsx';
import ResultTable from './components/ResultTable.jsx';

function App() {
  return (
    <div className="App">
      <Search /> 
      <div className="mapResultsStack">
        <ResultTable />
        <MapComponent />
      </div>
    </div>
  );
}

export default App;
