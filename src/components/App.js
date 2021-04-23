import '../stylesheets/App.scss';
// import React, {useEffect, useState} from 'react';
import {BrowserRouter as Switch, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import Work from './work/Work';
import About from './About';
import Pistillo from './work/Pistillo';
import Editorial from './work/Editorial';
import Others from './work/Others';

export default function App () {
  return (
    <div className="page">

      <NavBar />
      

      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/work/pistillo" component={Pistillo} />
          <Route path="/work/editorial" component={Editorial} />
          <Route path="/work/others" component={Others} />
        </Switch>

        <Footer />

      

    </div>
  );
}
