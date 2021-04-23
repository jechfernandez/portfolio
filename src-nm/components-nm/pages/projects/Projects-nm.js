import React from 'react';
import Fourketta from './images/cook.png'
import EnterTheBlock from './images/game.png'
import Bingewapp from './images/films.png'
import Taks from './images/task.png'
import githubIcon from './images/github.png'
import linkIcon from './images/new-tab.png'
const projects = () => {

    const handleProjectInfo = project => {

        !document.querySelector(`.p${project}`).classList.contains('visible')
            ?
            document.querySelector(`.p${project}`).classList.add('visible')
            :
            document.querySelector(`.p${project}`).classList.remove('visible')

    }
    return (
        <section className='projects-section' id='projects'>
            <h2>Proyectos</h2>

            <div className='projects'>
                <div className='project-1 project-col' onClick={() => handleProjectInfo('1')}>


                    <img src={Fourketta} alt='proyecto de Cocina' className='project-icon' />
                    <h3>FourkettA</h3>
                    <div className='description p1'>
                        <p className='description-close'>X</p>
                        <p className='description-text'>Organizador de recetas con tintes de red social. Single-Page Application basado en ReactJS para el Frontend y en ExpressJS para el backend a la hora de gestionar la API REST. <span>(user: MasterChief | pass: admin)</span></p>
                        <div className='project-links'>
                            <a href='https://fourketta.herokuapp.com/' target='_blank' rel='noreferrer'><img src={linkIcon} alt='link' /></a>
                            <a href='https://github.com/jorboare/Ironhack-FourkettA' target='_blank' rel='noreferrer'><img src={githubIcon} alt='repository' /></a>
                        </div>
                    </div>



                </div>

                <div className='project-2 project-col' onClick={() => handleProjectInfo('2')}>


                    <img src={Bingewapp} alt='proyecto de Cine' className='project-icon' />
                    <h3>_bingewapp</h3>

                    <div className='description p2'>
                        <p className='description-close'>X</p>

                        <p className='description-text'>Web de búsqueda y organización de cine y series. Ejecutada bajo ExpressJS y con vistas de Handlebars. Contenido provisto desde la API TheMovieDB. <span>(user: testuser2 | pass: testuser2)</span></p>
                        <div className='project-links'>
                            <a href='https://bingewapp.herokuapp.com/' target='_blank' rel='noreferrer'><img src={linkIcon} alt='link' /></a>
                            <a href='https://github.com/jorboare/ironhack-bingewapp' target='_blank' rel='noreferrer'><img src={githubIcon} alt='repository' /></a>
                        </div>
                    </div>


                </div>

                <div className='project-3 project-col' onClick={() => handleProjectInfo('3')}>


                    <img src={EnterTheBlock} alt='proyecto de Videojuego' className='project-icon' />
                    <h3>Enter The Block</h3>
                    <div className='description p3'>
                        <p className='description-close'>X</p>

                        <p className='description-text'>Primer nivel de un videojuego que funciona como tutorial. Creado con Canvas.</p>
                        <div className='project-links'>
                            <a href='https://jorboare.github.io/Enter-The-Block-Game/' target='_blank' rel='noreferrer'><img src={linkIcon} alt='link' /></a>
                            <a href='https://github.com/jorboare/Enter-The-Block-Game' target='_blank' rel='noreferrer'><img src={githubIcon} alt='repository' /></a>
                        </div>
                    </div>

                </div>
                <div className='project-4 project-col' onClick={() => handleProjectInfo('4')}>
                    <img src={Taks} alt='proyecto de organizador de tareas' className='project-icon' />
                    <h3>Tasks Manager</h3>
                    <div className='description p4'>
                        <p className='description-close'>X</p>

                        <p className='description-text'>Proyecto MERN de gestión de tareas utilizando hooks. <span>(user: jordi@jordi.com | pass: jordis)</span></p>
                        <div className='project-links'>
                            <a href='https://mern-tasks-jb.netlify.app/' target='_blank' rel='noreferrer'><img src={linkIcon} alt='link' /></a>
                            <a href='https://github.com/jorboare/MERN-tasks-Client' target='_blank' rel='noreferrer'><img src={githubIcon} alt='repository' /></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default projects;