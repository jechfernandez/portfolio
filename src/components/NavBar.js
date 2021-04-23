import React from 'react';
import '../stylesheets/NavBar.scss';
import { stickyNavbar } from './transitionsHelper';
import MenuHamburger from '../images/hamb-icon.png';
import { Link } from "react-router-dom";

const Navigation = () => {

  document.addEventListener('scroll', stickyNavbar)

  const handleMenuBtn = () => {
      document.querySelector('.drop-menu').classList.contains('visible') ?

          document.querySelector('.drop-menu').classList.remove('visible')
          :
          document.querySelector('.drop-menu').classList.add('visible')

  }
  return (
      <>
          <nav className='navbar'>
              <Link to='/' className='scrollto title'>Jech Fernández</Link>
              <nav className="mr-auto">
              <ul>
                  <li ><Link to='/' onClick={handleMenuBtn}>Home</Link></li>
                  <li ><Link to="/work" onClick={handleMenuBtn}>Work</Link></li>
                  <li ><Link to='/about' onClick={handleMenuBtn}>About me - Contact</Link></li>
              </ul>
              </nav>

              <button className='menu-btn' onClick={handleMenuBtn}><img src={MenuHamburger} alt='menu' /></button>
          </nav>
          <div className='drop-menu'>
              <ul>
                  <li><a href="#home" onClick={handleMenuBtn}>Home</a></li>
                  <li><a href="#work" onClick={handleMenuBtn}>Work</a></li>
                  <li><a href="#about" onClick={handleMenuBtn}>About me</a></li>
              </ul>
          </div>

      </>
  );
}

export default Navigation;