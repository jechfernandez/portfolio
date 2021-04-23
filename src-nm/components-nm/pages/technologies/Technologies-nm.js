import React from 'react';
import Stack from './technologies-lat.png'
const Technologies = () => {


    return (
        <section className='technologies-section' id='technologies'>

            <h2>Mern</h2>
            <p>Trabajo dentro del stack MERN (MongoDB, ExpressJS, ReactJS, NodeJs) aprendiendo continuamente para mantener el código actualizado con las tecnologías más actuales y buscar la mayor eficiencia.</p>
            <div md={6} className='technologies-img'>
                <img src={Stack} alt='Stack MERN' className='tech-img parallax' data-axis='horizontal' data-speed='.2' />
            </div>

        </section>

    );
}

export default Technologies;