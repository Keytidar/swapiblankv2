import React, { useEffect, useState } from 'react';
import languages from '../utils/languages';
import API from '../utils/functions';
import Loader from './Loader';

const People = ({ lang, setLang }) => {
  const [people, changePeople] = useState([]);

  useEffect(() => {
    API.fetchSwapi('https://swapi.py4e.com/api/people/', changePeople);
  }, []);


  return (
    <div className="container-fluid row row-cols-1 row-cols-md-3 g-4">
      {people.map((people, index) => {
        return (
          <div className="card" style={{width: '18rem', marginTop: '50px'}} key={index}>
            <div className="card-body">
              <h5 className="card-title">{people.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{people.gender}</li>
              <li className="list-group-item">{people.height}</li>
              <li className="list-group-item">{people.mass}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default People;
