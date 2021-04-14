
import '../stylesheets/App.scss';
// import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Work from './Work'


export default function App () {
  return (
    <div className="page">
      <Router>
        <Header />
        <Switch>
          <Route path="/" />
          <Route exact path="/" component={Home} />
          <Route path="/GeneratorCard" component={Work} />
        </Switch>
      </Router>
      <Home />
      <Footer />
    </div>
  );
}
