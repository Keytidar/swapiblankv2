import React, { useEffect, useState } from 'react';
import languages from '../utils/languages';
import awShitNigga from '../assets/404.jpg'
import { NavLink } from 'react-router-dom';

const NotFoundPage = ({ lang, setLang }) => {
  const [header, changeheader] = useState();

  return (
      <div className="container d-flex justify-content-center align-items-center" style={{ marginTop: '50px' }}>
        <div className="card text-center">
            <div className="card-header">
        <h4>404 NOT FOUND</h4>
            </div>
            <div className="card-body">
        <img src={awShitNigga} alt="" />
        <h5>It seems like there is nothing by that address</h5>
        <NavLink to={'/'} className="btn btn-primary">Go home</NavLink>
            </div>
            <div className="card-footer text-body-secondary">
            </div>
          </div>
      </div>
  )
};

export default NotFoundPage;