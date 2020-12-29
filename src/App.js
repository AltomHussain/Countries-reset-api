import "./App.css";
import countryInfo from "./components/contriesData.json";
import DisplayCountries from "./components/DisplayCountries";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import OneCountry from "./components/OneCountry";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router>
        <Route exact path="/">
          <DisplayCountries countryInfo={countryInfo} />
        </Route>
        <Route path="/countries/:name" children={<OneCountry />}></Route>
      </Router>
    </BrowserRouter>
  );
}
export default App;
