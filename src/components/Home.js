import React from 'react';
import '../stylesheets/layout/Home.scss';
import welcome from '../images/01-home/welcome.png';

function Home () {
  return (
    <div>
      <img src={welcome} alt="welcome to my portfolio" />
    </div>
  );
}

export default Home;
