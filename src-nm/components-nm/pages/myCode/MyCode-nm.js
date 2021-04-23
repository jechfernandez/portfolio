import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Icon1 from './icons/clean.png'
import Icon2 from './icons/fast.png'
import Icon3 from './icons/reusable.png'
import Icon4 from './icons/maintainable.png'

const Features = () => {

    const handleAction = () => {
        if (!document.querySelector('.feature').classList.contains('visible')) {
            document.querySelector('.feature').classList.add('visible')
            document.querySelector('.drop-text.close').classList.add('visible')
            document.querySelector('.drop-text.open').classList.remove('visible')
        } else {
            document.querySelector('.feature').classList.remove('visible')
            document.querySelector('.drop-text.close').classList.remove('visible')
            document.querySelector('.drop-text.open').classList.add('visible')
        }
    }

    return (
        <div className='feature-rel-box'>

            <div className='feature' id='feature'>
                <h2>Sobre Mi Código</h2>
                <hr />
                <Container>
                    <Row>
                        <Col md={3}>
                            <img src={Icon1} alt='icon' className='feature-img' />
                            <h3>Limpio</h3>
                            <p>
                                Código organizado y sencillo para ser fácil de leer.</p>
                        </Col>
                        <Col md={3}>
                            <img src={Icon2} alt='icon' className='feature-img' />
                            <h3>Rápido</h3>
                            <p>
                                Procesos rápidos y ligeros para la mayor velocidad en la carga de los proyectos.</p>
                        </Col>
                        <Col md={3}>
                            <img src={Icon4} alt='icon' className='feature-img' />
                            <h3>Mantenible</h3>

                            <p>
                                Proyectos fáciles de corregir y modificar gracias a su segmentación por componentes y a la reusabilidad de los mismos.</p>
                        </Col>
                        <Col md={3}>
                            <img src={Icon3} alt='icon' className='feature-img' />
                            <h3>Reutilizable</h3>
                            <p>
                                Reusabilidad de los componentes para conseguir proyectos menos pesados y con menos líneas de código.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <a href='#feature' className='scrollto circle' onClick={handleAction}>
                <p className='drop-text open visible'>Abrir</p>
                <p className='drop-text close'>Cerrar</p>
            </a>

        </div>
    );
}

export default Features
    ;