import React from 'react';
import {Link} from 'react-router-dom';
// import logo from '../images/logo-rick-n-morty.png';
import '../stylesheets/layout/Footer.scss';

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <small className="footer__small">
          {' '}Jech Fernández - Portfolio{' '}
        </small>
        <small className="footer__contact">
        <span>Let's get in touch</span>
        <span className="footer__contact--info">jechfernandez@gmail.com</span>
        </small>

        <Link to="/">

          {/* <img
            className="footer__logo"
            src={logo}
            title="Go to home page"
            alt="Mad Women"
          /> */}
        </Link>
      </footer>
    );
  }
}

export default Footer;
