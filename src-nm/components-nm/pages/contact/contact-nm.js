import React from 'react';
import linkedin from './linkedin.png'
import github from './github.png'
const Technologies = () => {


    return (
        <footer className='footer' id='contact'>

            <h2>Contacto</h2>
            <p>jordi.b.arevalo@gmail.com</p>
            <p>+34 678 800 332</p>
            <div className='social-icons'>
                <a href='https://www.linkedin.com/in/jordi-boronat-arevalo/' target='_blank' rel="noreferrer"><img src={linkedin} alt='linkedin' /></a>
                <a href='https://github.com/jorboare' target='_blank' rel="noreferrer"><img src={github} alt='github' /></a>
            </div>

        </footer>

    );
}

export default Technologies;