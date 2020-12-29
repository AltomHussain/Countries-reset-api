import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./OneCountry.css";
export default function OneCountry() {
  const { name } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountry(data);
      });
  }, [name]);

  return (
    <>
      <section className="one-country-coountainer">
        <Link to="/" className="back-btn">
          Back Home
        </Link>
        {country.map((country) => {
          const {
            name,
            population,
            region,
            flag,
            numericCode,
            nativeName,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = country;
          return (
            <article key={numericCode} className="main-country">
             <div className="country-inner">
             <div className="flag">
                <img src={flag} alt={`${name}'s flag`} />
              </div>
              <div className="country-details">
                <div>
                  <h2>{name}</h2>
                  <h5>
                    Native Name: <span>{nativeName}</span>
                  </h5>
                  <h5>
                    Population: <span>{population}</span>
                  </h5>
                  <h5>
                    Region: <span>{region}</span>
                  </h5>
                  <h5>
                    Sub Region: <span>{subregion}</span>
                  </h5>
                  <h5>
                    {" "}
                    Capital: <span>{capital}</span>
                  </h5>
                </div>
                <div>
                  <h5>
                    Top Level Domain: <span>{topLevelDomain}</span>
                  </h5>
                  <h5>
                    currencies: <span>{currencies[0].name}</span>
                  </h5>
                  <h5>
                    languages: <span>{languages[0].name}</span>
                  </h5>
                </div>
              </div>
             </div>
              <div className="borders">
                <h3>Border Countries: </h3>
                <ul>
                {borders.map((border) => {
                  return (
                      <li key={border}>{border}</li>
                      );
                    })}
                    </ul>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
