import React from 'react';
import { HashRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import AboutMe from './Components/AboutMe/aboutMe'
import { Link } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Routes from './Components/Routes/Routes'
import './App.css';



function App() {
  return (
    <HashRouter>
      <div id="portfolio">
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about me"><AboutMe /></Route>

        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
