import React from 'react';
import {Link} from 'react-router-dom';
import '../../stylesheets/layout/Work.scss';
import editorialWheel from '../../images/02-work/wheel-editorial.png';
import frontBack from '../../images/02-work/wheel-front-back.png';
import madWomen from '../../images/02-work/01-mad-women.jpg';
import treeHuggers from '../../images/02-work/02-tree-huggers.jpg';
import spacelabers from '../../images/02-work/03-spacelabers.jpg';
import rickMorty from '../../images/02-work/04-rick-morty.jpg';
import whatToWatch from '../../images/02-work/05-what-to-watch.jpg';
import bloom from '../../images/02-work/06-bloom.mov';
import pistillo from '../../images/02-work/07-pistillo.jpg';
import editorial from '../../images/02-work/08-editorial.jpg';
import others from '../../images/02-work/09-others.jpg';





function Work () {

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };
 
  return (
    <div className="work container-fluid">
      <h1 className="title">
        Here's <br></br> <span className="title__bold">What I do</span>
      </h1>
      <img src={madWomen} className="work__mad" alt="Screenshot of React Mad Women website" />
      <img
        src={frontBack}
        className="work__wheel--1"
        alt="Front and back end projects"
      />
       <h2 className="subtitle">
        Front-end <span className="subtitle__bold">Development</span>
      </h2>
      <p className="paragraph__main">
        Projects built using HTML, SCSS, JavaScript & React 
      </p>
      
      <img src={treeHuggers} className="work__front--1" alt="Screenshot of React Mad Women website" />
      
      <img src={spacelabers} className="work__front--2" alt="Screenshot of React Mad Women website" />
      <img src={rickMorty} className="work__front--3" alt="Screenshot of React Mad Women website" />
      {/*<img src={whatToWatch} className="work__sky" alt="Screenshot of React Mad Women website" />

      <h2 className="subtitle">
        Front-end <span className="subtitle__bold">Development</span>
      </h2>
      <p className="paragraph__main">
        Projects built using HTML, SCSS, JavaScript & React </p>
      

      <h2 className="subtitle">
        Graphic <span className="subtitle__bold">Design</span>
      </h2>

        <p className="paragraph__main">
        Through the years I've worked in different projects, here are some of my favourites </p>
      

      

      <Link to="/work/pistillo" title="Check out my work at Pistillo" className="button">
        Pistillo - personal project
      </Link>

      <img src={pistillo} className="work__flower" alt="My personal project" />
      <img src={editorial} className="work__flower" alt="My personal project" />
      <img
        src={editorialWheel}
        className="work__wheel--2"
        alt="Editorial Work"
      />
      <img src={others} className="work__flower" alt="My personal project" />
      


       */}

      

      <div className="top" onClick={scrollTop}>
        <i className="fas fa-arrow-up top--arrow" />
        <p className="top--text">Back to top</p>
      </div>
    </div>
    
  );
}

export default Work;
