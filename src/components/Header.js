import React from 'react';
// import {Link} from 'react-router-dom';
// import NavBar from './NavBar';
import '../stylesheets/layout/Header.scss';

export default function Header () {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col header__lowerCase">
            2021 - Portfolio
          </div>
          <div className="col">
            Home
          </div><div className="col">
            Work
          </div><div className="col-2">
            About me - Contact
          </div>
          <div className="col-6" />
        </div>
      </div>
    </header>
  );
}
