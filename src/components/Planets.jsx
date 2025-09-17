import React, { useEffect, useState } from 'react';
import languages from '../utils/languages';
import API from '../utils/functions';

const Planets = ({ lang, setLang }) => {
  const [planets, changePlanets] = useState([]);
  let [loading, changeLoading] = useState(true);

  useEffect(() => {
    API.fetchSwapi('https://swapi.py4e.com/api/planets/', changePlanets);
  }, []);

  // if (loading)
  //   return (
  //     <div className="spinner-border text-danger" role="status">
  //       <span className="visually-hidden">Loading...</span>
  //     </div>
  //   );

  return (
    <div className="container-fluid row row-cols-1 row-cols-md-3 g-4">
      {planets.map((planet, index) => {
        return (
          <div
            className="card"
            style={{ width: '18rem', marginTop: '50px' }}
            key={index}
          >
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{planet.terrain}</li>
              <li className="list-group-item">{planet.diameter}</li>
              <li className="list-group-item">{planet.population}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Planets;
