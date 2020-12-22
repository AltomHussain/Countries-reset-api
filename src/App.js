
import './App.css';
import countryInfo from "./components/contriesData.json"
import DisplayCountries from './components/DisplayCountries';
function App() {
  return (
    <div className="app">
  <DisplayCountries countryInfo={countryInfo}/>
    </div>
  );
}

export default App;
