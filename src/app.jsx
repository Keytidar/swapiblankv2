import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFoundPage from "./components/notFoundPage";
import Home from "./components/home";
import Planets from "./components/Planets";
import People from "./components/People"
import './styles/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


const App = () => {
  const [lang, setLang] = useState('en');
  return(
    <HashRouter>
      <Header lang={lang} setLang={setLang} />
      <div>
        <Routes>
          <Route path = '/' element={<Home lang={lang} setLang={setLang} />} />
          <Route path = '/planets' element={<Planets />} />
          <Route path = '/people' element={<People />} />
          <Route path = '/loader' element={<Loader />} />
          <Route path = '*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

root.render(<App />)

export default App;