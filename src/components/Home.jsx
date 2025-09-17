import React, { useEffect, useState } from 'react';
import languages from '../utils/languages';
import { NavLink } from 'react-router-dom';

// const images = require.context('./assets', false, /\.(png|jpg)$/);

const Home = ({ lang, setLang }) => {
  const [header, changeheader] = useState();

  return (
    <div className='container-fluid join-banner'>
      <div className='join-text rounded-3 border-danger'>
        <h1 className='text-danger'>{languages[lang].embrace}</h1>
        <NavLink to={'/join'} className="btn btn-lg btn-outline-danger">{languages[lang].join}</NavLink>
      </div>
    </div>
  )
};

export default Home;