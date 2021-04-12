import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/layout/Footer.scss';

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">

        <Link to="/">
          <small className="footer__small">
            {' '}2021 - Portfolio{' '}
          </small>

        </Link>
        <span className="footer__mail">
          {' '}
          <span className="footer__mail--italic">jechfernandez@</span>
          gmail.com
        </span>

      </footer>
    );
  }
}

export default Footer;
