import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import AboutMe from './Components/AboutMe/aboutMe'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Resume from './Components/Skills/Resume'
import { Link } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Routes from './Components/Routes/Routes'
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about me"><AboutMe /></Route>
          <Route exact path="/portfolio"><Portfolio /></Route>
          <Route exact path="/contact"><Contact /></Route>
          <Route exact path="/resume"><Resume /></Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
