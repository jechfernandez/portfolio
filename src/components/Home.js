import React from 'react';
import '../stylesheets/layout/Home.scss';
import welcome from '../images/01-home/wheel-welcome.png';
import passion from '../images/01-home/wheel-passion.png';
import sky from '../images/01-home/01-sky.jpg';
import flower from '../images/01-home/02-flower.jpg';

function Home () {
  return (
    <div className="home container-fluid">
      <h1 className="title">
        Jech<span className="title__bold">Fernández</span>
      </h1>
      <img src={sky} className="home__sky" alt="Sky with clouds" />
      <img
        src={welcome}
        className="home__wheel"
        alt="welcome to my portfolio"
      />
      <p className="paragraph__main">
        Welcome to my portfolio, a place for me to display my
        work as a front-end developer & graphic designer.
      </p>
      <h2 className="subtitle">
        Front-end <span className="subtitle__bold">Development</span>
      </h2>
      {/* <p className="paragraph__second">
        <span>Education:</span>
        <span>Bootcamp @ Adalab 2020-2021</span>
        <span>Intro to Python @ Ada ITW 2021</span>
        <span>Adv. JavaScript @ Ada ITW 2021</span>
      </p>

      <h2 className="subtitle">
        Graphic <span className="subtitle__bold">Design</span>
      </h2>
      <p className="paragraph__second">
        <span>Education:</span>
        <span>Duoc UC 2014-2018</span>
        <span>Universidad de Chile 2012 - 2013</span>
      </p>

      <button className="button">(here)</button>

      <p className="paragraph__tiny">
        {' '}Click on the big a** button
        to see my latest projects
      </p>

      <img
        src={passion}
        className="home__wheel"
        alt="Things I'm passionate about"
      />
      <img src={flower} className="home__flower" alt="Dahlia" />

      <i className="fas fa-arrow-up" />
      <p className="top">Back to top</p> */}
    </div>
  );
}

export default Home;
