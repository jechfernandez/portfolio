import React from 'react';
import {Link} from "react-router-dom";
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
        className="home__wheel--1"
        alt="welcome to my portfolio"
      />
      <p className="paragraph__main">
        Welcome to my portfolio, a place for me to display my
        work as a front-end developer & graphic designer.
      </p>
      <h2 className="subtitle">
        Front-end <span className="subtitle__bold">Development</span>
      </h2>
       <p className="paragraph__second">
        <div className="paragraph__second--1">
        <span>Education:</span>
        <p>Bootcamp @ Adalab 2020-2021 <br/> Intro to Python @ Ada ITW 2021 <br/> Adv. JavaScript @ Ada ITW 2021 </p>
        </div>
      </p>

       <h2 className="subtitle">
        Graphic <span className="subtitle__bold">Design</span>
      </h2>
      <p className="paragraph__second">
        <div className="paragrapgh__second--2">
        <span>Education:</span>
        <p>Duoc UC 2014-2018 <br/> Universidad de Chile 2012 - 2013</p>
        </div>

        
      </p>

       <Link to='/Work'title="Check out my work" className="button">
       (tap here)
        </Link>
       

      <p className="paragraph__tiny hidden">
        {' '}Click on the big a** button
        to see my latest projects
      </p>

       <img
        src={passion}
        className="home__wheel--2"
        alt="Things I'm passionate about"
      />
      <img src={flower} className="home__flower" alt="Dahlia" />

     <div className="top">
     <i className="fas fa-arrow-up top--arrow" />
      <p className="top--text">Back to top</p>
     </div>
    </div>
  );
}

export default Home;
