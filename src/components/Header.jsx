import React, { useEffect, useState } from 'react';
import languages from '../utils/languages';
import { Link, NavLink } from "react-router-dom";
import { set } from 'mongoose';

const Header = ({ lang = 'en', setLang }) => {
  const [header, changeheader] = useState();
  const [theme, changeTheme] = useState('dark');

  const toggleTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    changeTheme(currentTheme);
    document.documentElement.setAttribute('data-bs-theme', currentTheme);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" >
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={'/'} className="nav-link active" aria-current="page">
                {languages[lang].navbar}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/planets'} className="nav-link">
                {languages[lang].planets}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/people'} className="nav-link">
                {languages[lang].people}
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {languages[lang].languages}
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" onClick={() => setLang('en')} >
                    English
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" onClick={() => setLang('ru')}>
                    Русский
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" onClick={() => setLang('cs')}>
                    Ceština
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" onClick={() => setLang('es')} >
                    Espanol
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" onClick={() => setLang('de')}>
                    German
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" onClick={() => setLang('fr')}>
                    French
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" onClick={() => setLang('it')}>
                    Italy
                  </NavLink>
                </li>
                {/* <li><hr ="dropdown-divider"></li> */}
                {/* <li><NavLink ="dropdown-item" >Something else here</NavLink></li> */}
              </ul>
            </li>
            <li className="nav-item d-flex align-items-center">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch onChange={toggleTheme} checked={theme === 'dark'} />
                <label className="form-check-label" htmlFor="checkNativeSwitch">
                  {languages[lang].themeChange}
                </label>
              </div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder={languages[lang].search + '...'}
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              {languages[lang].search}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
