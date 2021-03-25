import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/layout/Header.scss';

export default function Header () {
  return (
    <header className="header">
      <div className="header__block">
      <div className="header__block--jech">Jech Fernández</div>
      <Link to="/">
        <div>2021 - Portfolio</div>
      </Link>
      <Link to="/Work">
        <div className="header__block--work">Work</div>
      </Link>
      
      <div>About me</div>
      <div>Contact</div>
      <div> <span className='cursive'> jechfernandez@</span>gmail.com</div>
      <div>Portfolio</div>
      </div>
    </header>
  );
}
