import "./App.css";
import countryInfo from "./components/contriesData.json";
import DisplayCountries from "./components/DisplayCountries";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import OneCountry from "./components/OneCountry";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router>
        {/* <Switch> */}
        <Route exact path="/">
          <DisplayCountries countryInfo={countryInfo} />
        </Route>
        <Route path="/countries/:name" children={<OneCountry />}></Route>
        {/* <Route  path="/country" component={OneCountry} /> */}

        {/* </Switch>   */}
        {/* <div className="app">
    </div> */}
      </Router>
    </BrowserRouter>
  );
}
export default App;
