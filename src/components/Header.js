import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import '../stylesheets/layout/Header.scss';

export default function Header () {
  return (
    <header className="header">
      < NavBar />
      <div className="container-fluid hidden">
        <div className="row">
          <div className="col-2 header__lowerCase">
            2021 - Portfolio
          </div>
          <div className="col translate">
            Home
          </div><div className="col translate">
            Work
          </div><div className="col-2 translate">
            About me - Contact
          </div>
          <div className="col-6 translate" />
        </div>
      </div>
    </header>
  );
}
