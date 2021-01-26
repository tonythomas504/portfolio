import React from 'react';
import { HashRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Routes from './Components/Routes/Routes'
import './App.css';



function App() {
  return (
    <HashRouter>
      <div id="portfolio">
        <Navbar />
        {Routes}
      </div>
    </HashRouter>
  );
}

export default App;
